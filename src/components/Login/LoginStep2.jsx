import InputField from '../ButtonsAndInput/InputField'
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

// final stage of login form
function LoginStep2({ step, register, errors }) {
  // hode password flag
  const [hidden, setHidden] = useState(true);

  return (
    <>
      {step === 1 && (
        <div className="space-y-5">
          <div className='relative'>
            <InputField
              placeholder="Enter your password"
              type={hidden ? "password" : "text"}
              className="w-full border border-gray-300 rounded-xl py-2 px-3
                focus:ring-red-600 focus:border-red-600 outline-none"
              {...register("password", { required: "Password is required" })}
            />

            {/* button to hide and show password */}
            <button
              type="button"
              onClick={() => setHidden(!hidden)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
            >
              {hidden ? <FaEye /> : <FaRegEyeSlash />}
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
                text-white rounded-full text-lg font-medium transition cursor-pointer"
            >
              Login
            </button>

            <Link
              to="/create-account"
              className="text-blue-700 hover:text-blue-800 text-lg font-medium
                self-center sm:self-end mt-3 sm:mt-0 py-3 cursor-pointer"
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