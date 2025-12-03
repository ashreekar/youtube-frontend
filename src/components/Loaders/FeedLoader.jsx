
function FeedLoader() {
    const placeholders = Array.from({ length: 16 });

    return (
        <div
            className={`flex-1 transition-all duration-300 ml-4 sm:ml-8`}
        >
            <div className="grid gap-6 p-6 grid-cols-1 mt-8">
                {placeholders.map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-3 animate-pulse"
                    >
                        <div className="bg-gray-200 rounded-xl w-full h-44" />

                        <div className="flex gap-3">
                            <div className="bg-gray-200 rounded-full h-10 w-10" />

                            <div className="flex flex-col gap-2 flex-1">
                                <div className="bg-gray-200 h-4 w-3/4 rounded" />
                                <div className="bg-gray-200 h-4 w-1/2 rounded" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeedLoader;