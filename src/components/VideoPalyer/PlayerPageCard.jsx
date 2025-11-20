import React from "react";
import Player from "./Player";
import VideoMeata from "./VideoMeata";
import CommentSection from "./CommentSection";

const data = {
  video: {
    id: "dQw4w9WgXcQ",
    title: "Never Gonna Give You Up",
    description:
      "The official video for “Never Gonna Give You Up” by Rick Astley.\n\nClick to listen on YouTube: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    uploadDate: "2009-10-25",
    views: "1,123,456,789",
    likes: 12000000,
    isLiked: false,
    dislikes: 250000,
    duration: "3:33",
    videoUrl: "https://www.youtube.com/embed/k2MOfVOUU78",
    tags: ["rick astley", "80s", "pop", "music"],
  },

  channel: {
    id: "UCuAXFkgsw1L7xaCfnd5JJOw",
    name: "RickAstleyVEVO",
    subscribers: "2.5M",
    isSubscribed: false,
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLT5OQpGz8tVnZ8nY9ty6-XYZ=s88-c-k-c0x00ffffff-no-rj",
    description: "Official Rick Astley VEVO channel",
  },

  comments: [
    {
      id: "c1",
      author: "JohnDoe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "Classic song! Never gets old.",
      likes: 2500,
      posted: "3 years ago",
    },
    {
      id: "c2",
      author: "MusicLover89",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Why is this so addictive?",
      likes: 840,
      posted: "2 years ago",
    },
    {
      id: "c3",
      author: "80sFanatic",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "Best song of the 80s!",
      likes: 190,
      posted: "5 months ago",
    },
  ],

  recommendedVideos: [
    {
      id: "M7FIvfx5J10",
      title: "Take On Me",
      channel: "a-ha",
      views: "1.1B views",
      thumbnail: "https://i.ytimg.com/vi/M7FIvfx5J10/hqdefault.jpg",
      duration: "3:45",
    },
    // ... (you can reuse the sample list you had)
  ],
};

function PlayerPageCard() {
  return (
    <div className="flex flex-col gap-6">
      <Player source={data.video.videoUrl} />
      <div className="space-y-6">
        <VideoMeata data={data} />
        <CommentSection data={data} />
      </div>
    </div>
  );
}

export default PlayerPageCard;