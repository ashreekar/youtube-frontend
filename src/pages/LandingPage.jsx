import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { toggelLogin } from '../states/userSlice';

function LandingPage() {
  const dispatch=useDispatch();
  const isSidebarOpen = useSelector(store => store.sidebar.open);
  const arr=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,33,3,3,3,44,4,4,45,5,5,66,4,,3,2,2,4,44,1]
  return (
    <div className='flex overflow-x-scroll'>
        <Sidebar/>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          <div onClick={()=>dispatch(toggelLogin())}>Click to change lohin stATE</div>
          {
            arr.map(item=>(
              <div className={isSidebarOpen?"h-30 bg-gray-200 w-80":"h-30 bg-gray-200 w-100"}>Videos</div>
            ))
          }
        </div>
    </div>
  )
}

export default LandingPage