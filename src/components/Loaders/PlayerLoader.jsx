import React from 'react'

function PlayerLoader() {
    return (
        <div
            className={`flex-1 flex-col transition-all duration-300 ml-4 sm:ml-8 gap-3`}
        >   
            <div className='flex flex-col gap-3'>
                <div className="bg-gray-200 rounded-md h-[50vh] w-screen lg:w-[55vw]">
                </div>

                 <div className="flex gap-3 items-center">
                    <div className="bg-gray-200 rounded-full h-10 w-10" />

                    <div className="flex flex-col gap-2 flex-1 justify-center">
                        <div className="bg-gray-200 h-4 w-3/4 rounded" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 justify-center">
                        <div className="bg-gray-200 h-4 w-3/4 rounded" />
                    </div>
                </div>
            </div>

            <div className="grid gap-6 p-6 grid-cols-1 mt-8">
                <div className="flex gap-3">
                    <div className="bg-gray-200 rounded-full h-10 w-10" />

                    <div className="flex flex-col gap-2 flex-1">
                        <div className="bg-gray-200 h-4 w-3/4 rounded" />
                        <div className="bg-gray-200 h-4 w-1/2 rounded" />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="bg-gray-200 rounded-full h-10 w-10" />

                    <div className="flex flex-col gap-2 flex-1">
                        <div className="bg-gray-200 h-4 w-3/4 rounded" />
                        <div className="bg-gray-200 h-4 w-1/2 rounded" />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="bg-gray-200 rounded-full h-10 w-10" />

                    <div className="flex flex-col gap-2 flex-1">
                        <div className="bg-gray-200 h-4 w-3/4 rounded" />
                        <div className="bg-gray-200 h-4 w-1/2 rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerLoader