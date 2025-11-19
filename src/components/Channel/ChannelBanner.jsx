import React from 'react'

function ChannelBanner({isSidebarOpen}) {
  return (
    <div className={`h-18vh md:h-12vh w-[80vw] m-4 rounded-2xl ${isSidebarOpen?"scale-x-95":"md:scale-x-110 md:ml-26"}`}>
        <img src="https://yt3.googleusercontent.com/tQbZPkaa68-JiQGprltHHeu86B_p_DZEIpQcj0xsX7DkJqpYfSXQNz850juqf5rzw6C1u9R3QQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="" className='w-full h-full rounded-2xl' />
    </div>
  )
}

export default ChannelBanner