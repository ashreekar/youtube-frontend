import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

function CommentSection({ data }) {
  const comments = data.comments || [];
  const [openComments, setOpenComments] = useState(false);

  useEffect(() => {
    setOpenComments(window.innerWidth >= 768);
  }, []);

  return (
    <section className="w-full">
      {!openComments ? (
        <button
          onClick={() => setOpenComments(true)}
          className="w-full text-left bg-gray-100 p-3 rounded-lg md:hidden"
        >
          <div className="flex items-center gap-3">
            <div className="font-medium">Comments {comments.length}</div>
            <div className="text-sm text-gray-600">• Tap to expand</div>
          </div>
          {comments[0] && (
            <div className="mt-2 text-sm text-gray-700 line-clamp-1">
              {comments[0].text}
            </div>
          )}
        </button>
      ) : (
        <div className="w-full mt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">{comments.length} Comments</h2>
            <button
              onClick={() => setOpenComments(false)}
              className="md:hidden text-sm text-gray-600"
            >
              Close
            </button>
          </div>

          <div className="flex gap-3 mb-4">
            <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/10.jpg" alt="user" />
            <div className="flex-1">
              <input
                className="w-full border-b border-gray-300 pb-2 focus:outline-none"
                placeholder="Add a public comment..."
              />
              <div className="flex justify-end gap-2 mt-3">
                <button className="px-3 py-1 rounded-full text-sm">Cancel</button>
                <button className="px-3 py-1 rounded-full bg-blue-600 text-white text-sm">Comment</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {comments.map((c) => (
              <CommentItem key={c.id} comment={c} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default CommentSection;