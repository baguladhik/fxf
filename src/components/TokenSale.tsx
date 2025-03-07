import React from "react";
import { motion } from "framer-motion";

const TokenSale = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
            Token Sale
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Buy Tokens</h3>
              <div className="bg-gray-700 rounded-lg p-6">
                <p className="text-2xl font-bold text-primary-light">
                  1 $FxF = $0.0025
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-white-700 dark:text-white">
                    24.06B tokens sold
                  </span>
                  <span className="text-sm font-medium text-white-700 dark:text-white">
                    938.039M tokens remaining
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="text-right rtl:text-left">
                  <span className="text-sm font-medium text-white-700 dark:text-white">
                    Total sale volume: 25.00B
                  </span>
                </div>
                <br />
                <div className="btns text-center">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      ETH
                    </span>
                  </button>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      USDC
                    </span>
                  </button>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      USDT
                    </span>
                  </button>
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
                      Current balance: <b>0 ETH</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <form className="w-full max-w-md mx-auto">
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Email sign-up
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        fill="#ffffff"
                        width="80px"
                        height="80px"
                        viewBox="0 0 32 32"
                      >
                        <path d="M15.927 23.959l-9.823-5.797 9.817 13.839 9.828-13.839-9.828 5.797zM16.073 0l-9.819 16.297 9.819 5.807 9.823-5.801z" />
                      </svg>
                    </div>
                    <input
                      type="number"
                      id="default-number"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-dark focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value="0.000"
                      required
                    />
                    <button
                      type="button"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Max Amount
                    </button>
                  </div>
                </form>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-primary-dark hover:bg-primary text-white font-bold rounded-lg transition-colors duration-200 animate-glow"
                  >
                    Create Wallet
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
              <div className="space-y-4">
                <p className="mt-3">
                  <span>
                    Don't have a wallet?{" "}
                    <a className="text-blue-500" href="#">
                      {" "}
                      Learn more
                    </a>
                  </span>
                </p>
                <p className="mt-3">
                  Please carefully review the{" "}
                  <a className="pink-100" href="">
                    Token Sale Terms & Conditions,
                  </a>{" "}
                  <a className="pink-100" href="">
                    Gold Paper,
                  </a>{" "}
                  <a className="pink-100" href=""></a>{" "}
                  <a className="pink-100" href="">
                    Risk Disclosures
                  </a>{" "}
                  and other disclosures on this site, before accepting the Terms
                  and purchasing $FxF tokens and beginning to participate in
                  Vesting*.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">You will receive</h3>
                <p className="text-2xl font-bold text-primary-light">
                  1 $FxF = $0.0025
                </p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Your $FxF Balance
                </h3>
                <p className="text-2xl font-bold text-accent-light">
                  24,500,000 FXF
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenSale;
