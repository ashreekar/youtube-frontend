import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../../states/sidebarSlice.js'

function Hamburger() {
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        dispatch(toggleSidebar());
    }

    return (
        <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer' onClick={handleHamburgerClick}>
            <img src="header/burger-menu-svgrepo-com.svg" alt="menu" className="h-6 w-6" />
        </div>
    )
}

export default Hamburger