import { useState } from "react";
import { useMicrosoftLogin } from "../hooks/useMicrosoftLogin";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { microsoftLogin } = useMicrosoftLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="h-[88vh] flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 py-6 w-80"
      >
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h3>

        <label className="block text-gray-700 mb-2 text-sm">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block text-gray-700 mb-2 text-sm">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          disabled={isLoading}
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600 transition"
        >
          Login
        </button>
        {error && <div className="text-red-500 text-sm mt-4">{error}</div>}

        <div className="my-4 text-center">
          <span className="text-gray-500">OR</span>
        </div>

        <button
  type="button"
  onClick={() => {

    window.location.href =
      "https://mern-workout-app-cperhzf6bthahee5.centralindia-01.azurewebsites.net/.auth/login/aad?post_login_redirect_url=https://workout-mate-kappa.vercel.app//microsoft-callback";

  }}
  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
>
  Login with Microsoft
</button>
      </form>
    </div>
  );
};

export default Login;
