import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ children, sidebarKey, closePopup }) {
    const positions = {
        user: "top-14 right-14",
        create: "top-0 right-44",
    };

    return (
        <div
            className={`flex min-h-24 min-w-28 rounded-md bg-white p-4 gap-4 flex-col fixed ${positions[sidebarKey]}`}
        >
            {children.map((child, i) => (
                <Link key={i} to={child.to} onClick={closePopup}>
                    <div
                        onClick={child.handler}
                        className="w-full rounded-2xl bg-gray-200 hover:bg-gray-300 px-3 py-2"
                    >
                        {child.name}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;