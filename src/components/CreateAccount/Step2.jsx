import InputField from '../ButtonsAndInput/InputField'
import { useState } from 'react'

function Step2({ step, register, errors, watch, setStep, trigger }) {
    const passwordValue = watch("password")
    const [showPassword, setShowPassword] = useState(false)

    async function handleNextClick(){
        const isValid=await trigger(["email","password"]);

        const isPasswordMatched=await trigger(["confirmPassword"]);

        if(!isValid || !isPasswordMatched){
            return;
        }
        setStep(2);
    }

    return (
        <div className={`w-full ${step === 1 ? "block" : "hidden"}`}>

            <InputField
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-xl py-2 px-3 focus:ring-red-600 focus:border-red-600 outline-none"
                {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}

            <div className="flex items-center gap-2 mt-5">
                <InputField
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="w-full border border-gray-300 rounded-xl py-2 px-3 focus:ring-red-600 focus:border-red-600 outline-none"
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
            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}

            <InputField
                placeholder="Confirm Password"
                type={showPassword ? "text" : "password"}
                className="w-full mt-5 border border-gray-300 rounded-xl py-2 px-3 focus:ring-red-600 focus:border-red-600 outline-none"
                {...register("confirmPassword", {
                    required: "Confirm your password",
                    validate: (val) =>
                        val === passwordValue || "Passwords do not match",
                })}
            />
            {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}

            <div className="flex justify-between w-full mt-6">

                <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="px-6 bg-gray-300 hover:bg-gray-400 text-black py-2.5 rounded-full text-md cursor-pointer"
                >
                    Back
                </button>

                <button
                    type="button"
                    onClick={handleNextClick}
                    className="px-6 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-full text-lg cursor-pointer"
                >
                    Next
                </button>

            </div>

        </div>
    )
}

export default Step2