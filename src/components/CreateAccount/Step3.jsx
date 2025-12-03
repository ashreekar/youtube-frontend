import InputField from '../ButtonsAndInput/InputField'

// this component takes avatar and cover image of user
function Step3({ step, register, setStep, errors }) {
  return (
    <div className={`w-full ${step === 2 ? "flex flex-col gap-4 items-center" : "hidden"}`}>

      <InputField
        type="file"
        label="Avatar image *"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        className="w-full border border-gray-300 rounded-xl py-2 px-3 
          file:bg-black file:text-white file:px-4 mt-2
           file:py-2 file:rounded-xl"
        {...register("avatar", {
          // avatar file is reqgiured
          required: "Avatar is required",
        })}
      />
      {errors.avatar && (
        <p className="text-red-500 text-sm">{errors.avatar.message}</p>
      )}

      <InputField
        type="file"
        label="Cover image"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        className="w-full border border-gray-300 rounded-xl mt-2 py-2 px-3 
          file:bg-black file:text-white file:px-4 file:py-2 file:rounded-xl"
        {...register("coverImage")}
      />

      <div className="flex justify-between w-full mt-6">

        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-6 py-2.5 bg-gray-300 hover:bg-gray-400 
            text-black rounded-full text-md cursor-pointer"
        >
          Back
        </button>

        {/* React hook form sumbits the data */}
        <button
          type="submit"
          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 
            text-white rounded-full text-lg cursor-pointer"
        >
          Create
        </button>

      </div>

    </div>
  )
}

export default Step3;