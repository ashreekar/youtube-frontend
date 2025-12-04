import { useForm } from "react-hook-form";
import InputField from "../ButtonsAndInput/InputField";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginUser } from "../../states/userSlice";
import SpinLoader from "../Loaders/SpinLoader";
import { useState } from "react";
import ErrorFallback from "../ErrorBoundary/ErrorFallback";

const ChannelCreation = ({ closePopup }) => {
  // state.user.user is subscribed to get and fill user info as channel info
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      channelName: user?.fullName || "",
      handle: user?.username || "",
    },
  });
  // gives preview of avatar file
  const avatarFile = watch("avatar");
  const preview =
    avatarFile && avatarFile.length > 0
      ? URL.createObjectURL(avatarFile[0])
      : null;

  const createAChannel = async (data) => {
    try {
      setLoading(true);
      // sending as a form data as backend expects both images and info
      const formData = new FormData();
      formData.append("avatar", data.avatar[0]);
      formData.append("name", data.channelName);
      formData.append("handle", data.handle);
      const token = localStorage.getItem("acceasToken")

      const result = await axios.post("http://localhost:3317/api/v1/channel", formData,
        {
          headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` }
        }
      )
      if (result) {
        dispatch(loginUser(result.data.user));
      }
    } catch (error) {
      return <ErrorFallback />
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div
      className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <SpinLoader></SpinLoader>
    </div>
  }

  return (
    <div className="flex items-center justify-center w-full py-4 px-4 rounded-2xl">
      <div className="w-full max-w-xl bg-white rounded-2xlpx-6 py-4 md:px-10 md:py-10 rounded-2xl">

        <h2 className="text-2xl md:text-3xl text-center font-bold mb-6">
          How you'll appear
        </h2>
        {/* handle submit runs on submisiion and calls cb by passing data */}
        {/* This is given by react hook form */}
        <form
          onSubmit={handleSubmit(createAChannel)}
          className="mt-8 flex flex-col gap-5"
        >
          <div className="flex flex-col items-center gap-4">
            <img
              src={preview || "https://yt3.ggpht.com/a/default-user=s200-c-k-c0x00ffffff-no-rj"}
              alt="Profile"
              className="h-24 w-24 md:h-28 md:w-28 rounded-full shadow-sm"
            />

            <div className="flex flex-col items-center">
              <label className="flex flex-col items-center cursor-pointer w-36 px-1 py-2 hover:bg-blue-100 rounded-full">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  className="hidden"
                  {...register("avatar", {
                    required: "Avatar is required",
                  })}
                />
                <span className="text-blue-700 text-lg font-semibold text-center">Select picture</span>
              </label>

              {errors.avatar && (
                <p className="text-red-500 text-sm mt-1">{errors.avatar.message}</p>
              )}
            </div>

          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Name</label>
            <InputField
              type="text"
              className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:border-2 focus:border-blue-600"
              placeholder="Enter channel name"
              {...register("channelName", {
                required: "Channel name is required",
              })}
            />
            {errors.channelName && (
              <p className="text-red-500 text-sm">
                {errors.channelName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Handle</label>
            <InputField
              type="text"
              className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:border-2 focus:border-blue-600"
              placeholder="@example"
              {...register("handle", {
                required: "Handle name is required",
              })}
            />
            {errors.handle && (
              <p className="text-red-500 text-sm">{errors.handle.message}</p>
            )}
          </div>

          <p className="text-gray-500 text-xs mt-2 leading-5">
            By clicking <span className="font-semibold">Create</span>, you agree
            to YouTube's Terms of Service. Your name and profile picture are
            visible only on YouTube and not other Google services.
          </p>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={closePopup}
              className="px-5 py-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 cursor-pointer py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChannelCreation;