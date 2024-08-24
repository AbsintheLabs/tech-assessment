"use client";

import React, { useState } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

function formatTxId(txId: string): string {
  if (txId.length <= 8) {
    return txId;
  }
  const start = txId.slice(0, 4);
  const end = txId.slice(-4);
  return `${start}...${end}`;
}

import Image from "next/image"; // Importing Next.js Image component

const TransactionIcon = (iconName: string) => (
  <Image
    src={`/images/${iconName}`} // Replace with your actual local path
    alt={"Transaction"} // Accessible alt text
    width={24} // Width of the icon
    height={24} // Height of the icon
    className="w-5 h-5 text-blue-500"
  />
);

export const LastActivitiesTable = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopyClick = (txId: string) => {
    navigator.clipboard
      .writeText(txId)
      .then(() => {
        setCopied(txId); // Set the copied state to the current txId
        setTimeout(() => {
          setCopied(null);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="bg-elevation-background-dark rounded-lg shadow-md overflow-x-auto  custom-scrollbar">
      <table className="w-full text-left rounded-lg min-w-[600px]">
        <thead>
          <tr className="bg-elevation-3-dark">
            <th className="px-4 py-2 text-sm font-normal rounded-tl-lg">
              Activities
            </th>
            <th className="px-4 py-2 text-sm font-normal">Points</th>
            <th className="px-4 py-2 text-sm font-normal">Date</th>
            <th className="px-4 py-2 text-sm font-normal rounded-tr-lg">
              TXID
            </th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr
              key={index}
              className={clsx(
                "odd:bg-elevation-1-dark even:bg-elevation-2-dark hover:bg-brands-primary-dark transition-colors duration-200 text-text-primary-dark",
                index === activities.length - 1 ? "rounded-b-lg" : "",
              )}
            >
              <td className="px-4 py-2 flex items-center font-normal">
                {TransactionIcon(activity.icon)}
                <span className="ml-2 text-sm font-normal">
                  {activity.type}
                </span>
              </td>
              <td className="px-4 py-2 text-center text-sm font-normal">
                <p className="text-states-success-main-dark bg-states-success-elevation1-dark rounded-full w-fit px-2">
                  {activity.points}
                </p>
              </td>
              <td className="px-4 py-2 text-text-secondary-dark text-sm font-normal">
                {activity.date}
              </td>
              <td className="px-4 py-2 flex items-center w-full justify-between">
                <div className="flex items-center">
                  <span className="text-text-secondary-dark text-sm font-normal">
                    {formatTxId(activity.txid)}
                  </span>
                  <button
                    className="ml-2 items-center text-text-secondary-dark text-xs bg-elevation-3-dark p-1 px-2 rounded-full hover:text-text-primary-dark w-14"
                    onClick={() => handleCopyClick(activity.txid)}
                  >
                    {copied === activity.txid ? "Copied" : "Copy"}
                  </button>
                </div>
                <button className="ml-2 p-1">
                  <ExternalLinkIcon className="text-gray-400 hover:text-text-primary-dark" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const activities = [
  {
    type: "Transaction",
    points: "+560",
    date: "20.06.2024 14:10:35",
    txid: "0xa12a122137770132dsadadas121bac",
    icon: "tx-icon.svg",
  },
  {
    type: "Transaction",
    points: "+560",
    date: "20.06.2024 13:47:22",
    txid: "0xa12a12214566123132dsadadas121bac",
    icon: "tx-icon.svg",
  },
  {
    type: "Bridged",
    points: "+262",
    date: "20.06.2024 13:40:35",
    txid: "0xa12a12216663123132dsadadas121bac",
    icon: "bridged-icon.svg",
  },
  {
    type: "Transaction",
    points: "+194",
    date: "20.06.2024 14:10:35",
    txid: "0xa15a12213123123132dsada2s121bac",
    icon: "tx-icon.svg",
  },
  {
    type: "Bridged",
    points: "+155",
    date: "20.06.2024 14:10:35",
    txid: "0xa14a12213123123132dsadadas121bac",
    icon: "bridged-icon.svg",
  },
  {
    type: "Transaction",
    points: "+142",
    date: "20.06.2024 14:10:35",
    txid: "0xa12a121235123132dsadadas121bac",
    icon: "tx-icon.svg",
  },
];
