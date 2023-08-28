import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import LoadingButton from "../../../Button/LoadingButton";
import GoogleLogin from "../../../SocialLogin/GoogleLogin";
import ResetPassword from "../../../Modal/ResetPassword";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import Particle from "../Particle";









const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { signInUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmit = (data) => {


    const { email, password } = data;
    setLoading(true);
    signInUser(email, password)
      .then((result) => {

        Swal.fire({
          title: "Success!",
          text: "Your account has been successfully login.",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/", { replace: true });
        setLoading(false);
      })
      .catch((error) => {

        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Cool",
        });

        setLoading(false);
      });
  };


  return (
    <div className="flex authentication   items-center justify-center min-h-screen p-4">
      <div className="">

        {/* box */}
        <div className="p-6 bg-white w-80 shadow-2xl rounded-lg text-black">
          <Particle></Particle>

          <div className="flex justify-start gap-4">
            <img className="w-16 h-16" src="https://i.ibb.co/sjk5nbQ/Untitled-design-1.gif" alt="" />
            <h2
              className="text-2xl  font-bold mb-4">
              Hello ,
              <br />
              Welcome Back
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full border font-extralight  border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2" />

            </div>
            <div className="mb-4  relative" >
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full border font-extralight  border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2" />

              <span
                className="w-fit mr-0 cursor-pointer absolute right-2 top-3 "
                onClick={() => setShow(!show)}>
                {show ? <BsFillEyeFill></BsFillEyeFill> : <BsFillEyeSlashFill></BsFillEyeSlashFill>}
              </span>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <span
              onClick={() => setIsOpen(true)}
              className="btn-link cursor-pointer transform text-red-500 ">
              Forget Password?
            </span>


            <p className="text-sm font-extralight mt-4">
              New Here? Please {' '}
              <Link
                className="my-link font-bold relative"
                to={"/register"}
              >
                Register
              </Link>
            </p>


            {/* login button */}
            <div className="mt-4">
              {loading ? (
                <LoadingButton></LoadingButton>
              ) : (
                <button type="submit" className="btn-primary w-full">
                  login
                </button>
              )}
            </div>

            <div className="divider">
              <p>or</p>
            </div>

            <div className="my-4">
              <GoogleLogin ></GoogleLogin>
            </div>
          </form>
        </div>
        <ResetPassword closeModal={closeModal} isOpen={isOpen}></ResetPassword>
      </div>
    </div>
  );
};

export default Login;



  // bg-[url('https://i.ibb.co/9h7VBjC/two-athletic-man-floats-red-boat-river.jpg')] bg-no-repeat bg-cover
  // bg-[url('https://i.ibb.co/Qnf5MgH/ABCDEFGHI-JKLMNO-1.png')] bg-no-repeat bg-cover



