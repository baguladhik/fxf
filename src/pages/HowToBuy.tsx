import React from "react";
import Footer from "../components/Footer";
const HowToBuy = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">How to Buy FXF</h1>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">
                Step 1: Connect Wallet
              </h2>
              <p className="text-gray-400">
                Connect your Web3 wallet to get started with FXF tokens.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">
                Step 2: Purchase FXF Tokens
              </h2>
              <p className="text-gray-400">
                Use ETH or USDT to purchase FXF tokens through our platform.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">
                Step 3: Start Racing
              </h2>
              <p className="text-gray-400">
                Use your FXF tokens to participate in races and earn rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowToBuy;
