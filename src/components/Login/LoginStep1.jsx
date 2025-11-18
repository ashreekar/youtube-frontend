import InputField from '../ButtonsAndInput/InputField'
import { Link } from 'react-router-dom';

function LoginStep1({ step, mode, register, errors, trigger, setStep }) {

    const handleNextClick = async () => {
        const valid = await trigger([mode]);
        if (!valid) return;
        setStep(1);
    }
    return (
        <>
            {step === 0 && (
                <div>

                    <InputField
                        placeholder={`Enter your ${mode}`}
                        type={mode === "email" ? "email" : "text"}
                        className="w-[70%] border border-gray-300 rounded-xl py-2 px-3 
                             focus:ring-red-600 focus:border-red-600 outline-none"
                        {...register(mode, { required: `${mode} is required` })}
                    />

                    {errors[mode] && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors[mode].message}
                        </p>
                    )}
                    <div className='w-full flex gap-4'>
                        <button
                            type="button"
                            onClick={handleNextClick}
                            className="w-[30%] mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 
                             text-white rounded-full text-lg font-medium transition"
                        >
                            Next
                        </button>

                        <Link to="/create-account"
                            type="button"
                            className="w-auto mt-6 px-6 py-3 hover:text-blue-800
                             text-blue-700 text-lg font-medium transition self-end"
                        >
                            Create account
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default LoginStep1