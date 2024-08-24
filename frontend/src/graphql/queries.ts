import { gql } from "@apollo/client";

export const FETCH_LOGS = gql`
  query FetchLogs($lastFetchedBlock: numeric) {
    logs(
      where: { block_number: { _gt: $lastFetchedBlock } }
      order_by: { block_number: desc }
    ) {
      transaction_hash
      decoded
      address
      block_number
      block_timestamp
      from
      to
    }
  }
`;

export interface Log {
  transaction_hash: string;
  decoded: {
    to: string;
    sender: string;
    amount0In: string;
    amount1In: string;
    amount0Out: string;
    amount1Out: string;
  };
  address: string;
  block_number: number;
  block_timestamp: string;
  from: string;
  to: string;
}

export interface FetchLogsData {
  logs: Log[];
}

export interface FetchLogsVars {
  lastFetchedBlock: any; // Use `any` to bypass the type issue
}
