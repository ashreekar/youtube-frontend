import { Link } from 'react-router-dom';

function LoginMode({ start, setMode, setStart }) {
  // login option stage for email or username
  function emailLogin() {
    setMode("email");
    setStart(true);
  }

  function usernameLogin() {
    setMode("username");
    setStart(true);
  }

  return (
    <>
      {!start && (
        <div className="flex flex-col gap-4 items-center w-full">
          <button
            onClick={emailLogin}
            className="w-2/3 py-3 bg-red-600 hover:bg-red-700 text-white
               rounded-full text-sm md:text-md font-medium transition cursor-pointer"
          >
            Login using Email
          </button>

          <button
            onClick={usernameLogin}
            className="w-2/3 py-3 bg-red-600 hover:bg-red-700 text-white
               rounded-full text-sm md:text-md font-medium transition cursor-pointer"
          >
            Login using Username
          </button>

          <Link to="/create-account">
            <p className="text-blue-900 hover:text-blue-950 hover:underline">
              Don't have an account? <span>Create one</span>
            </p>
          </Link>

          <Link to="/" className="text-gray-700 text-sm hover:underline mt-2">
            Continue without login
          </Link>
        </div>
      )}
    </>
  );
}

export default LoginMode;