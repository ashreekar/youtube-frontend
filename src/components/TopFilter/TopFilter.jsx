import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function TopFilter() {
  const isSidebarOpen = useSelector(store => store.sidebar.open);
  const [selected, setSelected] = useState("All");

  const topics = [
    { id: 1, name: "All" },
    { id: 2, name: "Music" },
    { id: 3, name: "Gaming" },
    { id: 4, name: "Live" },
    { id: 5, name: "Programming" },
    { id: 6, name: "AI & Tech" },
    { id: 7, name: "Podcasts" },
    { id: 8, name: "Movies" },
    { id: 9, name: "News" },
    { id: 10, name: "Sports" },
    { id: 11, name: "Fitness" },
    { id: 12, name: "Science" },
    { id: 13, name: "Cooking" },
    { id: 14, name: "Travel" },
    { id: 15, name: "History" },
    { id: 16, name: "Photography" },
    { id: 17, name: "Cars" },
    { id: 18, name: "Space" },
    { id: 19, name: "AI Tools" },
    { id: 20, name: "Motivation" },
    { id: 21, name: "Engineering" },
    { id: 22, name: "Animals" },
    { id: 23, name: "DIY" },
    { id: 24, name: "Art" },
    { id: 25, name: "Comedy" }
  ];

  return (
    <div
      className={`
    w-full flex items-center gap-3
    overflow-x-auto no-scrollbar
    px-4 py-2 pr-10
    fixed z-10
    backdrop-blur-xl  
    bg-white/90   
    dark:bg-[#0f0f0f]/90 
    dark:border-white/10
    ${isSidebarOpen ? "ml-64" : "ml-20"}
  `}
    >
      <button
        className="
      rounded-full bg-gray-100 hover:bg-gray-200
      p-2 flex items-center justify-center
      shadow-sm active:scale-95
    "
      >
        <FiChevronLeft className="text-gray-700" />
      </button>

      {topics.map(topic => (
        <button
          key={topic.id}
          onClick={() => setSelected(topic.name)}
          className={`
        whitespace-nowrap px-4 py-1.5 rounded-lg text-sm font-medium
        transition-all duration-200
        ${selected === topic.name
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }
      `}
        >
          {topic.name}
        </button>
      ))}

      <button
        className="
      rounded-full bg-gray-100 hover:bg-gray-200
      p-2 flex items-center justify-center
      shadow-sm active:scale-95
    "
      >
        <FiChevronRight className="text-gray-700" />
      </button>
    </div>
  );
}

export default TopFilter;