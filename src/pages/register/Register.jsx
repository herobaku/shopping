import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Back from "/back.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useRegisterContext } from "../../context/Context";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(
      /^[a-zA-Z0-9_]{3,16}$/,
      "Username must be 3-16 characters and contain only letters, numbers, and underscores"
    )
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must be minimum 8 characters, at least one letter and one number"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const Register = () => {

  const { RegisterUser } = useRegisterContext();

  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleErrors = async () => {
    const result = await trigger();
    if (!result) {
      Object.values(errors).forEach((error) => {
        toast.error(error.message);
      });
    }
  };

  const onSubmit = (data) => {
    RegisterUser(data, navigate);
  };

  return (
    <section className="max-w-screen-xl mx-auto">
      <ToastContainer />
      <div className="container mx-auto">
        <div className="py-10 px-6">
          <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Register an account
                </h1>

                <p className="mt-4 text-gray-500">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto mb-0 mt-8 max-w-md space-y-4"
              >
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter Username"
                      {...register("username")}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                      {...register("email")}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Password"
                      {...register("password")}
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                      {...register("confirmPassword")}
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Account?
                    <Link className="underline ms-1" to="/login">
                      Sign in
                    </Link>
                  </p>
                  <button
                    type="submit"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    onClick={handleErrors}
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
              <img
                alt=""
                src={Back}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Register;
