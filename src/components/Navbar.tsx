import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Wallet } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ConnectWalletModal from "./ConnectWalletModal";
import AuthModal from "./AuthModals";
import logo from "../images/logo.png";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img className="w-16 object-contain" src={logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
                FAST X FURIOUS
              </span>
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink
                to="/how-to-buy"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-primary-dark text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`
                }
              >
                {t("nav.howToBuy")}
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-primary-dark text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`
                }
              >
                {t("nav.news")}
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-primary-dark text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`
                }
              >
                {t("nav.dashboard")}
              </NavLink>

              <button
                onClick={() => setLoginModalOpen(true)}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 rounded-md"
              >
                {t("nav.login")}
              </button>
              <button
                onClick={() => setRegisterModalOpen(true)}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 rounded-md"
              >
                {t("nav.register")}
              </button>
              <button
                onClick={() => setWalletModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent-dark hover:bg-accent transition-colors duration-200"
              >
                <Wallet className="h-4 w-4 mr-2" />
                {t("nav.connectWallet")}
              </button>
              <LanguageSelector />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/how-to-buy"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-primary-dark text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              {t("nav.howToBuy")}
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-primary-dark text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              {t("nav.news")}
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-primary-dark text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`
              }
            >
              {t("nav.dashboard")}
            </NavLink>
            <button
              onClick={() => setLoginModalOpen(true)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
            >
              {t("nav.login")}
            </button>
            <button
              onClick={() => setRegisterModalOpen(true)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
            >
              {t("nav.register")}
            </button>
            <button
              onClick={() => setWalletModalOpen(true)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
            >
              {t("nav.connectWallet")}
            </button>
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}

      <ConnectWalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setWalletModalOpen(false)}
      />
      <AuthModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        type="login"
      />
      <AuthModal
        isOpen={isRegisterModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        type="register"
      />
    </nav>
  );
};

export default Navbar;
