import { HiDotsVertical } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";

function ResultVideoCard({ video, adjust }) {
    return (
        <div
            key={video.id}
            className={`${adjust==="player"?"gap-2":"gap-4"} cursor-pointer flex transition-transform duration-300 `}
        >
            <div className="w-[45%] aspect-video rounded-xl overflow-hidden bg-gray-200">
                <img
                    src={video.thumbnail}
                    className="w-full h-full object-cover"
                    alt={video.title}
                />
            </div>

            <div className="flex flex-col gap-3 mt-3 w-[45%]">
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-medium line-clamp-2 leading-tight">
                        {video.title}
                    </h3>

                    <span className={adjust==="player"?"hidden":"flex"}>
                        <HiDotsVertical size={22} />
                    </span>
                </div>

                <div className="flex items-center">
                    <p className="text-gray-600 text-xs">
                        {video.views} • {video.uploadedAt}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <img
                        src={video.channelLogo}
                        className="w-10 h-10 rounded-full object-cover"
                        alt={video.channelName}
                    />
                    <p className="text-gray-600 text-xs">{video.channelName}</p>
                </div>

                <div className={adjust==="player"?"hidden":"flex"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, repudiandae.</p>
                </div>
            </div>
        </div>
    )
}

export default ResultVideoCard