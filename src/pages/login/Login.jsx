import React, { useState } from "react";
import Front from "/front.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterContext } from "../../context/Context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
// Icons
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";

const Login = () => {
  const { loginUser } = useRegisterContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

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
    loginUser(data, navigate);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                  Login to your account
                </h1>

                <p className="mt-4 text-gray-500">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account.
                </p>
              </div>

              <form
                action="#"
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto mb-0 mt-8 max-w-md space-y-4"
              >
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <div className="relative">
                    <input
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
                      type={showPassword ? "text" : "password"}
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                      {...register("password")}
                    />
                    <span
                      className="absolute inset-y-0 end-0 grid place-content-center px-4"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    No account?
                    <Link className="underline" to="/register">
                      Sign up
                    </Link>
                  </p>

                  <button
                    type="submit"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    onClick={handleErrors}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
              <img
                alt=""
                src={Front}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Login;
