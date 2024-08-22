import React from "react";

const EarningDetails = () => {
  return (
    <div className="bg-elevation-2-dark p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">How to Earn:</h3>
      <p className="text-sm">
        Complete the actions for the badge, no specific order needed.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-elevation-3-dark p-4 rounded-lg">
          <span>Action</span>
          <p>Provide at least $50 Liquidity to USDT/ETH</p>
          <span className="text-green-500">Completed</span>
        </div>
        <div className="bg-elevation-3-dark p-4 rounded-lg">
          <span>Action</span>
          <p>Provide at least $50 Liquidity to LINK/ETH</p>
        </div>
        <div className="bg-elevation-3-dark p-4 rounded-lg">
          <span>Action</span>
          <p>Provide at least $100 Liquidity to WBTC/ETH</p>
        </div>
      </div>
    </div>
  );
};

export default EarningDetails;
