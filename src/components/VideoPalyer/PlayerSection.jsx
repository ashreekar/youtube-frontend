import React, { lazy, Suspense } from "react";
import FeedLoader from "../Loaders/FeedLoader"
import PlayerLoader from "../Loaders/PlayerLoader";

const PlayerFeed = lazy(() => import("./PlayerFeed"));
const PlayerPageCard = lazy(() => import("./PlayerPageCard"));

//  this is the main section divided into 2 parts playerpagecard(all about video,detail,comments)
// and playerfeed (all about recomended videos)
function PlayerSection({ videoId }) {
  return (
    <main className="flex-1 min-h-screen px-3 sm:px-6 py-6">
      <div className="mx-auto max-w-[1400px] w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
           <Suspense fallback={<PlayerLoader />}>
            <PlayerPageCard videoId={videoId} />
            </Suspense>
          </div>
          <aside className="w-full lg:w-1/3">
            <Suspense fallback={<FeedLoader />}>
              <PlayerFeed videoId={videoId} />
            </Suspense>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default PlayerSection;