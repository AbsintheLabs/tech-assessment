"use client";

import React from "react";
import clsx from "clsx";

interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className }) => {
  return (
    <div
      className={clsx(
        "relative h-2 rounded-full bg-elevation-3-dark overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute h-full bg-brands-primary-dark"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
