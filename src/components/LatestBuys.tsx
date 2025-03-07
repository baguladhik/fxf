import React from 'react';
import { motion } from 'framer-motion';

const LatestBuys = () => {
  const transactions = [
    {
      address: '0x1234...5678',
      amount: '25,000 FXF',
      time: '2 minutes ago',
      hash: '0xabcd...efgh',
    },
    {
      address: '0x8765...4321',
      amount: '15,000 FXF',
      time: '5 minutes ago',
      hash: '0xijkl...mnop',
    },
    {
      address: '0x9876...5432',
      amount: '50,000 FXF',
      time: '10 minutes ago',
      hash: '0xqrst...uvwx',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
            Latest Buys
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="px-6 py-3">Address</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3">Transaction</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-700 hover:bg-gray-700/50"
                  >
                    <td className="px-6 py-4 text-primary-light">{tx.address}</td>
                    <td className="px-6 py-4 font-medium">{tx.amount}</td>
                    <td className="px-6 py-4 text-gray-400">{tx.time}</td>
                    <td className="px-6 py-4 text-accent-light">{tx.hash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBuys;