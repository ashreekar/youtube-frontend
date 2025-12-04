import React from "react";

function Player({ source }) {
  // player item based on source and iframe
  return (
    <div className="w-full">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={source + "?autoplay=1&rel=0"}
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