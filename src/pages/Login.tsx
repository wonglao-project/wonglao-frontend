import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { FormEvent, useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await login(usernameInput, passwordInput);

      navigate("/");
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div
      className="h-90"
      data-aos="fade-up"
      data-aos-offset={400}
      data-aos-duration="1300"
    >
      <div className="py-12 flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-left w-2/6 mt-10"
        >
          <span className="font-bold text-xl mb-2 text-center">
            ALREADY REGISTERED?
          </span>
          <span className="font-bold text-base mb-2 text-center">
            If you have an account with us, please log in :)
          </span>
          <br />

          <div className="relative z-0 mb-6 w-full group mt-5">
            <input
              className="leading-10 block py-2 w-full px-0 border-0 text-lg text-black bg-transparent border-b-2 border-gray-300 appearance-none dark:text-grey-600 dark:border-grey-600 dark:focus:-border-grey-800 focus:outline-none focus:ring-0 focus:boder-grey-600 peer"
              placeholder=" "
              type="text"
              name="floating_name"
              id="floating_name"
              onChange={(e) => setUsernameInput(e.target.value)}
              required
            />
            <label className="peer-focus:font-medium absolute text-xl text-grey-500 dark:text-grey-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-grey-600 peer-focus:dark:text-grey-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Username
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group mt-5">
            <input
              className="leading-10 block py-2 w-full px-0 border-0 text-xl text-black bg-transparent border-b-2 border-gray-300 appearance-none dark:text-grey-600 dark:border-grey-600 dark:focus:-border-grey-800 focus:outline-none focus:ring-0 focus:boder-grey-600 peer"
              placeholder=" "
              type="password"
              id="floating_name"
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
            <label className="peer-focus:font-medium absolute text-xl text-grey-500 dark:text-grey-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-grey-600 peer-focus:dark:text-grey-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>
          <button className="bg-gray-200 p-3 rounded-lg text-white hover:bg-[#797979]">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
