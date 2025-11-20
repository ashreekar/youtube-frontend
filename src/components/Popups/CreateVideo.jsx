import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../ButtonsAndInput/InputField";

function CreateVideo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addVideoFunction = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const inputStyles =
    "w-full border border-gray-300 rounded-xl py-2 px-3 focus:ring-red-600 focus:border-red-600 outline-none";

  return (
    <div className="bg-white w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-6 py-10 gap-10">

      <div className="flex flex-col items-center text-center w-full lg:w-1/2 px-5">
        <img src="youtube.png" className="h-14 w-16 mb-4" alt="youtube-logo" />

        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Create Video
        </h2>

        <p className="text-lg text-gray-600 font-medium">
          Enter your video details below
        </p>
      </div>

      <form
        onSubmit={handleSubmit(addVideoFunction)}
        className="w-full lg:w-1/2 max-w-xl bg-gray-50 p-8 rounded-2xl shadow-md space-y-5"
      >
        <InputField
          type="text"
          placeholder="Enter the video title"
          className={inputStyles}
          {...register("title", { required: "Video title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        <textarea
          rows={5}
          placeholder="Enter the video description"
          className={inputStyles}
          {...register("description", {
            required: "Video description is required",
          })}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">
            {errors.description.message}
          </p>
        )}

        <InputField
          type="text"
          placeholder="Enter the video URL"
          className={inputStyles}
          {...register("videourl", {
            required: "Video URL is required",
            pattern: {
              value: /^(http|https):\/\/[^ "]+$/,
              message: "Enter a valid URL",
            },
          })}
        />
        {errors.videourl && (
          <p className="text-red-500 text-sm">
            {errors.videourl.message}
          </p>
        )}

        <InputField
          type="text"
          placeholder="Enter the thumbnail URL"
          className={inputStyles}
          {...register("thumbnail", {
            required: "Thumbnail URL is required",
            pattern: {
              value: /^(http|https):\/\/[^ "]+$/,
              message: "Enter a valid URL",
            },
          })}
        />
        {errors.thumbnail && (
          <p className="text-red-500 text-sm">
            {errors.thumbnail.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full text-lg transition"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateVideo;