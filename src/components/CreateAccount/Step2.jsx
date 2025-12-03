import InputField from '../ButtonsAndInput/InputField'
import { useState } from 'react'
import { FaEye } from "react-icons/fa"
import { FaRegEyeSlash } from 'react-icons/fa6';

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

      <div className="relative w-full mt-5">
        <InputField
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          className="w-full border border-gray-300 rounded-xl py-2 px-3 pr-10"
          {...register("password", {
            required: true,
            pattern: {
              value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
              message: "password must contain 1 number (0-9), 1 uppercase letters, 1 lowercase letters, 1 non-alpha numeric number, password is 8-16 characters with no space"
            }
          })}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
        >
          {showPassword ? <FaEye /> : <FaRegEyeSlash />}
        </button>
      </div>
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <InputField
        placeholder="Confirm Password"
        type="password"
        className="w-full mt-5 border border-gray-300 rounded-xl py-2 px-3"
        {...register("confirmPassword", {
          required: "Confirm your password",
          validate: (value) => value === passwordValue || "Passwords do not match",
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
            rounded-full text-md cursor-pointer"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white
            rounded-full text-lg cursor-pointer"
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default Step2;