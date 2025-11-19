import { useState } from "react";
import CommentItem from "./CommentItem";

function CommentSection({ data }) {
  const comments = data.comments;

  const [openComments,setOpenComments]=useState(false);

  return (
    <>
      {!openComments && (<div className="w-full flex flex-col h-20 bg-gray-100 gap-2 rounded-lg md:hidden" onClick={()=>{setOpenComments(true)}}>
        <p className="font-medium text-md">Comments 12</p>
        <div className="flex gap-2">
          <img src={comments[0].avatar} alt="" className="h-4 w-4 roudned-full" />
          <p>{comments[0].text}</p>
        </div>
      </div>)}

      {openComments && <div className="w-full mt-10">
        <div className="flex items-center gap-6 mb-6">
          <h2 className="text-xl font-semibold">
            {comments.length} Comments
          </h2>

          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full">
            <svg height="20" width="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 18h6v-2H3v2zm0-5h12v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            Sort by
          </button>
        </div>

        <div className="flex gap-4 mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <input
              className="w-full border-b border-gray-300 focus:border-black outline-none pb-2"
              placeholder="Add a public comment..."
            />

            <div className="flex justify-end gap-3 mt-3">
              <button className="px-4 py-1 text-sm rounded-full hover:bg-gray-200">
                Cancel
              </button>
              <button className="px-4 py-1 text-sm bg-gray-200 text-gray-600 rounded-full opacity-50 cursor-not-allowed">
                Comment
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>

      </div>}
    </>
  );
}

export default CommentSection;