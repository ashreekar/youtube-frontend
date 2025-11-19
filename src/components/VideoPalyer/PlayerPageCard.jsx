import React from 'react'
import CommentSection from './CommentSection'
import PlayerCard from './PlayerCard'

function PlayerPageCard() {
  const data = {
    "video": {
      "id": "dQw4w9WgXcQ",
      "title": "Never Gonna Give You Up",
      "description": "The official video for “Never Gonna Give You Up” by Rick Astley.\n\nClick to listen on YouTube: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "uploadDate": "2009-10-25",
      "views": 1123456789,
      "likes": 12000000,
      "isLiked": false,
      "dislikes": 250000,
      "duration": "3:33",
      "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "tags": ["rick astley", "80s", "pop", "music"]
    },

    "channel": {
      "id": "UCuAXFkgsw1L7xaCfnd5JJOw",
      "name": "RickAstleyVEVO",
      "subscribers": "2.5M",
      "isSubscribed": false,
      "avatar": "https://yt3.ggpht.com/ytc/AKedOLT5OQpGz8tVnLZ8nY9ty6-XYZ=s88-c-k-c0x00ffffff-no-rj",
      "description": "Official Rick Astley VEVO channel"
    },

    "thumbnails": {
      "default": "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
      "medium": "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
      "high": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      "standard": "https://i.ytimg.com/vi/dQw4w9WgXcQ/sddefault.jpg",
      "maxres": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },

    "comments": [
      {
        "id": "c1",
        "author": "JohnDoe",
        "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
        "text": "Classic song! Never gets old.",
        "likes": 2500,
        "posted": "3 years ago"
      },
      {
        "id": "c2",
        "author": "MusicLover89",
        "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
        "text": "Why is this so addictive?",
        "likes": 840,
        "posted": "2 years ago"
      },
      {
        "id": "c3",
        "author": "80sFanatic",
        "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
        "text": "Best song of the 80s!",
        "likes": 190,
        "posted": "5 months ago"
      }
    ],

    "recommendedVideos": [
      {
        "id": "M7FIvfx5J10",
        "title": "Take On Me",
        "channel": "a-ha",
        "views": "1.1 B views",
        "thumbnail": "https://i.ytimg.com/vi/M7FIvfx5J10/hqdefault.jpg",
        "duration": "3:45",
        "url": "https://www.youtube.com/watch?v=M7FIvfx5J10"
      },
      {
        "id": "3JZ_D3ELwOQ",
        "title": "Sweet Dreams (Are Made of This)",
        "channel": "Eurythmics",
        "views": "600 M views",
        "thumbnail": "https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
        "duration": "4:50",
        "url": "https://www.youtube.com/watch?v=3JZ_D3ELwOQ"
      },
      {
        "id": "L_jWHffIx5E",
        "title": "Take On Me (Official Video) – a-ha",
        "channel": "a-ha",
        "views": "1.0 B views",
        "thumbnail": "https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg",
        "duration": "4:26",
        "url": "https://www.youtube.com/watch?v=L_jWHffIx5E"
      },
      {
        "id": "fJ9rUzIMcZQ",
        "title": "Bohemian Rhapsody (Official Video)",
        "channel": "Queen Official",
        "views": "1.5 B views",
        "thumbnail": "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
        "duration": "5:55",
        "url": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
      }
    ]
  }

  return (
    <div className='w-full md:w-2/3 border rounded-2xl p-4 m-3'>
      <PlayerCard />
      <CommentSection />
    </div>
  )
}

export default PlayerPageCard