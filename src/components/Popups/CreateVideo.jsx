import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../ButtonsAndInput/InputField';

function CreateVideo() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const addVideoFunction = (data) => {
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <form onSubmit={handleSubmit(addVideoFunction)} className="flex flex-col gap-3">

            <InputField
                type="text"
                label="Video title"
                placeholder="Enter the video title"
                className="w-[70%] mt-5 border border-gray-300 rounded-xl py-2 px-3"
                {...register("title", { required: "Video title is required" })}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

            <InputField
                type="text"
                label="Video description"
                placeholder="Enter the video description"
                className="w-[70%] border border-gray-300 rounded-xl py-2 px-3"
                {...register("description", { required: "Video description is required" })}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

            <InputField
                type="text"
                label="Video URL"
                placeholder="Enter the video URL"
                className="w-[70%] border border-gray-300 rounded-xl py-2 px-3"
                {...register("videourl", { required: "Video URL is required" })}
            />
            {errors.videourl && <p className="text-red-500 text-sm">{errors.videourl.message}</p>}

            <InputField
                type="text"
                label="Thumbnail URL"
                placeholder="Enter the thumbnail URL"
                className="w-[70%] border border-gray-300 rounded-xl py-2 px-3"
                {...register("thumbnail", { required: "Thumbnail URL is required" })}
            />
            {errors.thumbnail && <p className="text-red-500 text-sm">{errors.thumbnail.message}</p>}

            <button type='submit' className="px-4 py-2 bg-gray-300 text-white rounded-lg">
                Create
            </button>
        </form>
    );
}

export default CreateVideo;