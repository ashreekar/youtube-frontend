import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useFetch } from "../../utils/useFetch";

function TopFilter() {
  const isSidebarOpen = useSelector(store => store.sidebar.open);
  const [selected, setSelected] = useState("all");

  const { data, loading, error } = useFetch("http://localhost:3317/api/v1/video/category","get");
  console.log(data)

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  if (loading) return null;
  if (error) return <p>Loading...</p>;

  return (
    <div
      className={`
        w-full flex items-center gap-3
        px-4 py-2 pr-10
        fixed z-10
        backdrop-blur-xl bg-white/90 dark:bg-[#0f0f0f]/90
        ${isSidebarOpen ? "ml-4 md:ml-64" : "ml-4 sm:ml-20"}
      `}
    >
      <button
        onClick={scrollLeft}
        className="rounded-full bg-gray-100 hover:bg-gray-200 p-2 shadow-sm active:scale-95"
      >
        <FiChevronLeft className="text-gray-700" />
      </button>

      <div
        ref={scrollRef}
        className="flex items-center gap-3 overflow-x-auto no-scrollbar"
      >
        <button
            onClick={() => setSelected("all")}
            className={`
        px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap
        ${selected === "all"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"}
      `}
          >
            all
          </button>
        {(data?.data || []).map(topic => (
          <button
            key={topic._id}
            onClick={() => setSelected(topic.name)}
            className={`
        px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap
        ${selected === topic.name
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"}
      `}
          >
            {topic.name}
          </button>
        ))}
      </div>


      <button
        onClick={scrollRight}
        className="rounded-full bg-gray-100 hover:bg-gray-200 p-2 shadow-sm active:scale-95"
      >
        <FiChevronRight className="text-gray-700" />
      </button>
    </div>
  );
}

export default TopFilter;