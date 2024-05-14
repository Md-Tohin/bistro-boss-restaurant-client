import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import useAuth from "./../../../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const currentUser = result.user;
        const userInfo = {
          name: currentUser?.displayName,
          email: currentUser?.email,
          photo: currentUser?.photoURL,
          password: "",
          role: "user",
        };
        axiosPublic
          .post("/api/users", userInfo)
          .then((res) => {
            console.log(res.data);
            Swal.fire("User created successfully!");
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
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
      <div className="text-center ">
        <div className="text-dark02 py-3">Or sign in with</div>
        <div className="flex justify-between items-center w-1/2 mx-auto text-dark02">
          <Link className="bg-white border border-dark02 p-3 rounded-full mx-1.5 hover:bg-black hover:bg-opacity-60 hover:text-white transition-all duration-300">
            <FaFacebookF></FaFacebookF>
          </Link>
          <Link
            onClick={handleGoogleLogin}
            className="bg-white border border-dark02 p-3 rounded-full mx-1.5 hover:bg-black hover:bg-opacity-60 hover:text-white transition-all duration-300"
          >
            <FaGoogle />
          </Link>
          <Link className="bg-white border border-dark02 p-3 rounded-full mx-1.5 hover:bg-black hover:bg-opacity-60 hover:text-white transition-all duration-300">
            <FaGithub />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
