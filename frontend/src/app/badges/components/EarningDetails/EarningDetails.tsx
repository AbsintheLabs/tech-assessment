import React from "react";
import clsx from "clsx";

import * as Progress from "@radix-ui/react-progress";
import ProgressBar from "@/components/ProgressBar";

const EarningDetails = () => {
  return (
    <div className="bg-elevation-1-dark p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <p className="text-sm text-text-primary-dark">How to Earn:</p>
          <p className="text-sm text-text-secondary-dark">
            Complete the actions for the badge, no specific order needed.
          </p>
        </div>
        <div className="text-xs text-text-primary-dark flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-2">
          <span className="bg-elevation-3-dark p-1 px-2 rounded-full text-center">
            1/3 Completed
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="bg-states-success-elevation1-dark p-1 px-2 rounded-full text-center">
            Total Earnings: 3,000
          </span>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-4 mt-4 pb-2 scrollbar-thin scrollbar-thumb-gray-700 custom-scrollbar scrollbar-track-gray-900">
        {actions.map((action, index) => (
          <ActionCard
            key={index}
            action={action.action}
            completed={action.completed}
          />
        ))}
      </div>

      <div className="p-4">
        <ProgressBar progress={30} />
      </div>
    </div>
  );
};

const ActionCard = ({
  action,
  completed,
}: {
  action: string;
  completed?: boolean;
}) => {
  return (
    <div
      className={clsx("bg-elevation-2-dark rounded-xl", {
        // "border border-green-500": completed
      })}
    >
      <div className="flex items-center justify-between max-h-[35px] p-2 rounded-t-md bg-elevation-3-dark border-b-elevation-background-dark">
        <span className="block text-sm font-semibold text-text-secondary-dark">
          Action
        </span>
        {completed && (
          <span className="text-states-success-main-dark bg-states-success-elevation1-dark px-2 rounded-full text-xs inline-block">
            Completed
          </span>
        )}
      </div>

      <p className="text-sm text-text-secondary-dark text-nowrap p-2">
        {action}
      </p>
    </div>
  );
};

const actions = [
  {
    action: "Provide at least $50 Liquidity to USDT/ETH",
    completed: true,
  },
  {
    action: "Provide at least $50 Liquidity to LINK/ETH",
  },
  {
    action: "Provide at least $100 Liquidity to WBTC/ETH",
  },
  // {
  //   action: "Provide at least $100 Liquidity to USDT/ETH",
  // },
  // {
  //   action: "Provide at least $250 Liquidity to LINK/ETH",
  // },
  // {
  //   action: "Provide at least $300 Liquidity to WBTC/ETH",
  // },
  // Add more actions as needed
];

export default EarningDetails;
