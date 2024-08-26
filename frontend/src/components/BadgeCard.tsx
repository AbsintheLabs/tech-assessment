import React, { useState } from "react";
import clsx from "clsx";

interface BadgeCardProps {
  title: string;
  actions: number;
  icon: string;
  multiplier: string;
  showDetails?: boolean;
  details?: string; // New prop for additional details
  isSelected?: boolean;
  onClick?: () => void;
  loading?: boolean;
  showBorder?: boolean;
  showMinimal?: boolean;
}

export const BadgeCard = ({
  title,
  actions,
  icon,
  multiplier,
  isSelected = false,
  showDetails = false,
  onClick,
  loading = false,
  showBorder = false,
  showMinimal = false,
  details, // Include the details prop
}: BadgeCardProps) => {
  return (
    <div className="w-full h-full">
      <div
        onClick={onClick}
        className={clsx(
          "relative flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all duration-300",
          // {
          //   "border-2 border-green-500": isSelected,
          //   "border-transparent": !isSelected,
          // },
          {
            "border-2 border-states-success-main-dark": showBorder,
            "border-transparent": !showBorder,
          },
          "hover:border-states-success-main-dark",
          "bg-elevation-3-dark w-[12rem] h-[12rem]",
        )}
      >
        <div className="flex flex-col items-center justify-between text-text-primary-dark">
          {!showMinimal && (
            <div className="flex absolute top-0 left-0 right-0 justify-center items-center bg-elevation-2-dark rounded-t-lg py-2">
              <p
                className={clsx("text-center text-sm", {
                  "blur-sm opacity-50": loading,
                })}
              >
                {title}
              </p>
              <p
                className={clsx(
                  "text-text-secondary-dark text-xs ml-2 text-nowrap",
                  { "blur-sm opacity-50": loading },
                )}
              >
                {actions} Actions
              </p>
            </div>
          )}
          <img src={icon} alt={title} className={clsx("w-16 h-16")} />
        </div>
        {!showMinimal && (
          <div
            className={clsx(
              "absolute bottom-0 w-full rounded-b-lg py-2 text-center left-1/2 transform -translate-x-1/2 text-states-success-main-dark text-sm bg-states-success-elevation1-dark",
              { "blur-sm opacity-50": loading },
            )}
          >
            {multiplier}
          </div>
        )}
      </div>

      {showDetails && details && isSelected && (
        <div className="relative w-[12rem] bg-elevation-2-dark rounded-lg shadow-lg mt-2 p-2 text-center text-text-primary-dark">
          <p className="text-sm text-text-primary-dark">{"Reward Details"}</p>
          <p className="text-sm text-text-secondary-dark">{details}</p>
        </div>
      )}

      {showDetails && details && !isSelected && (
        <div className="relative w-[12rem] bg-elevation-2-dark rounded-lg shadow-lg mt-2 p-2 text-center text-text-primary-dark">
          <div className="flex justify-between space-x-2 w-full">
            <div className="h-3 w-full bg-text-disabled-dark rounded-full" />
            <div className="h-3 w-full bg-text-disabled-dark rounded-full" />
            <div className="h-3 w-full bg-text-disabled-dark rounded-full" />
          </div>
          <div className="w-full h-3 bg-text-disabled-dark rounded-full mt-2" />
        </div>
      )}
    </div>
  );
};
