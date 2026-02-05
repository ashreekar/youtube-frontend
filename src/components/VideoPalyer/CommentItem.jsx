import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineReport, MdEdit, MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import ReplyItem from "./ReplyItem";
import ErrorFallback from "../ErrorBoundary/ErrorFallback";

// Note: comment item is sort of a children that renders on map
//       as well as a parent that calls map to render reply items of its own
function CommentItem({
  comment,
  activeMenu,
  setActiveMenu,
  deleteComment,
  renderEditComment,
  setEditing,
  commentChanegd,
  setAskLogin
}) {
  // flags that track the comment details
  const [likes, setLikes] = useState(comment.likes || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // this tracks the replay items of this particular comment items
  const [replyVisible, setReplyVisible] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isSendingReply, setIsSendingReply] = useState(false);

  // used to render replies
  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(false);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    // this function renders on mount, change in replies and comment
    async function init() {
      try {
        const repliesRes = await axios.get(
          `https://youtube-backend-pvvc.onrender.com/api/v1/comment/comment/${comment.id}`
        );

        // fetches all replies from backend and adds to a reply item
        // Note: backend support separate comment route for comments
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


        const token = localStorage.getItem("acceasToken");
        // getting rection only if user logged in
        if (!token || token.trim() === "") {
          console.log("Not logged in")
          return;
        }

        // getting reaction and status on comment
        // gives the staus of comment like/dislike
        const reaction = await axios.get(
          `https://youtube-backend-pvvc.onrender.com/api/v1/reaction/comment/${comment.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const state = reaction.data.data.reaction;
        if (state === "like") setLiked(true);
        else if (state === "dislike") setDisliked(true);
      } catch (error) {
        return <ErrorFallback />
      }
    }

    if (comment?.id) init();
  }, [comment?.id, commentChanegd]);

  // when we change like/dislike
  // this function runs
  // Note: psooibilities
  // liked: removeLike, dislike
  // disliked: addlike, remove dislike
  // no reaction: addlike, dilike
  const updateReactionController = async (type) => {
    try {
      const token = localStorage.getItem("acceasToken");

      if (!token || token.trim() === "") {
        console.log("Not logged in")
        return setAskLogin(true);
      }

      // if this condition is true the dlete reactionof user with content
      if ((liked && type) || (disliked && !type)) {
        // Remove reaction
        await axios.delete(
          `https://youtube-backend-pvvc.onrender.com/api/v1/reaction/comment/${comment.id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (liked) setLikes((prev) => prev - 1);

        setLiked(false);
        setDisliked(false);
      } else {
        // if not then user creating a new reaction / updated reaction
        const newType = type ? "like" : "dislike";

        await axios.post(
          `https://youtube-backend-pvvc.onrender.com/api/v1/reaction/comment/${comment.id}`,
          { type: newType },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // incremanting likes and dislikes or decremnting
        // except on : 0 condition on dislike on need to decrement like
        if (type){
           setLikes((prev) => prev + 1);
        }
        else if (liked) {
          setLikes(prev => prev - 1)
        }

        setLiked(type);
        setDisliked(!type);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle comment actions gives a object state that helps to only open one action
  // that side bar that have edit/delete or report action
  const handleCommentActions = () => {
    setActiveMenu((prev) => {
      if (prev.id === comment.id) {
        return { author: comment.author, id: comment.id, state: !prev.state };
      }
      return { author: comment.author, id: comment.id, state: true };
    });
  };

  // function to add a reply on a comment
  const submitReply = async (e) => {
    e.preventDefault();

    if (!replyText.trim()) return;

    setIsSendingReply(true);

    try {
      // if not logged in then not allowed
      const token = localStorage.getItem("acceasToken");
      if (!token || token.trim() === "") {
        console.log("Not logged in")
        return setAskLogin(true);
      }

      const reply = await axios.post(
        `https://youtube-backend-pvvc.onrender.com/api/v1/comment/comment/${comment.id}`,
        { content: replyText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // not refreshing or making an api call again
      setReplies((prev) => [
        ...prev,
        {
          id: reply?.data?.data?._id,
          author: user.username,
          avatar: user.avatar,
          text: replyText,
          posted: new Date(),
        },
      ]);

      // removing the text from input and setting to default
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

          {/* Button to like */}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => updateReactionController(true)}
              className={`flex items-center cursor-pointer gap-1 text-sm ${liked ? "text-blue-600" : "text-gray-600"
                }`}
            >
              <AiOutlineLike />
              <span>{likes}</span>
            </button>
            {/* button to dislike */}
            <button
              onClick={() => updateReactionController(false)}
              className={`text-sm cursor-pointer ${disliked ? "text-blue-600" : "text-gray-600"
                }`}
            >
              <AiOutlineDislike />
            </button>

            {/* button to add reply to commentItem */}
            <button
              className="text-xs ml-4 text-gray-600 cursor-pointer"
              onClick={() => setReplyVisible(true)}
            >
              Reply
            </button>

            {/* all reply count will be shown if exists */}
            {replies.length > 0 && (
              <button
                className="text-xs ml-2 text-blue-600 cursor-pointer"
                onClick={() => setShowReplies((prev) => !prev)}
              >
                {replies.length} replies
              </button>
            )}
          </div>

          {/* renders a input to reply to comment */}
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
                    className="px-3 py-1 rounded-full text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={replyText.trim() === "" || isSendingReply}
                    className={`px-3 py-1 rounded-full text-sm cursor-pointer ${replyText.trim()
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

          {/* on true of showreply renders all replies of a commentItems */}
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
                setAskLogin={setAskLogin}
              />
            ))
          }

        </div>
      </div>

      <div className="cursor-pointer" onClick={handleCommentActions}>
        <BsThreeDotsVertical size={20} />
      </div>

      {/* Active menu part */}
      {/* Note: active menu is a sidebar for every comment */}
      {/* Self comment based */}
      {/* Dynamically renders different active menu */}
      {activeMenu.id === comment.id && activeMenu.state && (
        activeMenu.author === user?.username ? (
          <div className="absolute right-1 top-8 w-40 rounded-xl shadow-xl bg-white z-50 py-2">
            {/* gives option to edit and delete comment */}
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
          // dummy active menu
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