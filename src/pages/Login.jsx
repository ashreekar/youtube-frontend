import { useState, lazy, Suspense, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import LineLoader from '../components/Loaders/LineLoader';
import axios from 'axios';
import { loginUser } from '../states/userSlice';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/SidebarAndPopUp/Popup';
import Errorlogin from '../components/Popups/Errorlogin'
import SpinLoader from '../components/Loaders/SpinLoader';

// this is a 3 step login form

// step 1: ask login mode
// step 2: ask unique identifies either email or username
// step 3: ask validator(password)
const LoginMode = lazy(() => import('../components/Login/LoginMode'));
const LoginStep1 = lazy(() => import('../components/Login/LoginStep1'));
const LoginStep2 = lazy(() => import('../components/Login/LoginStep2'));

function Login() {
  // using react hook form to manage form operations
  const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();
  // main variables are register,and handlesubmit functions
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initial state of form
  const [start, setStart] = useState(false);
  const [mode, setMode] = useState(null);
  const [step, setStep] = useState(0);

  // fetch states
  const [laoding, setLoding] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const user = useSelector(state => state.user.user);

  // if user exists in redux state then getting back to home screens 
  // stopping forced logins
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user])

  // function that is passwed to handlesubmit which runs on form suumission
  async function signIn(data) {
    setLoding(true);

    try {
      // checking users enters valid password
      const valid = await trigger([mode, "password"]);
      if (!valid) return;

      const user = await axios.post(
        "https://youtube-backend-pvvc.onrender.com/api/v1/user/login",
        data
      );

      // on sucessfull login
      // clearing form states and adding user and auth token to states
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
      // on error clearing form states
      setStart(false);
      setMode(null);
      setStep(0);
      setValue("email", "");
      setValue("password", "");
      setValue("username", "");

      // triggers popup of error
      setLoginError({
        title: "Login Failed",
        description: error.response?.data?.message || "Invalid username or password",
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
      {/* On login error popup appears */}
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

        {/* laoding login mode first */}
          <Suspense fallback={<LineLoader />}>
          {/* Start flag check whether to render login mode */}
            <LoginMode start={start} setMode={setMode} setStart={setStart} />
          </Suspense>

          {start && (
            //handlesubmit is a function that passes data to sign in which is a call back
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