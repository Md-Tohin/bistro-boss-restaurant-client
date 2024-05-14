import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/others/authentication1.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, } from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { user, loginUser } = useContext(AuthContext);
  const location = useLocation();  

  let from = location.state?.from.pathname || "/login";
  const [disabled, setDisabled] = useState(true);
  
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const navigate = useNavigate();
  if(user){
    return navigate('/user/dashboard');
  }

  const handleVerifyCaptcha = (e) => {
    const captcha = e.target.value;
    if (validateCaptcha(captcha) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleUserLogin = (event) => {
    event.preventDefault();
    const formData = event.target;
    const email = formData.email.value;
    const password = formData.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        formData.reset();
        navigate(from, {replace: true})
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <>
      <Helmet>
        <title> Login | Bistro Boss Restaurant </title>
      </Helmet>
      <div className="md:w-10/12 border mx-auto md:my-14 md:px-16 py-7 shadow-xl ">
        <div className="flex justify-between items-center">
          <div className="hidden md:block md:w-1/2 pr-5">
            <img src={loginImage} alt="" />
          </div>
          <div className="md:w-1/2 w-full px-5 md:px-0">
            <h1 className="text-2xl font-bold text-dark01 text-center pb-7">
              Login
            </h1>
            <form onSubmit={handleUserLogin}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  onBlur={handleVerifyCaptcha}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type captcha"
                  required
                />
                {disabled && (
                  <small className="text-red-600">
                    Captcha Does Not Match!
                  </small>
                )}
                <div className="mt-2" id="test">
                  <LoadCanvasTemplate />
                </div>
              </div>
              <button
                disabled={disabled}
                className="tracking-[1px] middle none center w-full rounded-lg bg-[#D1A054] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#d19f546c] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Sign In
              </button>
            </form>

            <div className="text-[#D1A054] pt-6 text-center">
              New here?{" "}
              <Link to="/register">
                <span className="font-semibold">Create a New Account</span>
              </Link>
            </div>
           <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
