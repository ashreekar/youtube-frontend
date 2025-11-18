import InputField from '../ButtonsAndInput/InputField'
import { useEffect, useState } from 'react';

function Step1({ step, register, errors, setStep, trigger }) {

  async function handleChangeStep() {
    const isValid = await trigger(["name", "username"]);

    if (!isValid) return; 
    setStep(1);
  }

  return (
    <>
      <div className={`w-full ${step === 0 ? "block" : "hidden"}`}>

        <InputField
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-xl py-2 px-3 
                     focus:ring-red-600 focus:border-red-600 outline-none"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}

        <InputField
          placeholder="Username"
          className="w-full mt-5 border border-gray-300 rounded-xl py-2 px-3 
                     focus:ring-red-600 focus:border-red-600 outline-none"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}

        <button
          type="button"
          onClick={handleChangeStep}
          className="mt-6 px-6 bg-red-600 hover:bg-red-700 text-white 
                     py-2.5 rounded-full text-lg font-medium cursor-pointer"
        >
          Next
        </button>

      </div>
    </>
  );
}

export default Step1;