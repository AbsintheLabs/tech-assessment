import React from "react";

const BadgeCarousel = () => {
  return (
    <div className="bg-elevation-2-dark p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <button className="text-white">‹</button> {/* Previous Button */}
        <div className="flex overflow-x-auto space-x-4">
          {/* Map through badges */}
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img src={badge.icon} alt={badge.name} className="w-16 h-16" />
              <span className="text-xs">{badge.name}</span>
            </div>
          ))}
        </div>
        <button className="text-white">›</button> {/* Next Button */}
      </div>
    </div>
  );
};

const badges = [
  { name: "Liquidity Machine", icon: "/icons/liquidity-machine.svg" },
  { name: "Income Engineer", icon: "/icons/income-engineer.svg" },
  // Add more badges as needed
];

export default BadgeCarousel;
