import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ children, key, closePopup }) {
    const positions = {
        "user": "top-10 right-25",
        "create": "top-10 right-45",
    }

    return (
        <div className={`flex min-h-24 min-w-28 rounded-2xl bg-white p-4 m-4 gap-4 flex-col fixed ${positions[key]}`}>
            {
                children.map(child => (
                    <Link to={child["to"]} onClick={closePopup}>
                        <div
                            onClick={child["handler"]}
                            className='w-full rounded-2xl bg-gray-200 hover:bg-gray-300'>
                            {child["name"]}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar