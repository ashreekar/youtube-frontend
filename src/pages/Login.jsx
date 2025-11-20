import { useState, lazy, Suspense } from 'react'
import { useForm } from 'react-hook-form'
import LineLoader from '../components/Loaders/LineLoader';

const LoginMode = lazy(() => import('../components/Login/LoginMode'));
const LoginStep1 = lazy(() => import('../components/Login/LoginStep1'));
const LoginStep2 = lazy(() => import('../components/Login/LoginStep2'));

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md p-6 md:p-10 w-full max-w-[900px]
          min-h-[60vh] border border-gray-200 rounded-xl
          flex flex-col md:flex-row gap-6 md:gap-10 items-center">

        {/* LEFT SIDE – hidden on mobile */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 gap-3 text-center">
          <img src="youtube.png" className="h-14 w-16" alt="youtube-logo" />
          <h2 className="text-4xl font-semibold">Sign In</h2>
          <p className="text-lg text-gray-600 font-medium">to continue to YouTube</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2">
          {/* Mobile header */}
          <div className="md:hidden flex flex-col items-center mb-6">
            <img src="youtube.png" className="h-10 w-12" alt="youtube-logo" />
            <h2 className="text-3xl font-semibold mt-2">Sign In</h2>
            <p className="text-sm text-gray-600">to continue to YouTube</p>
          </div>

          <Suspense fallback={<LineLoader />}>
            <LoginMode start={start} setMode={setMode} setStart={setStart} />
          </Suspense>

          {start && (
            <form onSubmit={handleSubmit(signIn)} className="space-y-5">
              <Suspense fallback={<LineLoader />}>
                <LoginStep1
                  step={step}
                  mode={mode}
                  register={register}
                  errors={errors}
                  trigger={trigger}
                  setStep={setStep}
                />
              </Suspense>

              {
                step == 1 && <Suspense fallback={<LineLoader />}>
                  <LoginStep2
                    step={step}
                    register={register}
                    errors={errors}
                  />
                </Suspense>
              }
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;