import { BsDot } from 'react-icons/bs';
import { useFetch } from '../../utils/useFetch';

function VideoCard({ video, isSidebarOpen }) {
    const { data, error, loading } = useFetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${video.snippet.channelId}&key=AIzaSyApkq1vX5ecF8ghABa7uRrxiN7ndQslxCA`, "get");

    if(!data){
        return <p>Loading</p>
    }else{
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