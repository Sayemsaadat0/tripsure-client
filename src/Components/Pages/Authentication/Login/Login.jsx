import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import LoadingButton from "../../../Button/LoadingButton";
import GoogleLogin from "../../../SocialLogin/GoogleLogin";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import PageTitle from "../../../PageTitle/PageTitle";

const Login = () => {
  const currentYear = new Date().getFullYear();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { signInUser, role } = useAuth();
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
        if (role === 'admin') {
          navigate("/dashboard/adminHome", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
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
    <div className="flex ">
      <PageTitle title="Sign In"/>
      <div className="w-3/5  bg-black hidden lg:block">
        <video
          className="relative h-full w-full object-fill"
          muted
          autoPlay
          loop
          src="login.mp4"
        ></video>
        <div className="absolute p-5 top-0">
          <Link to={"/"}>
            <img
              className="w-40 z-10 "
              src="https://i.ibb.co/9mX5YKW/logo-6.png"
              alt="logo"
            />
          </Link>

          {/* hello section */}
          <div className="mt-96 text-white  w-[420px] gap-4 ">
            <h2 className="text-4xl font-bold mb-4">
              Enter Your Account and <br />
              Discover New <br /> Experiences
            </h2>

            <p className="text-lg">
              Travel opens your heart, broadens your mind, and fills your life
              with stories to tell. <br /> -{" "}
              <span className="text-sm">Paula Bendfeldt</span>
            </p>
          </div>
        </div>
        <p className="text-white absolute  bottom-4 left-4">
          @{currentYear} Tripsure Ltd.
        </p>
      </div>
      {/* form section */}
      <div className="flex bg-gradient-to-tr from-blue-300 to-emerald-100 justify-center w-full min-h-screen items-center px-4">
        <div className=" lg:p-20">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl mb-10 ">
            <span className="text-2xl lg:text-3xl tracking-widest">
              Open the Door to Excitement -
            </span>{" "}
            <br /> <span className="font-bold">Sign In</span>{" "}
          </h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color"
                />
              </div>
              <div className="mb-4 relative">
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
                  className="w-full  px-3 py-4 border border-black  outline-black rounded-md placeholder-text-color"
                />

                <span
                  className="w-fit mr-0 cursor-pointer absolute right-2 top-5 "
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <BsFillEyeFill></BsFillEyeFill>
                  ) : (
                    <BsFillEyeSlashFill></BsFillEyeSlashFill>
                  )}
                </span>
                {errors.password && (
                  <span className=" text-sm">{errors.password.message}</span>
                )}
              </div>
              <span
                onClick={() => setIsOpen(true)}
                className="btn-link text-black cursor-pointer transform "
              >
                Forget Password?
              </span>

              <div className="mt-4">
                {loading ? (
                  <LoadingButton></LoadingButton>
                ) : (
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-[#1e2222] py-4 text-white rounded-md gap-4"
                  >
                    Login
                  </button>
                )}
              </div>
              <p className="mt-4">
                New Here? Please{" "}
                <Link className="my-link font-bold relative" to={"/register"}>
                  Register
                </Link>
              </p>

              <div className="divider">
                <p>or</p>
              </div>

              <div className="my-4">
                <GoogleLogin></GoogleLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
