import { HiDotsVertical } from "react-icons/hi";
import { dateFormatter } from "../../utils/dateFormatter"
import { viewsFormatter } from "../../utils/viewsFormatter"

function ResultVideoCard({ video }) {
    const createdAt = dateFormatter(video.createdAt);
    const views = viewsFormatter(video.views);
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
        >

            <div className="
                w-full 
                sm:w-[45%] 
                aspect-video 
                rounded-xl 
                overflow-hidden 
                bg-gray-200
            ">
                <img
                    src={video.thumbnail}
                    className="w-full h-full object-cover"
                    alt={video.title}
                />
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
                    <img
                        src={video.thumbnail}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                        alt={video.owner.name}
                    />
                    <p className="text-gray-600 text-xs sm:text-sm">
                        {video.owner.name}
                    </p>
                </div>

                <p className="hidden sm:block text-gray-700 text-sm">
                    {video.description.slice(0,150)}....
                </p>
            </div>
        </div>
    )
}

export default ResultVideoCard;