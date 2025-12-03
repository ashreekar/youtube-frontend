import { BsDot } from 'react-icons/bs';
import { dateFormatter } from "../../utils/dateFormatter"
import { viewsFormatter } from "../../utils/viewsFormatter"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function VideoCard({ video, isSidebarOpen }) {
    const createdAt = dateFormatter(video.createdAt);
    const views = viewsFormatter(video.views);

    const [play, setPlay] = useState(false);

    const handlePlayVideo = (flag) => {
        flag ? setPlay(true) : setPlay(false);
    }

    return (
        <div
            onMouseOver={() => handlePlayVideo(true)}
            onMouseLeave={() => handlePlayVideo(false)}
            key={video?._id}
            className={`cursor-pointer transition-transform duration-300 ${isSidebarOpen ? "scale-100" : "scale-x-102"}`}
        >
            <Link to={`/watch/${video._id}`}>
                <div title='watch' className="w-full aspect-video rounded-xl overflow-hidden">
                    {
                        play ? <div className="w-full">
                            <div className="w-full" style={{ paddingTop: "56.25%" }}>
                                <iframe
                                    src={video.url + "?autoplay=1&rel=0"}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                        </div> :
                            <LazyLoadImage src={video?.thumbnail} className="w-full h-full object-cover" />
                    }
                </div>
            </Link>
            <div className="flex gap-3 mt-3">
                <Link to={`/channel/${video.owner._id}`}>
                    <LazyLoadImage
                        title='channel'
                        src={video?.owner?.avatar}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </Link>
                <div>
                    <Link to={`/watch/${video._id}`}>
                        <h3 title='watch' className="font-semibold text-sm line-clamp-2 leading-tight">
                            {video?.title}
                        </h3>
                    </Link>
                    <Link to={`/channel/${video.owner._id}`}>
                        <p title='channel' className="text-gray-600 text-xs">{video.owner?.name}</p>
                    </Link>
                    <p className="text-gray-600 text-xs flex gap-1">
                        {views} views <BsDot /> {createdAt}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard