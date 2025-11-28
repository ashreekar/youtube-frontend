import React from "react";
import PlayerPageCard from "./PlayerPageCard";
import PlayerFeed from "./PlayerFeed";

function PlayerSection({videoId}) {
  return (
    <main className="flex-1 min-h-screen px-3 sm:px-6 py-6">
      <div className="mx-auto max-w-[1400px] w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <PlayerPageCard videoId={videoId} />
          </div>
          <aside className="w-full lg:w-1/3">
            <PlayerFeed videoId={videoId} />
          </aside>
        </div>
      </div>
    </main>
  );
}

export default PlayerSection;