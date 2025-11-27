import React, { useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineReport, MdEdit, MdDelete } from "react-icons/md";

import { useSelector } from "react-redux";

function CommentItem({ comment, activeMenu, setActiveMenu, deleteComment }) {
  const [likes, setLikes] = useState(comment.likes || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const user = useSelector(state => state.user.user);

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

  const handleCommentActions = () => {
    setActiveMenu(prev => {
      if (prev.id === comment.id) {
        return {
          author: comment.author,
          id: comment.id,
          state: !activeMenu.state
        }
      } else {
        return {
          author: comment.author,
          id: comment.id,
          state: true
        }
      }
    })
  };

  return (
    <div className="flex justify-between relative">
      <div className="flex gap-4">
        <img
          src={comment.avatar}
          alt={comment.author}
          className="w-10 h-10 rounded-full"
        />

        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="font-medium text-sm">{comment.author}</span>
            <span className="text-xs text-gray-500">
              {new Date(comment.posted).toDateString()}
            </span>
          </div>

          <p className="text-sm mt-1 text-gray-800">{comment.text}</p>

          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 text-sm ${liked ? "text-blue-600" : "text-gray-600"
                }`}
            >
              <AiOutlineLike />
              <span>{likes}</span>
            </button>

            <button
              onClick={handleDislike}
              className={`text-sm ${disliked ? "text-blue-600" : "text-gray-600"
                }`}
            >
              <AiOutlineDislike />
            </button>

            <button className="text-xs ml-4 text-gray-600">Reply</button>
          </div>
        </div>
      </div>

      <div className="cursor-pointer" onClick={handleCommentActions}>
        <BsThreeDotsVertical size={20} />
      </div>

      {
        activeMenu.id === comment.id && activeMenu.state && (
          activeMenu.author === user?.username ? (
            <div className="absolute left-3/5 sm:left-4/5 lg:left-17/20 top-8 w-40 
                rounded-xl shadow-xl bg-white z-50 py-2">
              <button className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 text-left cursor-pointer">
                <MdEdit size={20} />
                <span>Edit</span>
              </button>
              <button onClick={()=>deleteComment(comment)} className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 text-left cursor-pointer">
                <MdDelete size={20} />
                <span>Delete</span>
              </button>
            </div>
          ) : (
            <div className="absolute left-3/5 sm:left-4/5 lg:left-17/20 top-8 w-40 
                rounded-xl shadow-xl bg-white z-50 py-2">
              <button disabled className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 items-center cursor-not-allowed">
                <MdOutlineReport size={20} />
                <span>Report</span>
              </button>
            </div>
          )
        )
      }
    </div>
  );
}

export default CommentItem;