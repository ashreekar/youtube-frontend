import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../ButtonsAndInput/InputField";
import axios from "axios";
import SpinLoader from "../Loaders/SpinLoader";
import { useDispatch } from "react-redux";
import { toggleVideoOverlay } from "../../states/overlaySlice";
import ErrorFallback from "../ErrorBoundary/ErrorFallback";

function CreateVideo() {
  // rendering some categories as option but also can add other categories also
  const categories = ["tech", "travel", "gaming", "cooking", "backend", "frontend", "webdev", "ai"];
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // giving preview of thumbnail image
  const thumbnailFile = watch("thumbnail");
  const preview = thumbnailFile && thumbnailFile.length > 0
    ? URL.createObjectURL(thumbnailFile[0])
    : null;

  // form data as request body contains images also
  const addVideoFunction = async (data) => {
    try {
      setLoading(true);
      const formdata = new FormData();

      formdata.set("title", data.title);
      formdata.set("url", data.videourl);
      formdata.set("description", data.description);
      formdata.set("category", data.category);
      formdata.set("thumbnail", data.thumbnail[0]);

      const token = localStorage.getItem("acceasToken");

      const response = await axios.post("https://youtube-backend-pvvc.onrender.com/api/v1/video/", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response) {
        dispatch(toggleVideoOverlay());
      }
    } catch (error) {
      return <ErrorFallback />
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full bg-gray-100 px-4">
        <SpinLoader />
      </div>
    );
  }

  const inputStyles =
    `w-full border border-gray-300 rounded-xl py-2 px-3 focus:ring-red-600 focus:border-red-600 outline-none`;

  return (
    <div className="bg-white w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 py-2 gap-10">
      <div className="flex flex-col items-center text-center w-full lg:w-1/2 px-5">
        <img src="/youtube.png" className="h-14 w-16 mb-4" alt="youtube-logo" />
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Create Video</h2>
        <p className="text-lg text-gray-600 font-medium">Enter your video details</p>
      </div>

      <form
        onSubmit={handleSubmit(addVideoFunction)}
        className="w-full lg:w-1/2 max-w-xl bg-gray-50 p-4 rounded-2xl shadow-md space-y-2 overflow-y-auto"
      >
        <div className="flex flex-col items-center gap-4">
          <img
            src={preview || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdV6jxuuHsH1qvI_PEJ0oife4h5w8bOWVPA&s"}
            alt="thumbnail-preview"
            className="h-28 w-56 rounded-md shadow-sm object-cover"
          />

          <label className="flex flex-col items-center cursor-pointer w-40 px-2 py-2 hover:bg-blue-100 rounded-full">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              className="hidden"
              {...register("thumbnail", {
                required: "Thumbnail is required",
              })}
            />
            <span className="text-blue-700 text-lg font-semibold text-center">Select Thumbnail</span>
          </label>
          {errors.thumbnail && (
            <p className="text-red-500 text-sm font-semibold">{errors.thumbnail.message}</p>
          )}
        </div>

        <InputField
          type="text"
          placeholder={errors.title ? errors.title.message : "Enter the video title"}
          className={`${inputStyles} ${errors.title && "placeholder:text-red-600 placeholder:font-semibold"}`}
          {...register("title", { required: "Video title is required" })}
        />

        <textarea
          rows={5}
          placeholder={errors.description ? errors.description.message : "Enter the video description"}
          className={`${inputStyles} ${errors.description && "placeholder:text-red-600 placeholder:font-semibold"}`}
          {...register("description", { required: "Video description is required" })}
        />

        <InputField
          type="text"
          placeholder={errors.videourl ? errors.videourl.message : "Enter the video url"}
          className={`${inputStyles} ${errors.videourl && "placeholder:text-red-600 placeholder:font-semibold"}`}
          {...register("videourl", {
            required: "Video URL is required",
            pattern: {
              value: /^(http|https):\/\/[^ "]+$/,
              message: "Enter a valid URL",
            },
          })}
        />

        {/* Rendering warnigs on error exists */}
        <InputField
          type="text"
          list="categoriesList"
          placeholder={errors.category ? errors.category.message : "Select the category"}
          className={`${inputStyles} ${errors.category && "placeholder:text-red-600 placeholder:font-semibold"}`}
          {...register("category", { required: "Category is required" })}
        />
        <datalist id="categoriesList">
          {categories.map((category) => (
            <option key={category} value={category} />
          ))}
        </datalist>

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