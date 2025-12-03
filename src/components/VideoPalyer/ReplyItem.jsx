import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineReport, MdEdit, MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

function ReplyItem({ reply, activeMenu, setActiveMenu, deleteComment, renderEditComment, setEditing }) {
  const [likes, setLikes] = useState(reply.likes || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    async function getReply() {
      try {
        const token = localStorage.getItem("acceasToken");

        const reaction = await axios.get(
          `http://localhost:3317/api/v1/reaction/comment/${reply.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const res = reaction.data.data.reaction;
        if (res === "like") setLiked(true);
        else if (res === "dislike") setDisliked(true);
      } catch (err) {
        console.log(err);
      }
    }

    if (reply.id) getReply();
  }, [reply.id]);

  const updateReactionController = async (type) => {
    try {
      const token = localStorage.getItem("acceasToken");

      if ((liked && type) || (disliked && !type)) {
        await axios.delete(
          `http://localhost:3317/api/v1/reaction/comment/${reply.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (liked) setLikes((prev) => prev - 1);
        setLiked(false);
        setDisliked(false);
      } else {
        const newType = type ? "like" : "dislike";

        await axios.post(
          `http://localhost:3317/api/v1/reaction/comment/${reply.id}`,
          { type: newType },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setLiked(type);
        setDisliked(!type);

        if (type) setLikes((prev) => prev + 1);
        else setLikes((prev) => (prev === 0 ? 0 : prev - 1));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMenu = () => {
    setActiveMenu((prev) =>
      prev.id === reply.id
        ? { ...prev, state: !prev.state }
        : { author: reply.author, id: reply.id, state: true }
    );
  };

  return (
    <div className="flex justify-between w-full relative mt-4 ml-12">
      <div className="flex gap-4">
        <img src={reply.avatar} className="w-9 h-9 rounded-full" />

        <div>
          <div className="flex items-center gap-3">
            <span className="font-medium text-sm">{reply.author}</span>
            <span className="text-xs text-gray-500">
              {new Date(reply.posted).toDateString()}
            </span>
          </div>

          <p className="text-sm text-gray-800">{reply.text}</p>

          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => updateReactionController(true)}
              className={`flex items-center gap-1 text-sm ${
                liked ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <AiOutlineLike /> {likes}
            </button>

            <button
              onClick={() => updateReactionController(false)}
              className={`text-sm ${
                disliked ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <AiOutlineDislike />
            </button>
          </div>
        </div>
      </div>

      <div className="cursor-pointer" onClick={handleMenu}>
        <BsThreeDotsVertical size={18} />
      </div>

      {activeMenu.id === reply.id && activeMenu.state && (
        reply.author === user?.username ? (
          <div className="absolute right-2 top-8 z-50 bg-white shadow-xl p-2 rounded-xl w-40">
            <button
              onClick={() => {
                setEditing(true);
                renderEditComment(reply);
              }}
              className="flex gap-2 px-3 py-2 hover:bg-gray-100 w-full"
            >
              <MdEdit /> Edit
            </button>

            <button
              onClick={() => deleteComment(reply)}
              className="flex gap-2 px-3 py-2 hover:bg-gray-100 w-full"
            >
              <MdDelete /> Delete
            </button>
          </div>
        ) : (
          <div className="absolute right-2 top-8 bg-white shadow-xl p-2 rounded-xl w-40">
            <button className="flex gap-2 px-3 py-2 text-gray-500 cursor-not-allowed w-full">
              <MdOutlineReport /> Report
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default ReplyItem;