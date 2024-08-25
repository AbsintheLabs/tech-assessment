"use client";
import { BadgeCarousel } from "./components/BadgeCarousel";
import EarningDetails from "./components/EarningDetails/EarningDetails";
import CommunityBadges from "./components/CommunityBadges";
import { LastActivitiesTable } from "./components/LastActivitiesTable";
import { useState } from "react";

export default function BadgesPage() {
  const [selectedBadgeIndex, setSelectedBadgeIndex] = useState<number | null>(
    null,
  );

  const handleBadgeSelect = (index: number) => {
    setSelectedBadgeIndex(index);
  };

  return (
    <div className="bg-elevation-background-dark text-text-primary-dark p-6 space-y-8">
      <p className="text-sm text-text-secondary-dark">Last Activities</p>
      <LastActivitiesTable />

      <p className="text-sm text-text-secondary-dark">Badges</p>
      <BadgeCarousel
        badges={badges}
        selectedBadgeIndex={selectedBadgeIndex}
        onBadgeSelect={handleBadgeSelect}
      />
      <EarningDetails />
      <CommunityBadges badges={badges} onBadgeClick={handleBadgeSelect} />
    </div>
  );
}

export type Badge = {
  name: string;
  icon: string;
  actions: number;
  multiplier: string;
  details: string;
  userHoldsTheBadge?: boolean;
  isSelected?: boolean;
};

const badges: Badge[] = [
  {
    name: "Liquidity Machine",
    icon: "/images/badges/liquidity-badge.svg",
    actions: 3,
    multiplier: "1.15x",
    details: "Liquidity Machine details",
    userHoldsTheBadge: true,
  },
  {
    name: "Income Engineer",
    icon: "/images/badges/income-engineer-badge.svg",
    actions: 2,
    multiplier: "2x",
    details: "Income Engineer details",
    userHoldsTheBadge: true,
  },
  {
    name: "Discord OG",
    icon: "/images/badges/discord-badge.svg",
    actions: 3,
    multiplier: "1.15x",
    details: "Discord OG details",
  },
  {
    name: "Pathfinder OG",
    icon: "/images/badges/pathfinder-badge.svg",
    actions: 2,
    multiplier: "3x",
    details: "Pathfinder details",
  },
  {
    name: "Rookie Badge",
    icon: "/images/badges/rookie-badge.svg",
    actions: 3,
    multiplier: "1.45x",
    details: "Rookie details",
  },
  {
    name: "Pudgy OG",
    icon: "/images/badges/pudgy-badge.svg",
    actions: 4,
    multiplier: "5x",
    details: "Pudgy details",
  },
];
