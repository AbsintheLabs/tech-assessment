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

  const getBadgeStyle = (index: number) => {
    const isSelected = index === selectedBadgeIndex;
    const distanceFromSelected = Math.abs(index - (selectedBadgeIndex || 0));
    const scale = 1 - Math.min(distanceFromSelected * 0.1, 0.3); // Gradually reduce size
    const opacity = 1 - Math.min(distanceFromSelected * 0.3, 0.6); // Gradually reduce opacity

    return {
      transform: `scale(${scale})`,
      opacity: isSelected ? 1 : opacity,
      filter: isSelected ? "none" : "grayscale(100%)",
      zIndex: isSelected ? 20 : 10 - distanceFromSelected,
    };
  };

  return (
    <div className="relative w-full bg-elevation-1-dark p-4 rounded-lg shadow-md transition-height duration-300">
      <button
        className={`absolute left-0 top-0 bottom-0 text-white w-16 text-4xl p-2 bg-elevation-3-dark rounded-full transition-opacity duration-300 ${
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
        className="flex justify-center items-center overflow-x-auto space-x-12 h-full scrollbar-hide custom-scrollbar mx-20"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {badges.map((badge, index) => (
          <div
            key={badge.name}
            className="transition-transform duration-500 ease-in-out transform"
            style={{
              flexShrink: 0,
              width: `${badgeWidth}px`,
              scrollSnapAlign: "center",
              ...getBadgeStyle(index),
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
              showMinimal={index !== selectedBadgeIndex}
            />
          </div>
        ))}
      </div>
      <button
        className={`absolute right-0 top-0 bottom-0 text-white text-4xl p-2 w-16 bg-elevation-3-dark rounded-full transition-opacity duration-300 ${
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
  );
};
