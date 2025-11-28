import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import VideoDetails from "./VideoDetails";
import axios from "axios";

function VideoMeata({ video, changeSubs, setChangeSubs, setreactionState }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isdisliked, setIsdisliked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true)
      async function getSubscription() {
        const token = localStorage.getItem("acceasToken")
        const subscription = await axios.get(`http://localhost:3317/api/v1/channel/subscription/${video.owner._id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setIsSubscribed(subscription?.data?.data?.subscribed || false)
      }

      getSubscription();
    } catch (error) {
      setIsSubscribed(false);
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [changeSubs])

  const changeSubscription = async () => {
    try {
      if (isSubscribed) {
        const token = localStorage.getItem("acceasToken")
        await axios.delete(
          `http://localhost:3317/api/v1/channel/${video.owner._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        const token = localStorage.getItem("acceasToken")
        await axios.post(
          `http://localhost:3317/api/v1/channel/${video.owner._id}`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setChangeSubs(!changeSubs);

    } catch (error) {
      console.log(error);
      alert("Login to subscribe");
      navigate("/login");
    }
  }

  useEffect(() => {
    try {
      async function getReactionStatus() {
        const token = localStorage.getItem("acceasToken")
        const reaction = await axios.get(`http://localhost:3317/api/v1/reaction/video/${video._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        if (reaction.data.data.reaction === "NA") {
          setIsLiked(false);
          setIsdisliked(false);
        } else if (reaction.data.data.reaction === "like") {
          setIsLiked(true);
          setIsdisliked(false);
        } else {
          setIsLiked(false);
          setIsdisliked(true);
        }
      }
      getReactionStatus();
    } catch (error) {
      console.log(error)
    }
  }, [video])

  const updateReactionController = async ( type ) => {
    try {
      if ((isLiked && type) || (isdisliked && !type)) {
        // delete like or delete dislike
        const token = localStorage.getItem("acceasToken")
        const reaction = await axios.delete(`http://localhost:3317/api/v1/reaction/video/${video._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

      } else {
        // updating it
        const input = type ? "like" : "dislike";

        const token = localStorage.getItem("acceasToken")
        const reaction = await axios.post(`http://localhost:3317/api/v1/reaction/video/${video._id}`,
          {
            type: input
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
      }

      setreactionState(prev => !prev)
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading channel</p>;

  return (
    <div className="w-full">
      <h1 className="text-lg sm:text-2xl font-semibold leading-tight">
        {video.title}
      </h1>

      <div className="flex flex-col gap-3 mt-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center justify-between w-full md:justify-start md:gap-4">
          <div className="flex items-center gap-3">
            <Link to={`/channel/${video.owner._id}`}>
              <img
                src={video.owner.avatar}
                alt={video.owner.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
            </Link>
            <div className="flex flex-col">
              <Link to={`/channel/${video.owner._id}`}>
                <span className="font-medium text-sm sm:text-base">
                  {video.owner.name}
                </span>
              </Link>
              <span className="text-xs text-gray-500">
                {Number(video.totalSubscribers).toLocaleString()} subscribers
              </span>
            </div>
          </div>

          {isSubscribed ? (
            <button
              onClick={changeSubscription}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-black rounded-full text-sm font-semibold md:ml-4 cursor-pointer"
            >
              Subscribed
            </button>
          ) : (
            <button
              onClick={changeSubscription}
              className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold md:ml-4 cursor-pointer"
            >
              Subscribe
            </button>
          )}
        </div>

        <div className="flex gap-3 items-center overflow-x-auto no-scrollbar md:overflow-visible md:justify-evenly pb-2 md:pb-0">
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden h-10">
            <div onClick={() => { updateReactionController(true) }} className="flex items-center gap-2 px-3 border-r border-gray-300 cursor-pointer h-full hover:bg-gray-200">
              {isLiked ? <AiFillLike size={18} /> : <AiOutlineLike size={18} />}
              <span className="text-sm">
                {video.likes}
              </span>
            </div>
            <div onClick={() => { updateReactionController(false) }} className="flex items-center px-3 cursor-pointer h-full hover:bg-gray-200">
              {isdisliked ? <AiFillDislike size={18} /> : <AiOutlineDislike size={18} />}
            </div>
          </div>

          <button className="flex items-center gap-2 bg-gray-100 rounded-full px-3 h-10 whitespace-nowrap">
            <RiShareForwardLine size={18} />
            <span className="text-sm">Share</span>
          </button>

          <button className="flex items-center gap-2 bg-gray-100 rounded-full px-3 h-10 whitespace-nowrap">
            <TfiDownload size={16} />
            <span className="text-sm">Download</span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <VideoDetails data={video} />
      </div>
    </div>
  );
}

export default VideoMeata;