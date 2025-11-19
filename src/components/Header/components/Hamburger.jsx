import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../../states/sidebarSlice.js'

import { AiOutlineMenu } from "react-icons/ai";

function Hamburger() {
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch(toggleSidebar());
    }

    return (
        <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer' onClick={handleHamburgerClick}>
           <AiOutlineMenu  className="h-6 w-6 font-medium" />
        </div>
    )
}

export default Hamburger