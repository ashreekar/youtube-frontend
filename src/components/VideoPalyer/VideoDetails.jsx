import React from 'react'

function VideoDetails() {
  return (
    <div className="rounded-lg flex flex-col gap-4 bg-gray-50 w-full p-3">
                <div className="flex gap-3 text-sm text-gray-700">
                    <span>1,09,783 views</span>
                    <span>Jan 6, 2024</span>
                </div>

                <div className="whitespace-pre-line text-sm leading-relaxed">
                    {`This video is a step-by-step guide on how to bake a classic chocolate cake from scratch. Learn the secret ingredients for a moist and rich cake, and get pro tips for perfect frosting.

                    In this video:
                    • How to mix and measure ingredients
                    • Baking tips for a perfect rise
                    • Decorating techniques

                    Follow along with this recipe for a delicious homemade dessert. Don't forget to like and subscribe for more baking tutorials!`}
                </div>
            </div>
  )
}

export default VideoDetails