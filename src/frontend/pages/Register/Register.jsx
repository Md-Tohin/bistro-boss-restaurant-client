import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../../assets/others/authentication2.png";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleShowPassword = (val) => {
    setShowPassword(!val);
  };
  const handleShowPass = (val) => {
    setShowPass(!val);
  };

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        const name = data.name;
        const photo = "https://i.ibb.co/tQFVRft/profile.png";
        updateUserProfile(name, photo).then(() => {
          const userInfo = {
            name: name,
            email: data.email,
            password: data.password,
            photo: photo,
            role: "User",
          };
          axiosPublic
            .post("/api/users", userInfo)
            .then((res) => {
              console.log(res.data);
              if (res.data.insertedId) {
                Swal.fire("User created successfully!");
                reset();
                navigate("/user/dashboard");                
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                });
              }
            })
            .catch((error) => {
              console.log(error);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            });
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
        <title> Register | Bistro Boss Restaurant </title>
      </Helmet>
      <div className="md:w-10/12 border mx-auto md:my-14 md:px-16 py-7 shadow-xl ">
        <div className="flex justify-between items-center">
          <div className="md:w-1/2 w-full px-5 md:px-0">
            <h1 className="text-2xl font-bold text-dark01 text-center pb-7">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium  text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">
                    Name field is required!
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">
                    Email field is required!
                  </p>
                )}
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,20}$/,
                  })}
                  type={showPass ? "text" : "password"}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                />
                <span
                  className="absolute top-10 right-5"
                  onClick={() => handleShowPass(showPass)}
                >
                  {showPass ? <IoIosEyeOff /> : <IoEyeSharp />}
                </span>
                {errors.password?.type === "required" && (
                  <span className="text-red-600 text-sm">
                    Password field is required!
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600 text-sm">
                    Password must have one uppercase, one lowercase, one number
                    and one special character!
                  </span>
                )}
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Confirm password
                </label>
                <input
                  {...register("confirm_password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  id="confirm_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                />
                <span
                  className="absolute top-10 right-5"
                  onClick={() => handleShowPassword(showPassword)}
                >
                  {showPassword ? <IoIosEyeOff /> : <IoEyeSharp />}
                </span>
                {errors.confirm_password?.type === "required" && (
                  <span className="text-red-600 text-sm">
                    Confirm password field is required!
                  </span>
                )}
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    name="accept"
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <button
                className="tracking-[1px] middle none center w-full rounded-lg bg-[#D1A054] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#d19f546c] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Sign Up
              </button>
            </form>

            <div className="text-[#D1A054] pt-6 text-center">
              Already registered?{" "}
              <Link to="/login">
                <span className="font-semibold"> Go to log in</span>
              </Link>
            </div>
           <SocialLogin></SocialLogin>
          </div>
          <div className="hidden md:block md:w-1/2 pl-5">
            <img src={registerImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
