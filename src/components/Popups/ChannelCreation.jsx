import { useForm } from "react-hook-form";
import InputField from "../ButtonsAndInput/InputField";
import { useSelector } from "react-redux";

const ChannelCreation = () => {
  const user = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      channelName: user?.fullName || "",
      handle: user?.username || "",
    },
  });

  const createAChannel = (data) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    formData.append("channelName", data.channelName);
    formData.append("handle", data.handle);

    console.log("FORM DATA:", data);
  };

  return (
    <div className="flex items-center justify-center w-full py-4 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xlpx-6 py-4 md:px-10 md:py-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          How you'll appear
        </h2>

        <div className="flex flex-col items-center gap-4">
          <img
            src="https://yt3.ggpht.com/a/default-user=s200-c-k-c0x00ffffff-no-rj"
            alt="Profile"
            className="h-24 w-24 md:h-28 md:w-28 rounded-full border shadow-sm"
          />

          <div className="w-full flex flex-col items-center">
            <InputField
              type="file"
              label="Select picture"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              className="border-none outline-none file:border-none file:outline-none"
              {...register("avatar", {
                required: "Avatar is required",
              })}
            />

            {errors.avatar && (
              <p className="text-red-500 text-sm mt-1">
                {errors.avatar.message}
              </p>
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(createAChannel)}
          className="mt-8 flex flex-col gap-5"
        >
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
              className="px-5 py-2 rounded-full hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
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