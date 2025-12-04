import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../../ButtonsAndInput/InputField';
import axios from 'axios';
import SpinLoader from '../../Loaders/SpinLoader';

function UpdateVideo({ closePopup, videos = [], setvideoChanged }) {
    const [loading, setLoading] = useState(false);

    //  this gives the video to be deleted updated suing select
    const [selectedVideo, setSelctedVideo] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
    } = useForm();

    const thumbnailFile = watch("thumbnail");
    // gives a thumbanil image link to have thumbaniaof video
    const preview = thumbnailFile && thumbnailFile.length > 0
        ? URL.createObjectURL(thumbnailFile[0])
        : selectedVideo?.thumbnail || null;

    // Setting values using setValue so empty value not hits backend
    useEffect(() => {
        if (selectedVideo) {
            setValue("title", selectedVideo.title);
            setValue("description", selectedVideo.description);
        }
    }, [selectedVideo])

    // funciton that updates the video
    const updateVideoFunction = async (data) => {
        try {
            setLoading(true)
            //  updating thumbanil first if changed if not then leaving as it is
            if (data?.thumbnail.length > 0) {
                const formdata = new FormData();
                formdata.append("thumbnail", data.thumbnail[0]);
                const token = localStorage.getItem("acceasToken")

                const resurl = await axios.put(`http://localhost:3317/api/v1/video/thumbnail/${selectedVideo._id}`, formdata, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                })

                if (resurl) {
                    setvideoChanged(prev => !prev)
                }
            }
            const token = localStorage.getItem("acceasToken")

            //  uudating selected fields
            const res = await axios.put(`http://localhost:3317/api/v1/video/${selectedVideo._id}`,
                {
                    "title": data.title,
                    "description": data.description
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

            if (res) {
                setvideoChanged(prev => !prev)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            closePopup();
        }
    }

    if (loading) {
        return <div className="flex justify-center items-center h-full bg-gray-100 px-4"><SpinLoader></SpinLoader></div>
    }

    const inputStyles = `w-full border border-gray-300 rounded-xl py-2 px-3 focus:ring-red-600 focus:border-red-600 outline-none`;
    return (
        <div className="bg-white w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 py-2 gap-10">
            <div className="flex flex-col items-center text-center w-full lg:w-1/2 px-5">
                <img src="/youtube.png" className="h-14 w-16 mb-4" alt="youtube-logo" />
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">Update video</h2>
                <p className="text-lg text-gray-600 font-medium">Selct video to be updated</p>

                {/* Selct gives options to update which video */}
                <select className='mt-6 bg-red-600 px-3 py-3 w-3/4 rounded-full outline-none border-none text-white font-bold' id="videos" name="videos" onChange={(e) => {
                    const selected = videos.find(video => video._id === e.target.value);
                    setSelctedVideo(selected);
                }}
                >
                    <option value="">Select a video</option>
                    {
                        videos.map((video) => {
                            return (
                                <option className='bg-white text-black hover:bg-gray-100' key={video._id} value={video._id}>{video.title}</option>
                            )
                        })
                    }
                </select>
            </div>

            <form
                onSubmit={handleSubmit(updateVideoFunction)}
                className="w-full lg:w-1/2 max-w-xl bg-gray-50 p-4 rounded-2xl shadow-md space-y-4 overflow-y-auto"
            >
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={preview || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdV6jxuuHsH1qvI_PEJ0oife4h5w8bOWVPA&s"}
                        alt="thumbnail-preview"
                        className="h-28 w-56 rounded-md shadow-sm object-cover"
                    />
                    {/* file is not part upadte video api it hits separate backend */}
                    <label className="flex flex-col items-center cursor-pointer w-40 px-2 py-2 hover:bg-blue-100 rounded-full">
                        <input
                            type="file"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            className="hidden"
                            {...register("thumbnail")}
                        />
                        <span className="text-blue-700 text-lg font-semibold text-center">Select Thumbnail</span>
                    </label>
                </div>

                <InputField
                    type="text"
                    placeholder={errors.title ? errors.title.message : "Enter the video title"}
                    className={`${inputStyles} ${errors.title && "placeholder:text-red-600 placeholder:font-semibold"}`}
                    {...register("title", {
                        required: "title can't be empty"
                    })}
                />
                {errors.title && <p className='text-red-500'>{errors.title.message}</p>}

                <textarea
                    rows={5}
                    placeholder={errors.description ? errors.description.message : "Enter the video description"}
                    className={`${inputStyles} ${errors.description && "placeholder:text-red-600 placeholder:font-semibold"}`}
                    {...register("description", {
                        required: "description can't be empty"
                    })}
                />
                {errors.title && <p className='text-red-500'>{errors.title.message}</p>}

                {/* button is disabled untill the the video is selected */}
                <button
                    type="submit"
                    disabled={!selectedVideo}
                    className={selectedVideo ? "w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full text-lg transition" : "w-full py-3 rounded-full text-lg bg-gray-200 cursor-not-allowed"}
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateVideo