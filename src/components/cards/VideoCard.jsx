import { BsDot } from 'react-icons/bs';
import Skeleton from '../Loaders/Skeleton';

function VideoCard({ video, isSidebarOpen }) {
    return (
        <div
            key={video?._id}
            className={`cursor-pointer transition-transform duration-300 ${isSidebarOpen ? "scale-100" : "scale-x-102"}`}
        >
            <div className="w-full aspect-video rounded-xl overflow-hidden">
                <img src={video?.thumbnail} className="w-full h-full object-cover" />
            </div>

            <div className="flex gap-3 mt-3">
                <img
                    src={video?.owner?.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                    <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
                        {video?.title}
                    </h3>
                    <p className="text-gray-600 text-xs">{video.owner?.name}</p>
                    <p className="text-gray-600 text-xs flex gap-1">
                        {Math.floor(video.views / 100000)} L <BsDot /> {new Date(video.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard