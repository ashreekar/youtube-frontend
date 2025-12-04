import { HiDotsVertical } from "react-icons/hi";
import { dateFormatter } from "../../utils/dateFormatter"
import { viewsFormatter } from "../../utils/viewsFormatter"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

function ResultVideoCard({ video }) {
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
        // return normal url if not have "watch?/v=" part
        return url;
    };
    return (
        <div
            className="
                cursor-pointer 
                flex 
                flex-col 
                sm:flex-row 
                gap-4 
                transition-transform 
                duration-300
                w-full
            "
            // sets flag to play or not play video
            onMouseOver={() => handlePlayVideo(true)}
            onMouseLeave={() => handlePlayVideo(false)}s
        >

            <div className="
                w-full 
                sm:w-[45%] 
                aspect-video 
                rounded-xl 
                overflow-hidden 
                bg-gray-200
            ">
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

            <div className="flex flex-col gap-3 w-full sm:w-[45%]">

                <div className="flex items-start justify-between gap-4">
                    <h3 className="
                        text-lg 
                        sm:text-2xl 
                        font-medium 
                        leading-tight 
                        line-clamp-2
                    ">
                        {video.title}
                    </h3>

                    <span className="hidden sm:flex">
                        <HiDotsVertical size={22} />
                    </span>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm">
                    {views} views  {createdAt}
                </p>

                <div className="flex items-center gap-3">
                    <LazyLoadImage
                        src={video.thumbnail}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                        alt={video.owner.name}
                    />
                    <p className="text-gray-600 text-xs sm:text-sm">
                        {video.owner.name}
                    </p>
                </div>

                <p className="hidden sm:block text-gray-700 text-sm">
                    {video.description.slice(0, 150)}....
                </p>
            </div>
        </div>
    )
}

export default ResultVideoCard;