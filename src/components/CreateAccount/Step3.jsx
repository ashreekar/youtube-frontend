import InputField from '../ButtonsAndInput/InputField'

function Step3({ step, register, setStep }) {
  return (
    <div className={`w-full ${step === 2 ? "block" : "hidden"}`}>

      <InputField
        type="file"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        className="w-full border border-gray-300 rounded-xl py-2 px-3 
          file:bg-black file:text-white file:px-4 file:py-2 file:rounded-xl"
        {...register("avatar")}
      />

      <InputField
        type="file"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        className="w-full border border-gray-300 rounded-xl py-2 px-3 
          file:bg-black file:text-white file:px-4 file:py-2 file:rounded-xl"
        {...register("coverImage")}
      />

      <div className="flex justify-between w-full mt-6">

        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-6 py-2.5 bg-gray-300 hover:bg-gray-400 
            text-black rounded-full text-md"
        >
          Back
        </button>

        <button
          type="submit"
          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 
            text-white rounded-full text-lg"
        >
          Create
        </button>

      </div>

    </div>
  )
}

export default Step3;