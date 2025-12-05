import React from "react";

function Player({ source }) {
  // player item based on source and iframe
   const convertToEmbed = (url) => {
        if (url.includes("watch?v=")) {
            const id = url.split("watch?v=")[1];
            return `https://www.youtube.com/embed/${id}`;
        }
        return url;
    };
  return (
    <div className="w-full">
      <div className="relative w-full sm:pt-[45%] pt-[56%]">
        <iframe
          src={convertToEmbed(source) + "?autoplay=1&rel=0"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default Player;