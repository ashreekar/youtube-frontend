import React from "react";
import { useSelector } from "react-redux";

function HomePageLoader() {
    const isSidebarOpen = useSelector(store => store.sidebar.open);
    const placeholders = Array.from({ length: 30 });

    return (
        <div
            className={`flex-1 transition-all duration-300 ml-4 sm:ml-20`}
        >
            <div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                {placeholders.map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-3 animate-pulse"
                    >
                        <div className="bg-gray-200 rounded-xl w-full h-44" />

                        <div className="flex gap-3">
                            <div className="bg-gray-200 rounded-full h-10 w-10" />

                            <div className="flex flex-col gap-2 flex-1">
                                <div className="bg-gray-200 h-4 w-3/4 rounded" />
                                <div className="bg-gray-200 h-4 w-1/2 rounded" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePageLoader;