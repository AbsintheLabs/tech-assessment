"use client";

import { BadgeCard } from "@/components/BadgeCard";
import React, { useEffect, useRef } from "react";
import { Badge } from "../page";

interface BadgeCarouselProps {
  badges: Badge[];
  selectedBadgeIndex: number | null;
  onBadgeSelect: (index: number) => void;
}

export const BadgeCarousel: React.FC<BadgeCarouselProps> = ({
  badges,
  selectedBadgeIndex,
  onBadgeSelect,
}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const badgeWidth = 160;

  useEffect(() => {
    if (selectedBadgeIndex !== null) {
      scrollToSelectedBadge(selectedBadgeIndex);
    }
  }, [selectedBadgeIndex]);

  const scrollToSelectedBadge = (index: number) => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.clientWidth;
      const offset = carouselWidth / 2 - badgeWidth / 2;
      const scrollPosition = index * badgeWidth - offset;

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleBadgeClick = (index: number) => {
    onBadgeSelect(index);
  };

  return (
    <div className="bg-elevation-1-dark p-4 rounded-lg shadow-md transition-height duration-300">
      <div className="flex items-center justify-between">
        <button
          className={`text-white text-4xl p-2 bg-black rounded-full transition-opacity duration-300 ${
            selectedBadgeIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          onClick={() => handleBadgeClick(selectedBadgeIndex! - 1)}
          disabled={selectedBadgeIndex === 0}
        >
          ‹
        </button>
        <div
          ref={carouselRef}
          className="relative flex overflow-x-auto space-x-8 h-full scrollbar-hide custom-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {badges.map((badge, index) => (
            <div
              key={badge.name}
              className={`transition-transform duration-500 ease-in-out transform ${
                index === selectedBadgeIndex
                  ? "scale-100 z-20"
                  : "scale-90 blur-sm"
              }`}
              style={{
                flexShrink: 0,
                width: `${badgeWidth}px`,
                scrollSnapAlign: "center",
              }}
              onClick={() => handleBadgeClick(index)}
            >
              <BadgeCard
                title={badge.name}
                actions={badge.actions}
                icon={badge.icon}
                multiplier={badge.multiplier}
                isSelected={index === selectedBadgeIndex}
                details={badge.details || "No details"}
                showDetails={true}
              />
            </div>
          ))}
        </div>
        <button
          className={`text-white text-4xl p-2 bg-black rounded-full transition-opacity duration-300 ${
            selectedBadgeIndex === badges.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          onClick={() => handleBadgeClick(selectedBadgeIndex! + 1)}
          disabled={selectedBadgeIndex === badges.length - 1}
        >
          ›
        </button>
      </div>
    </div>
  );
};
