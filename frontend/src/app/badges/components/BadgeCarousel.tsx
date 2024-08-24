"use client";
import { Badge } from "@/components/Badge";
import React, { useState, useEffect } from "react";

const BadgeCarousel = () => {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [badgesPerView, setBadgesPerView] = useState(1);

  const totalBadges = badges.length;
  const badgeWidth = 160;

  useEffect(() => {
    const updateBadgesPerView = () => {
      const windowWidth = window.innerWidth;
      const badgesInView = Math.floor(windowWidth / badgeWidth);
      setBadgesPerView(badgesInView > 0 ? badgesInView : 1); // Ensure at least 1 badge is visible
    };

    updateBadgesPerView(); // Initial calculation
    window.addEventListener("resize", updateBadgesPerView);

    return () => window.removeEventListener("resize", updateBadgesPerView);
  }, []);

  const handleBadgeClick = (name: string) => {
    setSelectedBadge((prevSelected) => (prevSelected === name ? null : name)); // Toggle selection
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalBadges - badgesPerView,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalBadges - badgesPerView ? prevIndex + 1 : 0,
    );
  };

  const getBadgeSize = (index: number) => {
    const visibleIndex = index - currentIndex;
    const centerIndex = Math.floor(badgesPerView / 2);
    const offset = Math.abs(visibleIndex - centerIndex);

    switch (offset) {
      case 0:
        return "scale-100 z-20"; // Center badge is the largest and on top
      case 1:
        return "scale-90 z-10"; // Next to center badge
      case 2:
        return "scale-80 z-0"; // Further away from center
      default:
        return "scale-70 z-0"; // Others
    }
  };

  return (
    <div className="bg-elevation-1-dark p-4 rounded-lg shadow-md transition-height duration-300">
      <div className="flex items-center justify-between">
        <button
          className={`text-white text-4xl p-2 bg-black rounded-full transition-opacity duration-300 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          ‹
        </button>
        <div className="relative flex overflow-hidden space-x-4 h-full">
          {badges
            .slice(currentIndex, currentIndex + badgesPerView)
            .map((badge, index) => (
              <div
                key={index}
                className={`transition-transform duration-500 ease-in-out transform ${getBadgeSize(
                  currentIndex + index,
                )}`}
              >
                <Badge
                  title={badge.name}
                  actions={badge.actions}
                  icon={badge.icon}
                  multiplier={badge.multiplier}
                  isSelected={selectedBadge === badge.name}
                  details={badge.details || "No details"}
                  showDetails={true}
                  onClick={() => handleBadgeClick(badge.name)}
                />
              </div>
            ))}
        </div>
        <button
          className={`text-white text-4xl p-2 bg-black rounded-full transition-opacity duration-300 ${
            currentIndex >= totalBadges - badgesPerView
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          onClick={handleNextClick}
          disabled={currentIndex >= totalBadges - badgesPerView}
        >
          ›
        </button>
      </div>
    </div>
  );
};

const badges = [
  {
    name: "Liquidity Machine",
    icon: "/images/badge.svg",
    actions: 3,
    multiplier: "1.15x",
    details: "Liquidity Machine details",
  },
  {
    name: "Income Engineer",
    icon: "/images/badge.svg",
    actions: 2,
    multiplier: "2x",
    details: "Income Engineer details",
  },
  // {
  //   name: "Liquidity Machine2",
  //   icon: "/images/badge.svg",
  //   actions: 3,
  //   multiplier: "1.15x",
  // },
  // {
  //   name: "Income Engineer2",
  //   icon: "/images/badge.svg",
  //   actions: 2,
  //   multiplier: "2x",
  //   details: "Income Engineer2 details",
  // },
  // {
  //   name: "Liquidity Machine3",
  //   icon: "/images/badge.svg",
  //   actions: 3,
  //   multiplier: "1.15x",
  //   details: "Liquidity Machine3 details",
  // },
  // {
  //   name: "Income Engineer3",
  //   icon: "/images/badge.svg",
  //   actions: 2,
  //   multiplier: "2x",
  //   details: "Income Engineer3 details",
  // },
  // {
  //   name: "Liquidity Machine4",
  //   icon: "/images/badge.svg",
  //   actions: 3,
  //   multiplier: "1.15x",
  //   details: "Liquidity Machine4 details",
  // },
  // {
  //   name: "Income Engineer4",
  //   icon: "/images/badge.svg",
  //   actions: 2,
  //   multiplier: "2x",
  //   details: "Income Engineer4 details",
  // },
  // {
  //   name: "Liquidity Machine5",
  //   icon: "/images/badge.svg",
  //   actions: 3,
  //   multiplier: "1.15x",
  //   details: "Liquidity Machine5 details",
  // },
  // {
  //   name: "Income Engineer5",
  //   icon: "/images/badge.svg",
  //   actions: 2,
  //   multiplier: "2x",
  //   details: "Income Engineer5 details",
  // },
  {
    name: "Liquidity Machine6",
    icon: "/images/badge.svg",
    actions: 3,
    multiplier: "1.15x",
    details: "Liquidity Machine6 details",
  },
  {
    name: "Income Engineer6",
    icon: "/images/badge.svg",
    actions: 2,
    multiplier: "2x",
    details: "Income Engineer6 details",
  },
];

export default BadgeCarousel;
