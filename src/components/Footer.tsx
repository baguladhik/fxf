import React from "react";
import { Twitter, Disc as Discord, Instagram as Telegram } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent mb-4">
              FAST X FURIOUS
            </h3>
            <p className="text-gray-400">{t("footerDescription")}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  {t("home")}
                </a>
              </li>
              <li>
                <a
                  href="/how-to-buy"
                  className="text-gray-400 hover:text-white"
                >
                  {t("howToBuy")}
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-white">
                  {t("news")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t("resources")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {t("whitepaper")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {t("documentation")}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {t("faq")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t("community")}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Discord className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Telegram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} FAST X FURIOUS.{" "}
            {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
