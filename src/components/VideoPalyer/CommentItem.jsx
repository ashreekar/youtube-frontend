import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineReport, MdEdit, MdDelete } from "react-icons/md";

import { useSelector } from "react-redux";

function CommentItem({ comment, activeMenu, setActiveMenu, deleteComment }) {
  const [likes, setLikes] = useState(comment.likes || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    async function getReactionStatus() {
      try {
        const token = localStorage.getItem("acceasToken");

        const reaction = await axios.get(
          `http://localhost:3317/api/v1/reaction/comment/${comment.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const state = reaction.data.data.reaction;

        if (state === "NA") {
          setLiked(false);
          setDisliked(false);
        } else if (state === "like") {
          setLiked(true);
          setDisliked(false);
        } else {
          setLiked(false);
          setDisliked(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (comment?.id) {
      getReactionStatus();
    }
  }, [comment?.id]);

  const updateReactionController = async (type) => {
    try {
      const token = localStorage.getItem("acceasToken");

      if ((liked && type) || (disliked && !type)) {
        await axios.delete(
          `http://localhost:3317/api/v1/reaction/comment/${comment.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setLiked(false);
        setDisliked(false);

        if (liked) {
          setLikes(prev => prev - 1);
        }
      } else {
        const input = type ? "like" : "dislike";

        await axios.post(
          `http://localhost:3317/api/v1/reaction/comment/${comment.id}`,
          { type: input },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setDisliked(!type);
        setLiked(type);

        if (type) {
          setLikes(prev => prev + 1);
        } else {
          setLikes(prev => prev - 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentActions = () => {
    setActiveMenu(prev => {
      if (prev.id === comment.id) {
        return {
          author: comment.author,
          id: comment.id,
          state: !activeMenu.state
          // state is for whether comment is open editable/reporatable or not
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
              onClick={() => updateReactionController(true)}
              className={`flex items-center gap-1 text-sm ${liked ? "text-blue-600" : "text-gray-600"
                }`}
            >
              <AiOutlineLike />
              <span>{likes}</span>
            </button>

            <button
              onClick={() => updateReactionController(false)}
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
              <button onClick={() => deleteComment(comment)} className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100 text-left cursor-pointer">
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