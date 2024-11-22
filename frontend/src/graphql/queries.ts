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

export function getMockGraphQlData() {
  const randomTxId = () => Math.random().toString(36).substring(2, 15);
  const randomAmount = () => (Math.random() * 100).toFixed(2);

  return Array.from({ length: 5 }, (_, index) => ({
    transaction_hash: randomTxId(),
    decoded: {
      amount0In: randomAmount(),
    },
    address: `0x${randomTxId()}`,
    block_number: index + 1,
    block_timestamp: new Date(Date.now() - index * 60000).toISOString(),
    type: index % 2 === 0 ? "Transfer" : "Swap",
  }));
}
