import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { useFetch } from "../../utils/useFetch";

function CommentSection({ id }) {
  const { data, loading, error } = useFetch(`http://localhost:3317/api/v1/comment/video/${id}`,"get")

  console.log(data)

  const comments = data?.data?.comments?.map((comment) => {
    return {
      id: comment._id,
      author: comment.commenter[0].username,
      avatar: comment.commenter[0].avatar,
      text: comment.content,
      likes: comment.likes,
      posted: comment.createdAt
    };
  }) || [];


  if(loading){
    return <p>Loading</p>
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
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="user"
            />
            <div className="flex-1">
              <input
                className="w-full border-b border-gray-300 pb-2 focus:outline-none"
                placeholder="Add a public comment..."
              />
              <div className="flex justify-end gap-2 mt-3">
                <button className="px-3 py-1 rounded-full text-sm">
                  Cancel
                </button>
                <button className="px-3 py-1 rounded-full bg-blue-600 text-white text-sm">
                  Comment
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
    </section>
  );
}

export default CommentSection;