import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ChannelHome from "../components/Channel/ChannelHome";
import Popup from "../components/SidebarAndPopUp/Popup";
import ChannelInfo from "../components/Popups/ChannelInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ManageVideos from "../components/Channel/Videos/ManageVideos";
import UpdateBanner from "../components/Channel/Banner/UpdateBanner";
import UpdateAvatar from "../components/Channel/Avatar/UpdateAvatar";

function ChannelPage() {
  const { channelId } = useParams();
  const navigate = useNavigate();

  const [isInfo, setIsInfo] = useState(false);
  const [self, setSelf] = useState(false);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [changeSubs, setChangeSubs] = useState(false);
  const [changeChannelData, setchangeChannelData] = useState(false);

  // states for managing videos
  const [manageVideosVisible, setManageVideosVisible] = useState(false);
  const [videoChanged, setvideoChanged] = useState(false);
  const [videoDeleted, setvideoDeleted] = useState(false);
  const [updateBanner, setUpdateBanner] = useState(false);
  const [updateAvatar, setUpdateAvatar] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true);

        if (!channelId) {
          setSelf(true);
          const token = localStorage.getItem("acceasToken")
          const res = await axios.get("http://localhost:3317/api/v1/channel", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setData(res.data.data);
        }
        else {
          const res = await axios.get(`http://localhost:3317/api/v1/channel/${channelId}`);
          setData(res.data.data);
        }

      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchDetails();
  }, [channelId, changeSubs, videoChanged,videoDeleted,changeChannelData]);

  useEffect(() => {
    try {
      setLoading(true)
      async function getSubscription() {
        const token = localStorage.getItem("acceasToken")
        const subscription = await axios.get(`http://localhost:3317/api/v1/channel/subscription/${channelId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setIsSubscribed(subscription?.data?.data?.subscribed || false)
        setSelf(subscription?.data?.data?.owner || false)
      }

      if (channelId) getSubscription();
    } catch (error) {
      setIsSubscribed(false);
    } finally {
      setLoading(false)
    }
  }, [channelId, changeSubs, videoDeleted])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading channel</p>;
  if (!data) return <p>No channel found</p>;

  async function changeSubscription() {
    try {
      if (isSubscribed) {
        const token = localStorage.getItem("acceasToken")
        await axios.delete(
          `http://localhost:3317/api/v1/channel/${channelId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        const token = localStorage.getItem("acceasToken")
        await axios.post(
          `http://localhost:3317/api/v1/channel/${channelId}`,
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

      {isInfo && (
        <Popup popupkey="channel" closePopup={() => setIsInfo(false)}>
          <ChannelInfo data={data} channelId={channelId} />
        </Popup>
      )}

      {
        manageVideosVisible && (
          <Popup popupkey="manageContent" closePopup={() => setManageVideosVisible(false)}>
            <ManageVideos closePopup={() => setManageVideosVisible(false)} videos={data?.content?.videos || []} setvideoChanged={setvideoChanged} setvideoDeleted={setvideoDeleted} />
          </Popup>
        )
      }

       {
        updateBanner && (
          <Popup popupkey="managePicture" closePopup={() => setUpdateBanner(false)} >
           <UpdateBanner setchangeChannelData={setchangeChannelData} banner={data.meta.banner? data.meta.banner :data.meta.avatar} closePopup={() => setUpdateBanner(false)} />
          </Popup>
        )
      }

       {
        updateAvatar && (
          <Popup popupkey="managePicture" closePopup={() => setUpdateAvatar(false)}>
           <UpdateAvatar setchangeChannelData={setchangeChannelData} avatar={data.meta.avatar} closePopup={() => setUpdateAvatar(false)} />
          </Popup>
        )
      }
    </>
  );
}

export default ChannelPage;