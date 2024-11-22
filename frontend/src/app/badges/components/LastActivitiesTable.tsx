"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import { getMockGraphQlData } from "@/graphql/queries";

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

export const LastActivitiesTable = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const activitiesRef = useRef<HTMLTableSectionElement>(null); // Use ref for tbody
  const lastFetchedBlockRef = useRef<any>(null); // Track the last fetched block without triggering re-renders

  // Helper to append rows directly to the table body
  const appendNewRows = useCallback((newLogs: any[]) => {
    if (!activitiesRef.current) return;

    newLogs.forEach((log, index) => {
      const row = document.createElement("tr");
      row.className = clsx(
        "odd:bg-elevation-1-dark even:bg-elevation-2-dark hover:bg-brands-primary-dark transition-colors duration-200 text-text-primary-dark",
        "new-row-animation",
      );

      row.innerHTML = `
        <td class="px-4 py-2 flex items-center font-normal">
          <img src="/images/${index % 2 === 0 ? "tx-icon.svg" : "bridged-icon.svg"}" alt="Transaction" class="w-5 h-5 text-blue-500" />
          <span class="ml-2 text-sm font-normal">${log.type}</span>
        </td>
        <td class="px-4 py-2 text-center text-sm font-normal">
          <p class="text-states-success-main-dark bg-states-success-elevation1-dark rounded-full w-fit px-2">${log.decoded.amount0In}</p>
        </td>
        <td class="px-4 py-2 text-text-secondary-dark text-sm font-normal">
          <div class="flex items-center gap-2">
            <span class="text-text-secondary-dark text-sm font-normal">${formatDate(new Date(log.block_timestamp))}</span>
            <span class="text-text-secondary-dark text-sm font-normal bg-elevation-3-dark p-1 px-2 rounded-full">${formatTime(new Date(log.block_timestamp))}</span>
          </div>
        </td>
        <td class="px-4 py-2 flex items-center w-full justify-between">
          <div class="flex items-center">
            <span class="text-text-secondary-dark text-sm font-normal w-[100px]">${formatTxId(log.transaction_hash)}</span>
            <button class="copy-button ml-2 items-center text-text-secondary-dark text-xs bg-elevation-3-dark p-1 px-2 rounded-full hover:text-text-primary-dark w-14">
              Copy
            </button>
          </div>
          <button class="ml-2 p-1">
            <svg class="text-text-secondary-dark hover:text-text-primary-dark" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M..." />
            </svg>
          </button>
        </td>
      `;

      // Add event listener for the copy button
      const copyButton = row.querySelector(".copy-button");
      copyButton?.addEventListener("click", () =>
        handleCopyClick(log.transaction_hash),
      );

      activitiesRef.current?.appendChild(row);
    });
  }, []);

  // Mock new data fetch on polling
  const fetchMockData = useCallback(() => {
    const newLogs = getMockGraphQlData(); // Generate new mock logs
    appendNewRows(newLogs); // Append rows directly
    if (newLogs.length > 0) {
      const maxBlockNumber = Math.max(
        ...newLogs.map((log) => log.block_number),
      );
      lastFetchedBlockRef.current = maxBlockNumber; // Track last fetched block
    }
  }, [appendNewRows]);

  useEffect(() => {
    const interval = setInterval(fetchMockData, 5000); // Poll every 2 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [fetchMockData]);

  // const { data, loading, error, startPolling, stopPolling } = useQuery<
  //   FetchLogsData,
  //   FetchLogsVars
  // >(FETCH_LOGS, {
  //   variables: {
  //     lastFetchedBlock: lastFetchedBlock !== null ? lastFetchedBlock : "0",
  //   },
  //   notifyOnNetworkStatusChange: true,
  //   onCompleted: (data) => {
  //     if (data.logs.length > 0) {
  //       const maxBlockNumber = Math.max(
  //         ...data.logs.map((log) => parseFloat(log.block_number.toString())),
  //       );
  //       setLastFetchedBlock(maxBlockNumber);
  //       addNewData(data.logs); // Use the useCallback function to add new data
  //     }
  //   },
  // });

  // Commented to use mock data for demonstration purposes
  // useEffect(() => {
  //   startPolling(2000); // Start polling every 2 seconds
  //   return () => {
  //     stopPolling(); // Stop polling when the component unmounts
  //   };
  // }, [startPolling, stopPolling]);

  const handleCopyClick = useCallback((txId: string) => {
    navigator.clipboard
      .writeText(txId)
      .then(() => {
        setCopied(txId);
        setTimeout(() => setCopied(null), 1000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  }, []);

  // if (loading && !data)
  //   return (
  //     <div className="text-center text-text-secondary-dark">
  //       <Spinner size={"3"} className="w-200 h-200 bg-red-500" />
  //       Loading ...
  //     </div>
  //   );

  // if (error) return <p>Error: {error.message}</p>;

  function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
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
    <div className="bg-elevation-background-dark rounded-lg shadow-md max-h-[300px]">
      <div className="overflow-x-auto custom-scrollbar max-h-[300px]">
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
          <tbody ref={activitiesRef}></tbody>
        </table>
      </div>
    </div>
  );
};

export default LastActivitiesTable;
