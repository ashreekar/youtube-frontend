import InputField from '../ButtonsAndInput/InputField'
import { useState } from 'react';

function LoginStep2({ step, register, errors }) {
    const [hidden, setHidden] = useState(true);

    return (
        <>
            {step === 1 && (
                <div className="space-y-5">

                    <div className="flex items-center gap-2">
                        <InputField
                            placeholder="Enter your password"
                            type={hidden ? "password" : "text"}
                            className="w-full border border-gray-300 rounded-xl py-2 px-3 
                               focus:ring-red-600 focus:border-red-600 outline-none"
                            {...register("password", { required: "Password is required" })}
                        />

                        <button
                            type="button"
                            onClick={() => setHidden(!hidden)}
                            className="text-red-600 font-medium"
                        >
                            {hidden ? "Show" : "Hide"}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 
                             text-white rounded-full text-lg font-medium transition"
                    >
                        Login
                    </button>

                </div>
            )}
        </>
    )
}

export default LoginStep2