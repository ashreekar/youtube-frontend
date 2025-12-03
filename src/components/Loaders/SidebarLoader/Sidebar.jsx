import React from "react";

function SidebarLoader() {
    const items = Array.from({ length: 12 });

    return (
        <aside className="w-60 h-screen px-4 py-5 bg-white animate-pulse">
            <div className="flex flex-col gap-5">
                {items.map((_, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="h-6 w-6 bg-gray-200 rounded"></div>

                        <div className="h-4 w-28 bg-gray-200 rounded"></div>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default SidebarLoader;