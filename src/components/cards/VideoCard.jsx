import { BsDot } from 'react-icons/bs';
import { useFetch } from '../../utils/useFetch';
import Skeleton from '../Loaders/Skeleton';

function VideoCard({ video, isSidebarOpen }) {
    const { data, error, loading } = useFetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${video.snippet.channelId}&key=yt-api-key`, "get");

    if (!data) {
        return <div className="w-full max-w-5xl mx-auto p-4 flex flex-col gap-6">

            <Skeleton className="w-full aspect-video rounded-xl" />

            <div className="flex flex-col gap-3 w-full">
                <Skeleton className="h-5 w-3/4 rounded" />
                <Skeleton className="h-4 w-1/3 rounded" />
            </div>

            <div className="flex items-center gap-4">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="flex flex-col gap-2 flex-1">
                    <Skeleton className="h-4 w-40 rounded" />
                    <Skeleton className="h-4 w-24 rounded" />
                </div>
                <Skeleton className="h-10 w-28 rounded-3xl" />
            </div>

            <div className="flex gap-4 flex-wrap">
                <Skeleton className="h-10 w-24 rounded-lg" />
                <Skeleton className="h-10 w-24 rounded-lg" />
                <Skeleton className="h-10 w-24 rounded-lg" />
            </div>

            <div className="flex flex-col gap-2 mt-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-5/6 rounded" />
                <Skeleton className="h-4 w-2/3 rounded" />
            </div>
        </div>
    } else {
        console.log(data)
    }

    return (
        <div
            key={video.id}
            className={`cursor-pointer transition-transform duration-300 ${isSidebarOpen ? "scale-100" : "scale-x-102"}`}
        >
            <div className="w-full aspect-video rounded-xl overflow-hidden">
                <img src={video.snippet.thumbnails.standard.url} className="w-full h-full object-cover" />
            </div>

            <div className="flex gap-3 mt-3">
                <img
                    src={data.items[0].snippet.thumbnails?.default?.url || data.items[0].snippet.thumbnails?.high.url}
                    className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                    <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
                        {video.snippet.localized.title}
                    </h3>
                    <p className="text-gray-600 text-xs">{video.snippet.channelTitle}</p>
                    <p className="text-gray-600 text-xs flex gap-1">
                        {Math.floor(video.statistics.viewCount / 100000)} L <BsDot /> {video.snippet.publishedAt}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard