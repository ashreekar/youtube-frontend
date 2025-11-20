import InputField from '../ButtonsAndInput/InputField'
import { useState } from 'react'

function Step2({ step, register, errors, watch, setStep, trigger }) {
  const [showPassword, setShowPassword] = useState(false)
  const passwordValue = watch("password")

  async function handleNext() {
    const valid = await trigger(["email", "password"]);
    const match = await trigger(["confirmPassword"]);
    if (!valid || !match) return;
    setStep(2);
  }

  return (
    <div className={`w-full ${step === 1 ? "block" : "hidden"}`}>

      <InputField
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-xl py-2 px-3"
        {...register("email", { required: true })}
      />
      {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

      <div className="flex items-center gap-2 mt-5">
        <InputField
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          className="w-full border border-gray-300 rounded-xl py-2 px-3"
          {...register("password", { required: true })}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-red-600 font-medium"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {errors.password && <p className="text-red-500 text-sm">Password is required</p>}

      <InputField
        placeholder="Confirm Password"
        type={showPassword ? "text" : "password"}
        className="w-full mt-5 border border-gray-300 rounded-xl py-2 px-3"
        {...register("confirmPassword", {
          required: "Confirm your password",
          validate: (v) => v === passwordValue || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
      )}

      <div className="flex justify-between w-full mt-6">

        <button
          type="button"
          onClick={() => setStep(0)}
          className="px-6 py-2.5 bg-gray-300 hover:bg-gray-400 text-black
            rounded-full text-md"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white
            rounded-full text-lg"
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default Step2;