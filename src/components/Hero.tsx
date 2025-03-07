import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const textLines = [
    'Race Now',
    'Earn Rewards',
    'Join Tournaments',
    'Trade NFTs',
    'Build Your Team',
    'Become a Legend',
  ];

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent"
        >
          FAST X FURIOUS
        </motion.h1>

        <div className="h-[1.5em] overflow-hidden mb-8">
          <div className="animate-text-slide">
            {textLines.map((line, index) => (
              <div
                key={index}
                className="text-2xl md:text-3xl font-semibold text-white"
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          The first decentralized street racing metaverse. Mint your NFT supercar,
          compete in high-stakes races, and earn real crypto rewards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-dark hover:bg-primary text-white font-bold rounded-lg transition-colors duration-200 animate-glow"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent-dark hover:bg-accent text-white font-bold rounded-lg transition-colors duration-200"
          >
            Connect Wallet
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;