import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Actor from "../../assets/images/signin/actor.png";

export default function Signin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: false
    });
  };

  const handleSubmit = async () => {
    const { email, password } = formData;

    const newErrors = {
      email: !email,
      password: !password
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user/login",
        formData
      );
      const authToken = response.data.token;
      localStorage.setItem('authToken', authToken);
      toast.success("Signin successful!");
      router.push("/");
    } catch (error) {
      toast.error("There was an error signing in. Please try again.");
    }
  };

  return (
    <main>
      <ToastContainer />
      <div className="w-screen flex flex-col md:flex-row justify-center items-center font-['Poppins']">
        <div className="flex flex-col justify-stretch justify-items-center h-screen md:w-1/2 w-full bg-white gap-4 p-4 md:p-0">
          <div className="w-full h-full">
            <div className="flex flex-row justify-center py-10">
              <Image src="/Logo.png" width={272} height={44} alt="Logo" />
            </div>
          </div>
          <div className="w-full h-min flex flex-col px-8 md:px-20">
            <div className="w-full h-auto">
              <p className="text-[28px] md:text-[35px] font-bold">
                {" "}
                Welcome back!{" "}
              </p>
              <p className="text-sm md:text-l"> Start your journey again! </p>
            </div>
            <div className="">
              <p className="font-bold text-lg md:text-xl py-3"> Email </p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`border-2 ${
                  errors.email ? "border-red-500" : "border-black"
                } px-4 rounded-lg w-full h-10 md:h-12`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
              <p className="font-bold text-lg md:text-xl py-3"> Password </p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`border-2 ${
                  errors.password ? "border-red-500" : "border-black"
                } px-4 rounded-lg w-full h-10 md:h-12`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
            </div>
          </div>
          <div className="w-full h-full">
            <div className="flex flex-row justify-center py-4">
              <button
                onClick={handleSubmit}
                className="bg-green-400 w-3/4 md:w-1/2 h-10 md:h-12 rounded-lg text-white"
              >
                Sign In
              </button>
            </div>
            <div>
              <p className="text-center">
                Don't have an account?
                <a href="/auth/register" className="text-orange-100">
                  {" "}
                  Sign Up{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen md:w-1/2 w-full bg-green-400 justify-center flex items-center flex-row">
          <div className="h-3/4 w-11/12 md:w-3/4 mx-5 md:mx-10 my-10 bg-white bg-opacity-40 rounded-[30px] flex flex-col px-5 md:px-10 py-10">
            <div>
              <p className="text-white text-[28px] md:text-[36px]">
                {" "}
                Pantau Terus Mood,{" "}
              </p>
              <p className="text-white text-[28px] md:text-[36px]">
                {" "}
                Ciptakan Dunia Yang{" "}
              </p>
              <p className="text-white text-[28px] md:text-[36px]"> Indah! </p>
            </div>
            <div className="h-min flex flex-row justify-center">
              {/* <Image src={Actor} className="aspect-[2/3]" alt="Actor" /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
