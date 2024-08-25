"use client";

import { BadgeCard } from "@/components/BadgeCard";
import React from "react";
import { Badge } from "../page";

interface CommunityBadgesProps {
  badges: Badge[];
  onBadgeClick: (index: number) => void;
}

const CommunityBadges: React.FC<CommunityBadgesProps> = ({
  badges,
  onBadgeClick,
}) => {
  return (
    <div className="bg-elevation-1-dark rounded-lg shadow-md">
      <div className="bg-elevation-2-dark p-2 rounded-t-lg border-b-elevation-background-dark">
        <p className="text-sm text-text-primary-dark">Community Badges</p>
      </div>
      <div className="flex overflow-x-auto space-x-4 mt-4 custom-scrollbar">
        {badges.map((badge, index) => (
          <div key={index} className="flex-shrink-0 mb-1">
            <BadgeCard
              title={badge.name}
              actions={badge.actions}
              icon={badge.icon}
              multiplier={badge.multiplier}
              isSelected={badge.isSelected}
              showBorder={badge.userHoldsTheBadge}
              onClick={() => onBadgeClick(index)} // Call the parent function on click
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityBadges;
