import { useSelector } from 'react-redux';
import { FiChevronDown, FiChevronRight, FiChevronUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import WhenLogout from '../Header/LoginStates/WhenLogout';
import axios from "axios";
import { Link } from 'react-router-dom';
import SpinLoader from '../Loaders/SpinLoader';

function SubscriptionSidebar() {
  const loggedIn = useSelector(store => store.user.loggedIn);

  const [showAll, setShowAll] = useState(false);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getChannels() {
      try {
        const token = localStorage.getItem("acceasToken");
        const res = await axios.get("http://localhost:3317/api/v1/user", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setSubscribers(res.data.data.subscribedTo || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (loggedIn) {
      getChannels();
    }
  }, [loggedIn]);

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

  if (loading) {
    return <div className="px-3 py-2 text-sm text-gray-600"><SpinLoader/></div>;
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
          <Link
            to={`/channel/${item._id}`}
            key={item._id}
            className="flex items-center gap-4 h-12 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <img src={item.avatar} alt={item.name} className="rounded-full h-8 w-8" />
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </div>

      {subscribers.length > 6 && (
        <div
          onClick={() => setShowAll(prev => !prev)}
          className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          {showAll ? <FiChevronUp className="w-4 h-4 text-gray-600" /> : <FiChevronDown className="w-4 h-4 text-gray-600" />}
          <span className="font-medium text-sm">
            {showAll ? "Show Less" : "Show More"}
          </span>
        </div>
      )}
    </div>
  );
}

export default SubscriptionSidebar;