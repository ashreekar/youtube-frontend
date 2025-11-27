import { useState, lazy, Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import LineLoader from '../components/Loaders/LineLoader';
import axios from 'axios';
import { loginUser } from '../states/userSlice';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/SidebarAndPopUp/Popup';
import Errorlogin from '../components/Popups/Errorlogin'
import SpinLoader from '../components/Loaders/SpinLoader';

const LoginMode = lazy(() => import('../components/Login/LoginMode'));
const LoginStep1 = lazy(() => import('../components/Login/LoginStep1'));
const LoginStep2 = lazy(() => import('../components/Login/LoginStep2'));

function Login() {
  const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [start, setStart] = useState(false);
  const [mode, setMode] = useState(null);
  const [step, setStep] = useState(0);

  // fetch states
  const [laoding, setLoding] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const user = useSelector(state => state.user.user);

  if (user) {
    navigate('/');
  }

  async function signIn(data) {
    setLoding(true);

    try {
      const valid = await trigger([mode, "password"]);
      if (!valid) return;

      const user = await axios.post(
        "http://localhost:3317/api/v1/user/login",
        data
      );

      if (user) {
        localStorage.setItem("acceasToken", user.data.data.acceastoken);
        dispatch(loginUser(user.data.data.user));
        navigate('/');
        setStart(false);
        setMode(null);
        setStep(0);
        setValue("email", "");
        setValue("password", "");
        setValue("username", "");
      }
    } catch (error) {
      setStart(false);
      setMode(null);
      setStep(0);
      setValue("email", "");
      setValue("password", "");
      setValue("username", "");

      setLoginError({
        title: "Login Failed",
        description: error.response?.data?.message || "Invalid username or password",
        customUrl: window.location.hostname,
      });

    } finally {
      setLoding(false);
    }
  }

  if (laoding) {
    return <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4"><SpinLoader></SpinLoader></div>

  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      {loginError && (
        <Popup popupkey="channel" closePopup={() => setLoginError(null)}>
          <Errorlogin {...loginError} />
        </Popup>
      )}

      <div className="bg-white shadow-md p-6 md:p-10 w-full max-w-[900px]
          min-h-[60vh] border border-gray-200 rounded-xl
          flex flex-col md:flex-row gap-6 md:gap-10 items-center">

        <div className="hidden md:flex flex-col items-center justify-center w-1/2 gap-3 text-center">
          <img src="youtube.png" className="h-14 w-16" alt="youtube-logo" />
          <h2 className="text-4xl font-semibold">Sign In</h2>
          <p className="text-lg text-gray-600 font-medium">to continue to YouTube</p>
        </div>

        <div className="w-full md:w-1/2">
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