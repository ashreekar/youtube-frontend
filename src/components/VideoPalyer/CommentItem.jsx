import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineReport, MdEdit, MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import ReplyItem from "./ReplyItem";

function CommentItem({
  comment,
  activeMenu,
  setActiveMenu,
  deleteComment,
  renderEditComment,
  setEditing,
  commentChanegd
}) {
  const [likes, setLikes] = useState(comment.likes || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [replyVisible, setReplyVisible] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isSendingReply, setIsSendingReply] = useState(false);

  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(false);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    async function init() {
      try {
        const token = localStorage.getItem("acceasToken");

        const reaction = await axios.get(
          `http://localhost:3317/api/v1/reaction/comment/${comment.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const state = reaction.data.data.reaction;
        if (state === "like") setLiked(true);
        else if (state === "dislike") setDisliked(true);

        const repliesRes = await axios.get(
          `http://localhost:3317/api/v1/comment/comment/${comment.id}`
        );

        const replyList =
          repliesRes?.data?.data?.comments?.map((reply) => ({
            id: reply._id,
            author: reply.commenter[0].username,
            avatar: reply.commenter[0].avatar,
            text: reply.content,
            likes: reply.likes,
            posted: reply.createdAt,
          })) || [];

        setReplies(replyList);
      } catch (error) {
        console.log(error);
      }
    }

    if (comment?.id) init();
  }, [comment?.id, commentChanegd]);

  const updateReactionController = async (type) => {
    try {
      const token = localStorage.getItem("acceasToken");

      if ((liked && type) || (disliked && !type)) {
        // Remove reaction
        await axios.delete(
          `http://localhost:3317/api/v1/reaction/comment/${comment.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (liked) setLikes((prev) => prev - 1);

        setLiked(false);
        setDisliked(false);
      } else {
        const newType = type ? "like" : "dislike";

        await axios.post(
          `http://localhost:3317/api/v1/reaction/comment/${comment.id}`,
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

  const handleCommentActions = () => {
    setActiveMenu((prev) => {
      if (prev.id === comment.id) {
        return { author: comment.author, id: comment.id, state: !prev.state };
      }
      return { author: comment.author, id: comment.id, state: true };
    });
  };

  const submitReply = async (e) => {
    e.preventDefault();

    if (!replyText.trim()) return;

    setIsSendingReply(true);

    try {
      const token = localStorage.getItem("acceasToken");

      await axios.post(
        `http://localhost:3317/api/v1/comment/comment/${comment.id}`,
        { content: replyText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setReplies((prev) => [
        ...prev,
        {
          id: Date.now(),
          author: user.username,
          avatar: user.avatar,
          text: replyText,
          posted: new Date(),
        },
      ]);

      setReplyText("");
      setReplyVisible(false);
      setShowReplies(true);
    } catch (error) {
      console.log(error);
    }

    setIsSendingReply(false);
  };

  return (
    <div className="flex justify-between relative mb-6">

      {/* LEFT SIDE */}
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

            <button
              className="text-xs ml-4 text-gray-600"
              onClick={() => setReplyVisible(true)}
            >
              Reply
            </button>

            {replies.length > 0 && (
              <button
                className="text-xs ml-2 text-blue-600"
                onClick={() => setShowReplies((prev) => !prev)}
              >
                {replies.length} replies
              </button>
            )}
          </div>

          {replyVisible && (
            <div className="flex gap-3 mt-4">
              <img
                className="w-10 h-10 rounded-full"
                src={user?.avatar}
                alt="user"
              />

              <form onSubmit={submitReply} className="flex-1">
                <input
                  className="w-full border-b border-gray-300 pb-2 focus:outline-none"
                  placeholder="Write a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />

                <div className="flex justify-end gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setReplyText("");
                      setReplyVisible(false);
                    }}
                    className="px-3 py-1 rounded-full text-sm hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={replyText.trim() === "" || isSendingReply}
                    className={`px-3 py-1 rounded-full text-sm ${replyText.trim()
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                      }`}
                  >
                    {isSendingReply ? "Sending..." : "Reply"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {showReplies &&
            replies.map((reply) => (
              <ReplyItem
                key={reply.id}
                reply={reply}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                deleteComment={deleteComment}
                renderEditComment={renderEditComment}
                setEditing={setEditing}
              />
            ))
          }

        </div>
      </div>

      <div className="cursor-pointer" onClick={handleCommentActions}>
        <BsThreeDotsVertical size={20} />
      </div>

      {activeMenu.id === comment.id && activeMenu.state && (
        activeMenu.author === user?.username ? (
          <div className="absolute right-1 top-8 w-40 rounded-xl shadow-xl bg-white z-50 py-2">
            <button
              onClick={() => {
                setEditing(true);
                renderEditComment(comment);
              }}
              className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100"
            >
              <MdEdit size={20} /> <span>Edit</span>
            </button>

            <button
              onClick={() => deleteComment(comment)}
              className="flex w-full gap-2 px-3 py-2 hover:bg-gray-100"
            >
              <MdDelete size={20} /> <span>Delete</span>
            </button>
          </div>
        ) : (
          <div className="absolute right-1 top-8 w-40 rounded-xl shadow-xl bg-white z-50 py-2">
            <button
              disabled
              className="flex w-full gap-2 px-3 py-2 cursor-not-allowed text-gray-500"
            >
              <MdOutlineReport size={20} /> <span>Report</span>
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default CommentItem;