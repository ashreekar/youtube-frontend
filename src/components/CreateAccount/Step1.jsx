import InputField from '../ButtonsAndInput/InputField'
import { Link } from 'react-router-dom';

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
          className="w-[70%] border border-gray-300 rounded-xl py-2 px-3 
                     focus:ring-red-600 focus:border-red-600 outline-none"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}

        <InputField
          placeholder="Username"
          className="w-[70%] mt-5 border border-gray-300 rounded-xl py-2 px-3 
                     focus:ring-red-600 focus:border-red-600 outline-none"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}

        <div className='w-full flex gap-4'>
          <button
            type="button"
            onClick={handleChangeStep}
            className="w-[30%] mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 
                             text-white rounded-full text-lg font-medium transition cursor-pointer"
          >
            Next
          </button>

          <Link to="/login"
            type="button"
            className="w-auto mt-6 px-6 py-3 hover:text-blue-800
                             text-blue-700 text-lg font-medium transition self-end"
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
}

export default Step1;