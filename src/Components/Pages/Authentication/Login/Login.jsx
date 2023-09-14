import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import LoadingButton from "../../../Button/LoadingButton";
import GoogleLogin from "../../../SocialLogin/GoogleLogin";
import ResetPassword from "../../../Modal/ResetPassword";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import LazyLoad from "react-lazy-load";


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
    <div className="bg-gray-200 min-h-screen flex ">
      <div className="w-3/5 bg-yellow-200 hidden lg:block">
        <img src="s" alt="logo" />

        {/* hello section */}
        <div className="flex justify-start gap-4 ">
          <LazyLoad>
            <img className="w-16 h-16" loading="lazy" src="https://i.ibb.co/ng9Sdrp/Untitled-design-1-unscreen.gif" alt="" />
          </LazyLoad>
          <h2
            className="text-2xl font-bold mb-4">
            Hello ,
            <br />
            Welcome Back
          </h2>
        </div>
        {/* Welcome Back! Begin Your Exploration */}
      </div>
      {/* form section */}
      <div className="flex justify-center w-full min-h-screen items-center px-4">
        <div className="border lg:p-20">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl mb-10 "><span className="text-2xl lg:text-3xl tracking-widest">Open the Door to Excitement -</span> <br /> <span className="font-bold">Sign In</span> </h2>
          <div >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color" />

              </div>
              <div className="mb-4 relative" >
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
                  className="w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color" />

                <span
                  className="w-fit mr-0 cursor-pointer absolute right-2 top-5 "
                  onClick={() => setShow(!show)}>
                  {show ? <BsFillEyeFill></BsFillEyeFill> : <BsFillEyeSlashFill></BsFillEyeSlashFill>}
                </span>
                {errors.password && (
                  <span className=" text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <span
                onClick={() => setIsOpen(true)}
                className="btn-link  cursor-pointer transform ">
                Forget Password?
              </span>



              <div className="mt-4">
                {loading ? (
                  <LoadingButton></LoadingButton>
                ) : (
                  <button type="submit" className="w-full  flex justify-center py-3 rounded-md   border border-black hover:bg-black hover:text-white duration-500 font-bold">
                    Login
                  </button>
                )}
              </div>
              <p className="mt-4">
                New Here? Please {' '}
                <Link
                  className="my-link font-bold relative"
                  to={"/register"} >
                  Register
                </Link>
              </p>

              <div className="divider">
                <p>or</p>
              </div>

              <div className="my-4">
                <GoogleLogin ></GoogleLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

/* import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import LoadingButton from "../../../Button/LoadingButton";
import GoogleLogin from "../../../SocialLogin/GoogleLogin";
import ResetPassword from "../../../Modal/ResetPassword";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import LazyLoad from "react-lazy-load";


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
    <div className="authenticationImg">
      <div className="flex items-center  justify-center w-full min-h-screen ">



        <div className="p-6  w-80  rounded-lg   duration-700 backdrop-blur-sm">

          <div className="flex justify-start gap-4 ">
            <LazyLoad>
              <img className="w-16 h-16" loading="lazy" src="https://i.ibb.co/ng9Sdrp/Untitled-design-1-unscreen.gif" alt="" />
            </LazyLoad>
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
                className="w-full  bg-transparent px-3 py-2 rounded-md focus:outline-none placeholder-text-color" />

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
                className="w-full  bg-transparent px-3 py-2 rounded-md focus:outline-none placeholder-text-color" />

              <span
                className="w-fit mr-0 cursor-pointer absolute right-2 top-3 "
                onClick={() => setShow(!show)}>
                {show ? <BsFillEyeFill></BsFillEyeFill> : <BsFillEyeSlashFill></BsFillEyeSlashFill>}
              </span>
              {errors.password && (
                <span className=" text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <span
              onClick={() => setIsOpen(true)}
              className="btn-link cursor-pointer transform ">
              Forget Password?
            </span>



            <div className="mt-4">
              {loading ? (
                <LoadingButton></LoadingButton>
              ) : (
                <button type="submit" className=" w-full flex justify-center shadow-sm py-2 rounded-lg shadow-white hover:scale-105 duration-500">
                  Login
                </button>
              )}
            </div>
            <p className="text-sm font-extralight mt-4">
              New Here? Please {' '}
              <Link
                className="my-link font-bold relative"
                to={"/register"} >
                Register
              </Link>
            </p>

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

 */