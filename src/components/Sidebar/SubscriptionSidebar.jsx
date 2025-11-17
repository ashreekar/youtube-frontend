import { useSelector } from 'react-redux'
import { FiChevronDown, FiChevronRight, FiChevronUp } from "react-icons/fi";
import { useState } from "react";
import WhenLogout from '../Header/LoginStates/WhenLogout';

import { FaUserCircle } from "react-icons/fa";

function SubscriptionSidebar() {
  const loggedIn = useSelector(store => store.user.loggedIn);

  const [showAll, setShowAll] = useState(false);

  const subscribers = [
    { name: "PewDiePie", logo: "https://i.guim.co.uk/img/media/9d9759a25269ff4dd7f4c41bde320c4928bdfb65/0_24_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e4916223d76a56180788e7bfc1d25b02" },
    { name: "MrBeast", logo: "https://www.hollywoodreporter.com/wp-content/uploads/2022/06/Marques-Brownlee-Publicity-H-2022.jpg?w=1296&h=730&crop=1"},
    { name: "Marques Brownlee", logo: "https://i.guim.co.uk/img/media/9d9759a25269ff4dd7f4c41bde320c4928bdfb65/0_24_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e4916223d76a56180788e7bfc1d25b02" },
    { name: "ThePrimeTime", logo: "https://i.ytimg.com/vi/MzescXc5SW0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHFmwuRj0VGDsMf-NBW4BbMZeORw"  },
    { name: "TechBurner", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQP5F1CylB5XhrwVF3S4enVHVSyBHZr0lFsA&s" },
    { name: "Linus Tech Tips", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrHr2Bkqh2lzlACPnyZNCCGRZaOfFFtZNSQ&s" },
    { name: "KSI", logo: "https://media.gq-magazine.co.uk/photos/610bcbc20b993f08aff7d1aa/1:1/w_1080,h_1080,c_limit/05082021_KSI_HP.jpg"},
    { name: "Nasa", logo: "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t1080x1080.jpg" },
    { name: "Food Ranger", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Trevor_James_in_a_blue_shirt.jpg/960px-Trevor_James_in_a_blue_shirt.jpg" },
  ];

  if (!loggedIn) {
    return (
      <div className="w-full h-40 flex flex-col items-start justify-center px-3">
        <WhenLogout />
        <p className="text-base mt-2 font-medium">
          Login to see channels, likes, and comments
        </p>
      </div>
    );
  }

  const visibleSubs = showAll ? subscribers : subscribers.slice(0, 6);

  return (
    <div className="mt-3">
      <div className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer">
        <span className="font-medium text-sm">Subscriptions</span>
        <FiChevronRight className="w-4 h-4 text-gray-600" />
      </div>

      <div className="mt-1">
        {visibleSubs.map(item => (
          <div
            key={item.name}
            className="flex items-center gap-4 h-12 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <img src={item.logo} alt={item.name} height={20} width={20} className='rounded-full' />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>

      {subscribers.length > 6 && (
        <div
          onClick={() => setShowAll(prev => !prev)}
          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          {showAll ? <FiChevronUp className="w-4 h-4 text-gray-600" />:  <FiChevronDown className="w-4 h-4 text-gray-600" />}
          <span className="font-medium text-sm">
          {showAll ? "Show Less" : "Show More"}
          </span>
        </div>
      )}
    </div>
  );
}

export default SubscriptionSidebar;