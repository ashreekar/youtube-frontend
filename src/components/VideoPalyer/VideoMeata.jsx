import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import VideoDetails from "./VideoDetails";
import axios from "axios";
import VideoMetaLoader from "../Loaders/VideoMetaLoader";
import ErrorFallback from "../ErrorBoundary/ErrorFallback";

// video meta componet handles everything from
// showing video details by fetching it
// showing user reaction state by fetchiig it
// updating or deleting them
function VideoMeata({ video, changeSubs, setChangeSubs, setreactionState, videoId, setAskLogin }) {
  //  states for subscrbe status,likes/dislikes, and reaction status
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [self, setSelf] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [loading, setLoading] = useState(true);

  const [likes, setLikes] = useState(video.likes);

  const navigate = useNavigate();

  // runs when video changes
  useEffect(() => {
    // fucntion that fetches subscriptionstatus
    async function getSubscription() {
      try {
        // not fetching it when user not logged in
        setLoading(true);
        const token = localStorage.getItem("acceasToken");

        if (!token || token.trim() === "") {
          console.log("Not logged in")
          return setIsSubscribed(false);
        }

        const subscription = await axios.get(
          `http://localhost:3317/api/v1/channel/subscription/${video.owner._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // updating subscription status
        // if self flag true: video player renders with subscription button
        setIsSubscribed(subscription?.data?.data?.subscribed || false);
        setSelf(subscription?.data?.data?.owner || false);
      } catch (err) {
        setIsSubscribed(false);
      } finally {
        setLoading(false);
      }
    }

    if (video?.owner?._id) {
      getSubscription();
    }
  }, [changeSubs, videoId, video._id, video?.owner?._id]);

  // change subscription togeeles subscribe unscuncribe status
  const changeSubscription = async () => {
    try {
      const token = localStorage.getItem("acceasToken");

      if (!token || token.trim() === "") {
        console.log("Not logged in")
        setAskLogin(true)
        return setIsSubscribed(false);
      }

      // if is subscribed 
      // unsuscribing
      // else subscribig
      if (isSubscribed) {
        await axios.delete(
          `http://localhost:3317/api/v1/channel/${video.owner._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.post(
          `http://localhost:3317/api/v1/channel/${video.owner._id}`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setChangeSubs(!changeSubs);
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    // fetches reaction status on video(only status)
    async function getReactionStatus() {
      try {
        const token = localStorage.getItem("acceasToken");

        if (!token || token.trim() === "") {
          console.log("Not logged in")
          return setIsSubscribed(false);
        }

        const reaction = await axios.get(
          `http://localhost:3317/api/v1/reaction/video/${video._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const state = reaction.data.data.reaction;

        if (state === "NA") {
          setIsLiked(false);
          setIsDisliked(false);
        } else if (state === "like") {
          setIsLiked(true);
          setIsDisliked(false);
        } else {
          setIsLiked(false);
          setIsDisliked(true);
        }
        setreactionState(prev => !prev)
      } catch (error) {
        setIsLiked(false);
        setIsDisliked(false);
      }
    }

    if (video?._id) {
      getReactionStatus();
    }
  }, [video?._id, videoId]);

  // function that is to update reaction on video
  const updateReactionController = async (type) => {
    try {
      const token = localStorage.getItem("acceasToken");
      if (!token || token.trim() === "") {
        console.log("Not logged in")
        setAskLogin(true)
        return setIsSubscribed(false);
      }

      // upating reply based on 3 condtion / possibility
      // when we change like/dislike
      // this function runs
      // Note: psooibilities
      // liked: removeLike, dislike
      // disliked: addlike, remove dislike
      // no reaction: addlike, dilike
      if ((isLiked && type) || (isDisliked && !type)) {
        await axios.delete(
          `http://localhost:3317/api/v1/reaction/video/${video._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (isLiked) {
          setLikes(prev => prev - 1);
        }
        setIsDisliked(false);
        setIsLiked(false);
      } else {
        const input = type ? "like" : "dislike";

        await axios.post(
          `http://localhost:3317/api/v1/reaction/video/${video._id}`,
          { type: input },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // incremanting likes and dislikes or decremnting
        // except on : 0 condition on dislike on need to decrement like
        if (type) {
          setLikes(prev => prev + 1);
        } else if (isLiked) {
          setLikes(prev => prev - 1)
        }
        setIsDisliked(!type);
        setIsLiked(type);
      }
    } catch (error) {
      navigate('/login')
    }
  };


  if (loading) return <VideoMetaLoader />;

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

          {/* rendering subscribed/subscribe conditionally */}
          {/* not rendering at all when video owner is user only */}
          {!self &&
            (isSubscribed ? (
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
            ))}
        </div>

        {/* like and dislike section */}
        <div className="flex gap-3 items-center overflow-x-auto no-scrollbar md:overflow-visible md:justify-evenly pb-2 md:pb-0">
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden h-10">
            <div
              onClick={() => updateReactionController(true)}
              className="flex items-center gap-2 px-3 border-r border-gray-300 cursor-pointer h-full hover:bg-gray-200"
            >
              {isLiked ? (
                <AiFillLike size={18} />
              ) : (
                <AiOutlineLike size={18} />
              )}
              <span className="text-sm">{likes}</span>
            </div>

            <div
              onClick={() => updateReactionController(false)}
              className="flex items-center px-3 cursor-pointer h-full hover:bg-gray-200"
            >
              {isDisliked ? (
                <AiFillDislike size={18} />
              ) : (
                <AiOutlineDislike size={18} />
              )}
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