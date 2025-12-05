import React, { lazy, Suspense } from "react";
import FeedLoader from "../Loaders/FeedLoader"
import PlayerLoader from "../Loaders/PlayerLoader";

const PlayerFeed = lazy(() => import("./PlayerFeed"));
const PlayerPageCard = lazy(() => import("./PlayerPageCard"));

//  this is the main section divided into 2 parts playerpagecard(all about video,detail,comments)
// and playerfeed (all about recomended videos)
function PlayerSection({ videoId }) {
  return (
      <div className="mx-auto w-full px-6">
        <div className="flex flex-col lg:flex-row w-full gap-8">
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
  );
}

export default PlayerSection;