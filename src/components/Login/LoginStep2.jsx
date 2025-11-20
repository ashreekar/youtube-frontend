import InputField from '../ButtonsAndInput/InputField'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginStep2({ step, register, errors }) {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      {step === 1 && (
        <div className="space-y-5">
          <div>
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
              className="text-red-600 text-sm font-medium mt-1"
            >
              {hidden ? "Show" : "Hide"}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-5">
            <button
              type="submit"
              className="sm:w-[40%] w-full px-6 py-3 bg-red-600 hover:bg-red-700
                text-white rounded-full text-lg font-medium transition"
            >
              Login
            </button>

            <Link
              to="/create-account"
              className="text-blue-700 hover:text-blue-800 text-lg font-medium
                self-center sm:self-end mt-3 sm:mt-0 py-3"
            >
              Create account
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginStep2;