import React, { useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "ru", name: "Русский" },
    { code: "zh", name: "中文" },
    { code: "ar", name: "عربي" },
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 rounded-md"
      >
        <Globe className="h-4 w-4 mr-2" />
        <span>
          {languages.find((lang) => lang.code === i18n.language)?.name ||
            "Language"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-index-1400">
          <div className="py-1" role="menu">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                role="menuitem"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
