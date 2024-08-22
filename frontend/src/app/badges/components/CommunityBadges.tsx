import React from "react";

const CommunityBadges = () => {
  return (
    <div className="bg-elevation-2-dark p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Community Badges</h3>
      <div className="flex overflow-x-auto space-x-4 mt-4">
        {/* Map through community badges */}
        {communityBadges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img src={badge.icon} alt={badge.name} className="w-16 h-16" />
            <span className="text-xs">{badge.name}</span>
            <span className="text-sm">{badge.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const communityBadges = [
  { name: "Discord OG", icon: "/icons/discord-og.svg", description: "1.15x" },
  {
    name: "Income Engineer",
    icon: "/icons/income-engineer.svg",
    description: "2x",
  },
  // Add more badges as needed
];

export default CommunityBadges;
