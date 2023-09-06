import React, { useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import LoadingButton from "../Button/LoadingButton";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const ResetPassword = ({ isOpen, closeModal }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { resetPassword } = useAuth();
  const emailRef = useRef();

  const handleResetPassword = () => {
    setLoading(true);
    const userEmail = emailRef.current.value;
    if (userEmail === "" || !userEmail) {
      setError("please check your email for reset password");
      setLoading(false);
      return;
    }
    console.log(userEmail);
    resetPassword(userEmail)
      .then(() => {
        Swal.fire({
          text: "Please Check Your Email to Reset Your Password.",
          confirmButtonText: "okay",
        });
        setLoading(false);
        closeModal();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
        closeModal();
      });
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      name="email"
                      required
                      placeholder="Enter Email"
                      className="w-full border text-[#2d969e] border-gray-300 px-3 py-2 rounded-md focus:outline-none ring-[#6bccd3] focus:ring-2 placeholder-[#2d969e] ring-offset-2 focus:border-blue-500"
                    />
                    {error && <p className="text-red-500">{error}</p>}
                  </div>

                  <div className="mt-4">
                    {loading ? (
                      <LoadingButton></LoadingButton>
                    ) : (
                      <button
                        onClick={handleResetPassword}
                        type="submit"
                        className=" w-full flex justify-center   shadow-sm shadow-black py-2 rounded-lg ">
                        Reset Password
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ResetPassword;
