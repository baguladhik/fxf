import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
const newsArticles = [
  {
    id: 1,
    title: "FAST X FURIOUS Launches Revolutionary NFT Racing Platform",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800",
    date: "2024-02-20",
    category: "Platform Update",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  },
  {
    id: 2,
    title: "Major Partnership Announcement",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    date: "2024-02-18",
    category: "Partnership",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
  },
  {
    id: 3,
    title: "Upcoming Community Racing Tournament",
    image:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800",
    date: "2024-02-15",
    category: "Event",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
  },
];

export default function News() {
  const { t } = useTranslation();

  return (
    <>
      <div className="pt-20 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent mb-4">
              {t("news")}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">{t("newsDesc")}</p>
          </div>

          <div className="space-y-12">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-64 object-cover"
                      src={article.image}
                      alt={article.title}
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span className="text-blue-400">{article.category}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      {article.title}
                    </h2>
                    <p className="text-gray-400 mb-4">{article.content}</p>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      {t("readMore")} →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
