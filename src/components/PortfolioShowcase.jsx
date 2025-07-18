"use client";
import { useState } from "react";
import data from "../constants/index.js";

const cardWidth = 450;
const gap = 24;
const visibleCount = 3;

const PortfolioShowcase = () => {
  const [startIndex, setStartIndex] = useState(0);
  const totalCards = data.projects.length;

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount >= totalCards ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? totalCards - visibleCount : prev - 1));
  };

  return (
    <div className="py-12 px-6 relative z-200 max-w-[1440px] mx-auto">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-6">Portfolio Showcase</h2>
      <p className="text-center text-gray-300 mb-8">Explore my journey through projects.</p>

      {/* Navigation Buttons */}
      <div className="flex justify-between px-12 mb-6">
        <button
          onClick={handlePrev}
          className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition"
        >
          →
        </button>
      </div>

      {/* Card Slider */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * (cardWidth + gap)}px)`,
            width: `${totalCards * (cardWidth + gap)}px`,
          }}
        >
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 p-4 w-[450px] rounded-lg shadow-lg overflow-visible transition-transform transform-gpu hover:scale-[1.03] mr-6"
            >
              <div className="relative w-full h-[250px] bg-gray-700 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 min-h-[80px]">{project.description}</p>
              <hr className="border-t border-gray-500 my-4" />
              <div className="flex gap-2">
                <a
                  href={project.detailsLink}
                  target="_blank"
                  className="flex items-center gap-2 bg-[#2D3E50] text-white px-4 py-2 rounded-2xl hover:bg-[#3B4C63] transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.304 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.24c-3.34.726-4.043-1.416-4.043-1.416-.546-1.39-1.332-1.76-1.332-1.76-1.089-.743.083-.728.083-.728 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.24-3.22-.124-.302-.54-1.52.118-3.164 0 0 1.007-.322 3.3 1.23a11.47 11.47 0 013.005-.404c1.018.006 2.044.137 3.005.404 2.292-1.552 3.297-1.23 3.297-1.23.66 1.644.244 2.862.12 3.164.774.84 1.237 1.91 1.237 3.22 0 4.612-2.805 5.624-5.475 5.921.43.372.815 1.103.815 2.222v3.293c0 .32.192.694.8.577C20.567 22.096 24 17.601 24 12.297 24 5.67 18.627.297 12 .297z"
                    />
                  </svg>
                  Code
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  className="flex items-center px-4 py-2 bg-blue-200 text-blue-900 rounded-lg hover:bg-blue-300 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 3v2h3.59L9.17 13.42l1.41 1.41L19 6.41V10h2V3h-7zM5 5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6H5V5z" />
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
