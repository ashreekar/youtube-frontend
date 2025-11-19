import TopFilter from "../TopFilter/TopFilter"
import ResultVideoCard from "../cards/ResultVideoCard"

function PlayerFeed() {

      const videosData = [
        {
            id: "1",
            title: "React Tutorial for Beginners – Full Course",
            channelName: "Code Academy",
            channelLogo: "https://i.pravatar.cc/150?img=1",
            views: "2.4M",
            uploadedAt: "1 year ago",
            thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
        },
        {
            id: "2",
            title: "Top 10 JavaScript Concepts You Must Know",
            channelName: "Tech Simplified",
            channelLogo: "https://i.pravatar.cc/150?img=2",
            views: "845K",
            uploadedAt: "8 months ago",
            thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg"
        },
        {
            id: "3",
            title: "The Most Satisfying Engineering Machines",
            channelName: "Engineering Spot",
            channelLogo: "https://i.pravatar.cc/150?img=3",
            views: "4.8M",
            uploadedAt: "2 years ago",
            thumbnail: "https://i.ytimg.com/vi/TNhaISOUy6Q/maxresdefault.jpg"
        },
        {
            id: "4",
            title: "How SpaceX Lands Rockets – Animation",
            channelName: "SpaceX Vision",
            channelLogo: "https://i.pravatar.cc/150?img=4",
            views: "3.1M",
            uploadedAt: "11 months ago",
            thumbnail: "https://i.ytimg.com/vi/Z4TXCZG_NEY/maxresdefault.jpg"
        },
        {
            id: "5",
            title: "The Science of Black Holes Explained",
            channelName: "Astro Academy",
            channelLogo: "https://i.pravatar.cc/150?img=5",
            views: "1.9M",
            uploadedAt: "9 months ago",
            thumbnail: "https://i.ytimg.com/vi/e-P5IFTqB98/maxresdefault.jpg"
        },
        {
            id: "6",
            title: "iPhone 16 Review – Big Changes!",
            channelName: "Tech Insider",
            channelLogo: "https://i.pravatar.cc/150?img=6",
            views: "7.8M",
            uploadedAt: "2 weeks ago",
            thumbnail: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg"
        },
        {
            id: "7",
            title: "The MOST Addictive Gym Motivation Video",
            channelName: "Alpha Fitness",
            channelLogo: "https://i.pravatar.cc/150?img=7",
            views: "3.9M",
            uploadedAt: "4 months ago",
            thumbnail: "https://i.ytimg.com/vi/WzQBAc8i73E/maxresdefault.jpg"
        },
        {
            id: "8",
            title: "Cooking The Perfect Steak at Home",
            channelName: "Home Kitchen",
            channelLogo: "https://i.pravatar.cc/150?img=8",
            views: "1.2M",
            uploadedAt: "3 months ago",
            thumbnail: "https://i.ytimg.com/vi/AmC9SmCBUj4/maxresdefault.jpg"
        },
        {
            id: "9",
            title: "Minecraft But Lava Rises Every Minute",
            channelName: "Block Universe",
            channelLogo: "https://i.pravatar.cc/150?img=9",
            views: "6.2M",
            uploadedAt: "1 year ago",
            thumbnail: "https://i.ytimg.com/vi/i9nG-PoVRiQ/maxresdefault.jpg"
        },
        {
            id: "10",
            title: "World’s Most Expensive Camera Lenses",
            channelName: "Camera Zone",
            channelLogo: "https://i.pravatar.cc/150?img=10",
            views: "640K",
            uploadedAt: "5 months ago",
            thumbnail: "https://i.ytimg.com/vi/jy8pY1nW28Q/maxresdefault.jpg"
        },
        {
            id: "11",
            title: "How Airplanes Are Made – Inside Factory",
            channelName: "AeroTech",
            channelLogo: "https://i.pravatar.cc/150?img=11",
            views: "5.3M",
            uploadedAt: "2 years ago",
            thumbnail: "https://i.ytimg.com/vi/QgsZ8gZ9i5I/maxresdefault.jpg"
        },
        {
            id: "12",
            title: "Best Coding Setup 2025 – Minimal Desk Tour",
            channelName: "DevLife",
            channelLogo: "https://i.pravatar.cc/150?img=12",
            views: "920K",
            uploadedAt: "2 months ago",
            thumbnail: "https://i.ytimg.com/vi/WQOowW5o8qI/maxresdefault.jpg"
        },
        {
            id: "13",
            title: "Trying Viral TikTok Life Hacks",
            channelName: "FunLab",
            channelLogo: "https://i.pravatar.cc/150?img=13",
            views: "12M",
            uploadedAt: "3 years ago",
            thumbnail: "https://i.ytimg.com/vi/3kYJ1dN2B_4/maxresdefault.jpg"
        },
        {
            id: "14",
            title: "The Future of Robotics – Boston Dynamics",
            channelName: "Tech Forward",
            channelLogo: "https://i.pravatar.cc/150?img=14",
            views: "18M",
            uploadedAt: "2 years ago",
            thumbnail: "https://i.ytimg.com/vi/fn3KWM1kuAw/maxresdefault.jpg"
        },
        {
            id: "15",
            title: "Marvel's Avengers Full Trailer (2025)",
            channelName: "Film Hub",
            channelLogo: "https://i.pravatar.cc/150?img=15",
            views: "22M",
            uploadedAt: "1 month ago",
            thumbnail: "https://i.ytimg.com/vi/3PkkHsuMrho/maxresdefault.jpg"
        },
        {
            id: "16",
            title: "Top 20 AI Tools You Must Try",
            channelName: "AI Revolution",
            channelLogo: "https://i.pravatar.cc/150?img=16",
            views: "4.4M",
            uploadedAt: "7 months ago",
            thumbnail: "https://i.ytimg.com/vi/hGtDkTfG4O4/maxresdefault.jpg"
        },
        {
            id: "17",
            title: "Inside The Deepest Pool in The World",
            channelName: "Water World",
            channelLogo: "https://i.pravatar.cc/150?img=17",
            views: "3.7M",
            uploadedAt: "10 months ago",
            thumbnail: "https://i.ytimg.com/vi/GhLZ7kSxmE8/maxresdefault.jpg"
        },
        {
            id: "18",
            title: "The Most Beautiful Cities in the World",
            channelName: "Travel Escape",
            channelLogo: "https://i.pravatar.cc/150?img=18",
            views: "9.9M",
            uploadedAt: "2 years ago",
            thumbnail: "https://i.ytimg.com/vi/GQ9v6oDEWf0/maxresdefault.jpg"
        },
        {
            id: "19",
            title: "Google CEO Explains AI in 5 Minutes",
            channelName: "Tech Talks",
            channelLogo: "https://i.pravatar.cc/150?img=19",
            views: "3.4M",
            uploadedAt: "5 months ago",
            thumbnail: "https://i.ytimg.com/vi/Br7W0HqZrJg/maxresdefault.jpg"
        },
        {
            id: "20",
            title: "Touring the MOST Expensive House in Dubai",
            channelName: "Luxury Life",
            channelLogo: "https://i.pravatar.cc/150?img=20",
            views: "14M",
            uploadedAt: "6 months ago",
            thumbnail: "https://i.ytimg.com/vi/bG0u3yY5E7E/maxresdefault.jpg"
        }
    ];

  return (
    <div className='w-full md:w-1/3 p-4 m-3'>
        <div className="hidden md:block">
        <TopFilter player={true} />
        </div>

        <div className="flex flex-col w-full gap-3">
            {
                videosData.map((video)=>(
                    <ResultVideoCard video={video} adjust="player" />
                ))
            }
        </div>
    </div>
  )
}

export default PlayerFeed