import React, { useState } from "react";
import clsx from "clsx";

interface BadgeProps {
  title: string;
  actions: number;
  icon: string;
  multiplier: string;
  showDetails?: boolean;
  details?: string; // New prop for additional details
  isSelected?: boolean;
  onClick?: () => void;
  loading?: boolean;
}

export const Badge = ({
  title,
  actions,
  icon,
  multiplier,
  isSelected = false,
  showDetails = false,
  onClick,
  loading = false,
  details, // Include the details prop
}: BadgeProps) => {
  return (
    <div className="w-full h-full">
      <div
        onClick={onClick}
        className={clsx(
          "relative flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all duration-300",
          {
            "border-2 border-green-500": isSelected,
            "border-transparent": !isSelected,
          },
          "hover:border-green-500",
          "bg-elevation-3-dark w-[12rem] h-[12rem]",
        )}
      >
        <div className="flex flex-col items-center justify-between text-text-primary-dark">
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
          <img src={icon} alt={title} className={clsx("w-16 h-16")} />
        </div>
        <div
          className={clsx(
            "absolute bottom-0 w-full rounded-b-lg py-2 text-center left-1/2 transform -translate-x-1/2 text-states-success-main-dark text-sm bg-states-success-elevation1-dark",
            { "blur-sm opacity-50": loading },
          )}
        >
          {multiplier}
        </div>
      </div>

      {showDetails && details && (
        <div className="relative w-full bg-elevation-2-dark rounded-lg shadow-lg mt-2 p-2 text-center text-text-primary-dark">
          <p className="text-sm text-text-primary-dark">{"Reward Details"}</p>
          <p className="text-sm text-text-secondary-dark">{details}</p>
        </div>
      )}
    </div>
  );
};
