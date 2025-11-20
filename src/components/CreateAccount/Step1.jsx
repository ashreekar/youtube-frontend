import InputField from '../ButtonsAndInput/InputField'
import { Link } from 'react-router-dom';

function Step1({ step, register, errors, setStep, trigger }) {

  async function handleNext() {
    const valid = await trigger(["name", "username"]);
    if (!valid) return;
    setStep(1);
  }

  return (
    <div className={`w-full ${step === 0 ? "block" : "hidden"}`}>

      <InputField
        placeholder="Full Name"
        className="w-full border border-gray-300 rounded-xl py-2 px-3 
          focus:ring-red-600 focus:border-red-600 outline-none"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <InputField
        placeholder="Username"
        className="w-full mt-5 border border-gray-300 rounded-xl py-2 px-3 
          focus:ring-red-600 focus:border-red-600 outline-none"
        {...register("username", { required: "Username is required" })}
      />
      {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          type="button"
          onClick={handleNext}
          className="w-full sm:w-[40%] px-6 py-3 bg-red-600 hover:bg-red-700 
            text-white rounded-full text-lg font-medium"
        >
          Next
        </button>

        <Link
          to="/login"
          className="text-blue-700 hover:text-blue-800 text-lg font-medium self-center"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Step1;