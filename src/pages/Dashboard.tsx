import React from "react";
import Footer from "../components/Footer";
import History from "../components/History";
import profile from "../images/profile.png";
const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <div className="gap-6 flex justify-content-center mb-5">
            <div className="w-full max-w-sm bg-gray-800 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10 pt-4">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={profile}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-light-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Zdsxw...sdsM
                </span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    0.0000
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    0.0000
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">FXF Balance</h2>
              <p className="text-2xl font-bold text-primary-light">
                50,000 FXF
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Raffle Tickets</h2>
              <p className="text-2xl font-bold text-accent-light">5 Tickets</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Next Event</h2>
              <p className="text-lg">Community Race #127</p>
              <p className="text-gray-400">Starts in 2 hours</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-5">
          <History />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
