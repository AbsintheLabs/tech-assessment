"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_LOGS, FetchLogsData, FetchLogsVars } from "../graphql/queries";

const LogsComponent: React.FC = () => {
  const [lastFetchedBlock, setLastFetchedBlock] = useState<any>(null);

  const { data, loading, error, refetch } = useQuery<
    FetchLogsData,
    FetchLogsVars
  >(FETCH_LOGS, {
    variables: {
      lastFetchedBlock: lastFetchedBlock !== null ? lastFetchedBlock : "0",
    }, // Pass as string
    pollInterval: 10000, // Poll every 10 seconds
    onCompleted: (data) => {
      if (data.logs.length > 0) {
        const maxBlockNumber = Math.max(
          ...data.logs.map((log) => parseFloat(log.block_number.toString())),
        );
        setLastFetchedBlock(maxBlockNumber);
        console.log(
          `Last fetched block: ${maxBlockNumber} data: ${JSON.stringify(data)}`,
        );
      }
    },
  });

  useEffect(() => {
    if (data && data.logs.length > 0) {
      // Handle new data, e.g., display or store in state
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Logs</h1>
      <ul>
        {data?.logs.map((log) => (
          <li key={log.transaction_hash}>
            <strong>Tx Hash:</strong> {log.transaction_hash}
            <br />
            <strong>Block:</strong> {log.block_number}
            <br />
            <strong>From:</strong> {log.from}
            <br />
            <strong>To:</strong> {log.to}
            <br />
            <strong>Amount0 In:</strong> {log.decoded.amount0In}
            <br />
            <strong>Amount1 Out:</strong> {log.decoded.amount1Out}
            <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsComponent;
