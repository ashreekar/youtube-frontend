import React, { useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

function CommentItem({ comment }) {
  const [likes, setLikes] = useState(comment.likes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikes((prev) => prev + 1);
      if (disliked) setDisliked(false);
    }
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) {
      setLiked(false);
      setLikes((prev) => prev - 1);
    }
  };

  return (
    <div className="flex gap-4">
      
      <img
        src={comment.avatar}
        className="w-10 h-10 rounded-full"
      />

      <div className="flex flex-col flex-1">

        <div className="flex gap-2 items-center">
          <span className="font-medium text-sm">
            {comment.author}
          </span>
          <span className="text-xs text-gray-500">
            {comment.posted}
          </span>
        </div>

        <p className="text-sm mt-1 text-gray-800">
          {comment.text}
        </p>

        <div className="flex gap-4 items-center mt-2">
          <button onClick={handleLike} className="flex items-center gap-1 text-gray-700 hover:text-black">
            <AiOutlineLike size={18} className={`${liked && "text-blue-600"}`} />
            <span className="text-xs">{likes}</span>
          </button>

          <button onClick={handleDislike} className="flex items-center text-gray-700 hover:text-black">
            <AiOutlineDislike size={18} className={`${disliked && "text-blue-600"}`} />
          </button>

          <button className="text-xs ml-4 font-medium text-gray-600 hover:text-black">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;