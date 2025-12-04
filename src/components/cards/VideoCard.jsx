import { BsDot } from 'react-icons/bs';
import { dateFormatter } from "../../utils/dateFormatter"
import { viewsFormatter } from "../../utils/viewsFormatter"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function VideoCard({ video, isSidebarOpen }) {
      // Date and vies formatter converts our date and vies into normal youtube format
    const createdAt = dateFormatter(video.createdAt);
    const views = viewsFormatter(video.views);

    // play will be true on hover
    const [play, setPlay] = useState(false);

    const handlePlayVideo = (flag) => {
        flag ? setPlay(true) : setPlay(false);
    }

    // If we put normal yt link this converts to iframe/embed link
    const convertToEmbed = (url) => {
        if (url.includes("watch?v=")) {
            const id = url.split("watch?v=")[1];
            return `https://www.youtube.com/embed/${id}`;
        }
        return url;
    };

    return (
        <div
        // sets flag to play or not play video
            onMouseOver={() => handlePlayVideo(true)}
            onMouseLeave={() => handlePlayVideo(false)}
            key={video?._id}
            className={`cursor-pointer transition-transform duration-300 ${isSidebarOpen ? "scale-100" : "scale-x-102"}`}
        >
            <Link to={`/watch/${video._id}`}>
                <div className="w-full aspect-video rounded-xl overflow-hidden">
                      {/* Conditionally rendering iframe on hover else laoding thumbnail */}
                    {play ? (
                        <iframe
                            src={`${convertToEmbed(video.url)}?autoplay=1&mute=1`}
                            allow="autoplay; encrypted-media"
                            className="w-full h-full rounded-lg transition duration-300"
                        />
                    ) : (
                        <LazyLoadImage src={video.thumbnail} className="w-full h-full transition duration-300" />
                    )}
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