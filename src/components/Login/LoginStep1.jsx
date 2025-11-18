import InputField from '../ButtonsAndInput/InputField'

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
                        className="w-full border border-gray-300 rounded-xl py-2 px-3 
                             focus:ring-red-600 focus:border-red-600 outline-none"
                        {...register(mode, { required: `${mode} is required` })}
                    />

                    {errors[mode] && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors[mode].message}
                        </p>
                    )}

                    <button
                        type="button"
                        onClick={handleNextClick}
                        className="w-full mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 
                             text-white rounded-full text-lg font-medium transition"
                    >
                        Next
                    </button>

                </div>
            )}
        </>
    )
}

export default LoginStep1