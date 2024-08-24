import { Badge } from "@/components/Badge";
import React from "react";

const CommunityBadges = () => {
  return (
    <div className="bg-elevation-1-dark rounded-lg shadow-md">
      <div className="bg-elevation-2-dark p-2 rounded-t-lg border-b-elevation-background-dark">
        <p className="text-sm text-text-primary-dark ">Community Badges</p>
      </div>
      <div className="flex overflow-x-auto space-x-4 mt-4 custom-scrollbar">
        {communityBadges.map((badge, index) => (
          <div key={index} className="flex-shrink-0 mb-1">
            <Badge
              title={badge.name}
              actions={badge.actions}
              icon={badge.icon}
              multiplier={badge.multiplier}
              isSelected={badge.isSelected}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const communityBadges = [
  {
    name: "Discord OG",
    icon: "/images/badge.svg",
    actions: 3,
    multiplier: "1.15x",
    isSelected: true,
  },
  {
    name: "Liquidity Machine",
    icon: "/images/badge.svg",
    actions: 3,
    multiplier: "1.15x",
    isSelected: false,
  },
  {
    name: "Income Engineer",
    icon: "/images/badge.svg",
    actions: 3,
    multiplier: "2x",
    isSelected: false,
  },
  {
    name: "Pudgy OG",
    icon: "/images/badge.svg",
    actions: 3,
    multiplier: "200 Points",
    isSelected: false,
  },
  {
    name: "Pathfinder OG",
    icon: "/images/badge.svg",
    actions: 3,
    multiplier: "1.15x",
    isSelected: false,
  },
  {
    name: "Rookie Badge",
    icon: "/images/badge.svg",
    actions: 1,
    multiplier: "150 Points",
    isSelected: false,
  },
  {
    name: "Check Badge",
    icon: "/images/badge.svg",
    actions: 1,
    multiplier: "100 Points",
    isSelected: false,
  },
];

export default CommunityBadges;
