import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { useFetch } from "../../utils/useFetch";
import { useSelector } from "react-redux";
import axios from "axios";
import InputField from "../ButtonsAndInput/InputField";
import { useForm } from 'react-hook-form';
import CommentLoader from "../Loaders/CommentLoader";

function CommentSection({ id, setAskLogin }) {
  const { data, loading, error } = useFetch(`http://localhost:3317/api/v1/comment/video/${id}`, "get")
  const user = useSelector(state => state.user.user);

  const [commentData, setCommentData] = useState(null);
  const [visibleButton, setVisibleButton] = useState(false);
  const [commentChanegd, setcommentChanegd] = useState(false);
  const [editing, setEditing] = useState(false);
  const [commentToEdited, setcommentToEdited] = useState(false);

  const [activeMenu, setActiveMenu] = useState({
    author: null,
    id: null,
    state: false
  });

  useEffect(() => {
    if (data) {
      setCommentData(data);
    }
  }, [data])

  useEffect(() => {
    const getUpdatedComment = async () => {
      const updated = await axios.get(
        `http://localhost:3317/api/v1/comment/video/${id}`
      );

      setCommentData(updated.data);
    }

    getUpdatedComment();
  }, [commentChanegd, id])

  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const commentVal = watch("comment", "")

  const comments = commentData?.data?.comments?.map((comment) => {
    return {
      id: comment._id,
      author: comment.commenter[0].username,
      avatar: comment.commenter[0].avatar,
      text: comment.content,
      likes: comment.likes,
      posted: comment.createdAt
    };
  }) || [];

  const addComment = async (data) => {
    try {
      const token = localStorage.getItem("acceasToken")

      if (!token || token.trim() === "") {
        console.log("Not logged in")
        setAskLogin(true)
        return setIsSubscribed(false);
      }

      await axios.post(`http://localhost:3317/api/v1/comment/video/${id}`, {
        content: data.comment
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setcommentChanegd(!commentChanegd);
      setVisibleButton(false)

      reset();
    } catch (error) {
      console.log(error);
    }
  }

  const renderEditComment = (comment) => {
    setValue("comment", comment.text);
    setVisibleButton(true);
    setActiveMenu(
      {
        ...activeMenu,
        state: false
      }
    )
    setcommentToEdited(comment)
  }

  const editComment = async (data) => {
    try {
      const token = localStorage.getItem("acceasToken")

      if (!token || token.trim() === "") {
        console.log("Not logged in")
        setAskLogin(true)
        return setIsSubscribed(false);
      }

      await axios.put(`http://localhost:3317/api/v1/comment/${commentToEdited.id}`, {
        content: data.comment
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setcommentToEdited(null);
      setEditing(false);
      setcommentChanegd(!commentChanegd);
      setVisibleButton(false)

      reset();
    } catch (error) {
      console.log(error);
    }
  }

  const deleteComment = async (comment) => {
    try {
      const token = localStorage.getItem("acceasToken");

      if (!token || token.trim() === "") {
        console.log("Not logged in")
        setAskLogin(true)
        return setIsSubscribed(false);
      }

      const deleted = await axios.delete(`http://localhost:3317/api/v1/comment/${comment.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setcommentChanegd(!commentChanegd);
      setVisibleButton(false)

      reset();
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return <CommentLoader />
  }

  return (
    <section className="w-full">
      <div className="w-full mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{data?.data?.totalComments} Comments</h2>
        </div>

        <div className="flex gap-3 mb-4">
          <img
            className="w-10 h-10 rounded-full"
            src={user?.avatar || "https://randomuser.me/api/portraits/men/10.jpg"}
            alt="user"
          />
          <form className="flex-1" onSubmit={handleSubmit(!editing ? addComment : editComment)}>
            <InputField
              onClick={() => setVisibleButton(true)}
              className="w-full border-b border-gray-300 pb-2 focus:outline-none"
              placeholder="Add a public comment..."
              {...register("comment")}
            />
            <div className={visibleButton ? "flex justify-end gap-2 mt-3" : "hidden"}>
              <button onClick={() => {
                setValue("comment", "")
                setVisibleButton(false)
              }} type="button" className="px-3 py-2 rounded-full text-sm hover:bg-gray-100 cursor-pointer font-medium">
                Cancel
              </button>
              <button type="submit" disabled={commentVal.trim() === ""} className={commentVal.trim() !== "" ? "px-3 py-2 font-medium rounded-full bg-blue-600 text-white text-sm cursor-pointer" : "px-3 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-500 cursor-pointer"}>
                Comment
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} setAskLogin={setAskLogin} setVisibleButton={setVisibleButton} renderEditComment={renderEditComment} deleteComment={deleteComment} comment={comment} activeMenu={activeMenu} setActiveMenu={setActiveMenu} setEditing={setEditing} commentChanegd={commentChanegd} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommentSection;