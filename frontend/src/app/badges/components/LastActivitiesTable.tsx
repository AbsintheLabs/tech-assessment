"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import { FETCH_LOGS, FetchLogsData, FetchLogsVars } from "@/graphql/queries";
import { Spinner } from "@radix-ui/themes";

function formatTxId(txId: string): string {
  if (txId.length <= 8) {
    return txId;
  }
  const start = txId.slice(0, 4);
  const end = txId.slice(-4);
  return `${start}...${end}`;
}

const TransactionIcon = (iconName: string) => (
  <Image
    src={`/images/${iconName || "tx-icon.svg"}`}
    alt={"Transaction"}
    width={24}
    height={24}
    className="w-5 h-5 text-blue-500"
  />
);

export const LastActivitiesTable: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [activities, setActivities] = useState<any[]>([]); // State to store activities
  const [lastFetchedBlock, setLastFetchedBlock] = useState<any>(null);

  const { data, loading, error, startPolling, stopPolling } = useQuery<
    FetchLogsData,
    FetchLogsVars
  >(FETCH_LOGS, {
    variables: {
      lastFetchedBlock: lastFetchedBlock !== null ? lastFetchedBlock : "0",
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data.logs.length > 0) {
        const maxBlockNumber = Math.max(
          ...data.logs.map((log) => parseFloat(log.block_number.toString())),
        );
        setLastFetchedBlock(maxBlockNumber);

        setActivities((prevActivities) => [...data.logs, ...prevActivities]);
        console.log("New added data:", data.logs);
      }
    },
  });

  useEffect(() => {
    startPolling(2000); // Start polling every 2 seconds
    return () => {
      stopPolling(); // Stop polling when the component unmounts
    };
  }, [startPolling, stopPolling]);

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

  if (loading && !data)
    return (
      <div className="text-center text-text-secondary-dark">
        <Spinner size={"3"} className="w-200 h-200 bg-red-500" />
        Loading ...
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  function formatTime(date: Date): string {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="bg-elevation-background-dark rounded-lg shadow-md max-h-[400px]">
      <div className="overflow-x-auto custom-scrollbar max-h-[400px]">
        <table className="w-full text-left rounded-lg min-w-[600px]">
          <thead className="sticky top-0 bg-elevation-3-dark">
            <tr>
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
                    {activity.decoded.amount0In}
                  </p>
                </td>
                <td className="px-4 py-2 text-text-secondary-dark text-sm font-normal">
                  <div className="flex items-center gap-2">
                    <span className="text-text-secondary-dark text-sm font-normal">
                      {formatDate(new Date(activity.block_timestamp))}
                    </span>
                    <span className="text-text-secondary-dark text-sm font-normal bg-elevation-3-dark p-1 px-2 rounded-full">
                      {formatTime(new Date(activity.block_timestamp))}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2 flex items-center w-full justify-between">
                  <div className="flex items-center">
                    <span className="text-text-secondary-dark text-sm font-normal">
                      {formatTxId(activity.transaction_hash)}
                    </span>
                    <button
                      className="ml-2 items-center text-text-secondary-dark text-xs bg-elevation-3-dark p-1 px-2 rounded-full hover:text-text-primary-dark w-14"
                      onClick={() => handleCopyClick(activity.transaction_hash)}
                    >
                      {copied === activity.transaction_hash ? "Copied" : "Copy"}
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
    </div>
  );
};

export default LastActivitiesTable;
