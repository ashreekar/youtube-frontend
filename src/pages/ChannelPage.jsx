import React, { lazy, useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Sidebar from "../components/Sidebar/Sidebar";
import ChannelHome from "../components/Channel/ChannelHome";
import Popup from "../components/SidebarAndPopUp/Popup";
import ErrorFallback from "../components/ErrorBoundary/ErrorFallback";
import HomePageLoader from "../components/Loaders/HomePage/HomePageLoader";
import ChannelInfo from "../components/Popups/ChannelInfo"
import SpinLoader from "../components/Loaders/SpinLoader";
import NotFound from "../components/NotFound/NotFound";

// Lazy importing the popups so they can be loaded on necesity
const ManageVideos = lazy(() => import("../components/Channel/Videos/ManageVideos"))
const UpdateBanner = lazy(() => import("../components/Channel/Banner/UpdateBanner"))
const UpdateAvatar = lazy(() => import("../components/Channel/Avatar/UpdateAvatar"))
const AskLogin = lazy(() => import("../components/Popups/AskLogin"))

function ChannelPage() {
  const { channelId } = useParams();

  // isinfo is for opening channel info popup
  const [isInfo, setIsInfo] = useState(false);

  // self flag is to check whether opened own channel page
  const [self, setSelf] = useState(false);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // states that moniters and manages vidoe and cgannel details
  const [changeSubs, setChangeSubs] = useState(false);
  const [changeChannelData, setchangeChannelData] = useState(false);

  // states for managing videos
  const [manageVideosVisible, setManageVideosVisible] = useState(false);
  const [videoChanged, setvideoChanged] = useState(false);
  const [videoDeleted, setvideoDeleted] = useState(false);
  const [updateBanner, setUpdateBanner] = useState(false);
  const [updateAvatar, setUpdateAvatar] = useState(false);
  const [askLogin, setAskLogin] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true);

        if (!channelId) {
          // channel id exists then rendering channel by id
          setSelf(true);
          const token = localStorage.getItem("acceasToken")
          const res = await axios.get("https://youtube-backend-pvvc.onrender.com/api/v1/channel", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setData(res.data.data);
        }
        else {
          const res = await axios.get(`https://youtube-backend-pvvc.onrender.com/api/v1/channel/${channelId}`);
          setData(res.data.data);
        }

      } catch (err) {
        // on error rendering no channel found
        console.log(err)
        setError(true)
      } finally {
        setLoading(false);
      }
    }

    fetchDetails();
  }, [channelId, changeSubs, videoChanged, videoDeleted, changeChannelData]);

  useEffect(() => {
    try {
      setLoading(true)
      async function getSubscription() {
        const token = localStorage.getItem("acceasToken")
        // if tken not found not fetching the api that depends on it
        if (!token || token.trim() === "") {
          console.log("Not logged in")
          return setIsSubscribed(false);
        }
        const subscription = await axios.get(`https://youtube-backend-pvvc.onrender.com/api/v1/channel/subscription/${channelId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setIsSubscribed(subscription?.data?.data?.subscribed || false)
        setSelf(subscription?.data?.data?.owner || false)
      }

      if (channelId) getSubscription();
    } catch (error) {
      // making error flag true to rendeer 404
      console.log(error)
      setError(true)
      setIsSubscribed(false);
    } finally {
      setLoading(false)
    }
  }, [channelId, changeSubs, videoDeleted])

  // this function runs on subring and unsubscribing
  async function changeSubscription() {
    try {
      // if issubscribed then unsubsribing so dletete
      if (isSubscribed) {
        const token = localStorage.getItem("acceasToken")

        if (!token || token.trim() === "") {
          console.log("Not logged in")
          return setAskLogin(true);
        }

        await axios.delete(
          `https://youtube-backend-pvvc.onrender.com/api/v1/channel/${channelId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        // if subscribed then subscribing
        const token = localStorage.getItem("acceasToken")

        if (!token || token.trim() === "") {
          console.log("Not logged in")
          return setAskLogin(true);
        }

        await axios.post(
          `https://youtube-backend-pvvc.onrender.com/api/v1/channel/${channelId}`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setChangeSubs(!changeSubs);

    } catch (error) {
      setIsSubscribed(false);
    }
  }

  if (loading) return <HomePageLoader />;
  if (error) {
    return <NotFound target={'channel'} />
  }
  if (!data) {
    return null;
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen overflow-x-hidden">
          <ChannelHome
            changeSubscription={changeSubscription}
            setIsInfo={setIsInfo} self={self} data={data}
            id={channelId} isSubscribed={isSubscribed}
            setManageVideosVisible={setManageVideosVisible}
            setUpdateBanner={setUpdateBanner}
            setUpdateAvatar={setUpdateAvatar}
          />
        </div>
      </div>

      {/* Rendering all the popups based on flags that are channeldetail, manage channel and video */}
      {isInfo && (
        <Popup popupkey="channel" closePopup={() => setIsInfo(false)}>
          <ChannelInfo data={data} channelId={channelId} />
        </Popup>
      )}

      {
        manageVideosVisible && (
          <Popup popupkey="manageContent" closePopup={() => setManageVideosVisible(false)}>
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><SpinLoader /></div>}>
              <ManageVideos closePopup={() => setManageVideosVisible(false)} videos={data?.content?.videos || []} setvideoChanged={setvideoChanged} setvideoDeleted={setvideoDeleted} />
            </Suspense>
          </Popup>
        )
      }

      {
        updateBanner && (
          <Popup popupkey="managePicture" closePopup={() => setUpdateBanner(false)} >
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><SpinLoader /></div>}>
              <UpdateBanner setchangeChannelData={setchangeChannelData} banner={data.meta.banner ? data.meta.banner : data.meta.avatar} closePopup={() => setUpdateBanner(false)} />
            </Suspense>
          </Popup>
        )
      }

      {
        updateAvatar && (
          <Popup popupkey="managePicture" closePopup={() => setUpdateAvatar(false)}>
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><SpinLoader /></div>}>
              <UpdateAvatar setchangeChannelData={setchangeChannelData} avatar={data.meta.avatar} closePopup={() => setUpdateAvatar(false)} />
            </Suspense>
          </Popup>
        )
      }

      {/* If not logged in this popup asks to login again */}
      {
        askLogin && (
          <Popup popupkey="channel" closePopup={() => setAskLogin(false)}>
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><SpinLoader /></div>}>
              <AskLogin />
            </Suspense>
          </Popup>
        )
      }
    </>
  );
}

export default ChannelPage;