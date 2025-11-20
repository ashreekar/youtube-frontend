import React, { useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

function CommentItem({ comment }) {
  const [likes, setLikes] = useState(comment.likes || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((p) => p - 1);
    } else {
      setLiked(true);
      setLikes((p) => p + 1);
      if (disliked) setDisliked(false);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
    } else {
      setDisliked(true);
      if (liked) {
        setLiked(false);
        setLikes((p) => p - 1);
      }
    }
  };

  return (
    <div className="flex gap-4">
      <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <span className="font-medium text-sm">{comment.author}</span>
          <span className="text-xs text-gray-500">{comment.posted}</span>
        </div>

        <p className="text-sm mt-1 text-gray-800">{comment.text}</p>

        <div className="flex items-center gap-4 mt-2">
          <button onClick={handleLike} className={`flex items-center gap-1 text-sm ${liked ? "text-blue-600" : "text-gray-600"}`}>
            <AiOutlineLike />
            <span>{likes}</span>
          </button>

          <button onClick={handleDislike} className={`text-sm ${disliked ? "text-blue-600" : "text-gray-600"}`}>
            <AiOutlineDislike />
          </button>

          <button className="text-xs ml-4 text-gray-600">Reply</button>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;