import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../components/ButtonsAndInput/InputField'

function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8F8F8]">
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-md border border-gray-200">

        {/* YOUTUBE LOGO STYLE TITLE */}
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-600">
          Create your YouTube Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

          <div>
            <InputField
              label="Full Name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:border-red-600 focus:ring-red-600 outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div>
            <InputField
              label="Username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:border-red-600 focus:ring-red-600 outline-none"
              {...register("username", { required: true })}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">Username is required</p>}
          </div>

          <div>
            <InputField
              label="Email"
              type="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:border-red-600 focus:ring-red-600 outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:border-red-600 focus:ring-red-600 outline-none"
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
          </div>

          <div>
            <InputField
              label="Profile Image"
              type="file"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              className="w-full border border-gray-300 rounded-md py-2 px-3 file:bg-red-600 file:text-white file:border-none file:py-2 file:px-4"
              {...register("image")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-md text-sm font-medium"
          >
            Create Account
          </button>

        </form>
      </div>
    </div>
  )
}

export default CreateAccount