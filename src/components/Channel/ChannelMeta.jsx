import React, { useState } from "react";

function ChannelMeta({ setIsInfo, self, data, isSubscribed, changeSubscription }) {

  const description = `
${data.meta.name} is a channel that delivers engaging and easy-to-watch content for all audiences. 
With over ${data.stats.total_videos} videos uploaded so far and a growing community of ${data.stats.total_subscribers} subscribers, 
this channel shares fresh perspectives, reviews, reactions, and interesting breakdowns across different topics. 
Stay connected for more updates, new uploads, and enjoyable content from ${data.meta.handle}.
`.trim();

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 px-6 mt-6">

      <img
        src={data.meta.avatar}
        alt={data.meta.title}
        className="h-16 w-16 md:h-28 md:w-28 rounded-full"
      />

      <div className="flex flex-col w-full">

        <h2 className="text-xl md:text-2xl font-bold">{data.meta.name}</h2>

        <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
          <p>@{data.meta.handle}</p>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <p>{Number(data.stats.total_subscribers).toLocaleString()} subscribers</p>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <p>{data.stats.total_videos} videos</p>
        </div>

        <p
          className="text-gray-700 mt-2 text-sm md:text-base max-w-2xl cursor-pointer"
          onClick={() => setIsInfo(true)}
        >
          {description.slice(0, 120)}...more
        </p>

        {
          self ?
            (
              <div className="mt-4 flex gap-10">
                <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 font-medium">Customise channel</button>
                <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 font-medium">Manage Videos</button>
              </div>
            ) :
            (
              <div className="mt-3">
                {isSubscribed ? (
                  <button
                    onClick={changeSubscription}
                    className="px-5 py-2 rounded-full bg-black hover:bg-gray-700 text-white font-semibold"
                  >
                    Subscribed
                  </button>
                ) : (
                  <button
                    onClick={changeSubscription}
                    className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                  >
                    Subscribe
                  </button>
                )}
              </div>
            )
        }
      </div>

    </div>
  );
}

export default ChannelMeta;