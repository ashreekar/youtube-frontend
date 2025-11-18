import { useState } from 'react'
import { useForm } from 'react-hook-form'
import LoginMode from '../components/Login/LoginMode';
import LoginStep1 from '../components/Login/LoginStep1';
import LoginStep2 from '../components/Login/LoginStep2';

function Login() {
  const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();

  const [start, setStart] = useState(false);
  const [mode, setMode] = useState(null);
  const [step, setStep] = useState(0);

  async function signIn() {
    const valid = await trigger([mode, "password"]);
    if (!valid) return;

    alert("Login success!");
    setStart(false);
    setMode(null);
    setStep(0);
    setValue("email", "");
    setValue("password", "");
    setValue("username", "");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white flex justify-between items-center shadow-md p-10 w-full max-w-[65%] h-full min-h-[70vh] border border-gray-200 rounded-xl">
        <div className='w-1/2 flex flex-col items-center justify-center h-full gap-3'>
          <img src="youtube.png" className='h-12 w-14' alt="youtube-logo" />
          <h2 className="text-5xl font-semibold text-center mb-8">
            Sign In
          </h2>
          <p className='text-xl text-gray-600 font-medium'>to continue to youtube</p>
        </div>

        <div className='w-1/2'>
          <LoginMode start={start} setMode={setMode} setStart={setStart} />

          {start && (
            <form onSubmit={handleSubmit(signIn)} className="space-y-5">

              <LoginStep1 step={step} mode={mode} register={register} errors={errors} trigger={trigger} setStep={setStep} />

              <LoginStep2 step={step} register={register} errors={errors} />

            </form>
          )}

        </div>
      </div>
    </div>
  );
}

export default Login;