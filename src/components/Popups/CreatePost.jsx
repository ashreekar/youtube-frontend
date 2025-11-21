import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../ButtonsAndInput/InputField";

function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addPostFunction = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const inputStyles =
    "w-full border border-gray-300 rounded-xl py-2 px-3 focus:ring-red-600 focus:border-red-600 outline-none";

  return (
    <div className="bg-white w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 py-2 gap-10">

      <div className="flex flex-col items-center text-center w-full lg:w-1/2 px-5">
        <img src="youtube.png" className="h-14 w-16 mb-4" alt="youtube-logo" />

        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Add a post
        </h2>

        <p className="text-lg text-gray-600 font-medium">
          What's on your mind
        </p>
      </div>

      <form
        onSubmit={handleSubmit(addPostFunction)}
        className="w-full lg:w-1/2 max-w-xl bg-gray-50 p-4 rounded-2xl shadow-md space-y-2"
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
            required: "Post description is required",
          })}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">
            {errors.description.message}
          </p>
        )}

        <InputField
          type="text"
          placeholder="Enter the thumbnail URL"
          className={inputStyles}
          {...register("images", {
            required: "Image URL is required",
            pattern: {
              value: /^(http|https):\/\/[^ "]+$/,
              message: "Enter a valid URL",
            },
          })}
        />
        {errors.images && (
          <p className="text-red-500 text-sm">
            {errors.images.message}
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

export default CreatePost;