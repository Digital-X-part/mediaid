"use client";
import axiosInstance from "@/utility/axiosInstance";
import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const EmailLogin = ({ toggleEmailLoginModal }) => {
  const [unHidePass, setUnHidePass] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [error, setError] = useState("");

  /* create user */
  const createUser =async (e) => {
    e.preventDefault();
    setError("");
    const data = new FormData(e.target);
    const fullName = data.get("fullName");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Error: Password does not match!");
      return;
    }

    const newUser = {
      email,
      password,
      fullName,
    };
    const userInfo = await axiosInstance.post("/users", newUser);
    console.log(userInfo);
    e.target.reset();
    toggleEmailLoginModal && toggleEmailLoginModal();
  };
  const loginUser =async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    const userInfo = {
      email,
      password,
    };
    // console.log(userInfo);
    const user = await axiosInstance.put("/users", userInfo);
    console.log(user.data);
    e.target.reset();
    toggleEmailLoginModal && toggleEmailLoginModal();
  };
  return (
    <div>
      <p className="text-center text-red-500 text-sm">{error}</p>
      {loginPage || (
        <>
          <form onSubmit={createUser} className="space-y-3">
            <div className=" flex flex-col gap-1">
              <label
                htmlFor="fullName"
                id="fullName"
                className="text-sm md:text-base font-semibold text-slate-500"
              >
                Full Name
              </label>
              <input
                type="text"
                className="text-base text-slate-600 outline-none border rounded px-3 h-10"
                name="fullName"
                placeholder="Enter Full Name"
                required
              ></input>
            </div>
            <div className=" flex flex-col gap-1">
              <label
                htmlFor="email"
                id="email"
                className="text-sm md:text-base font-semibold text-slate-500"
              >
                Email
              </label>
              <input
                type="email"
                className="text-base text-slate-600 outline-none border rounded px-3 h-10"
                name="email"
                placeholder="Enter email"
                required
              ></input>
            </div>
            <div className=" flex flex-col gap-1 relative">
              <label
                htmlFor="password"
                className="text-sm md:text-base font-semibold text-slate-500"
              >
                Password
              </label>
              <input
                type={unHidePass ? "text" : "password"}
                id="password"
                className="text-base text-slate-600 outline-none border rounded px-3 h-10"
                name="password"
                placeholder="Password"
                required
              ></input>

              <div className={`absolute right-3 top-[37px] `}>
                {unHidePass ? (
                  <BsFillEyeFill
                    onClick={() => setUnHidePass(!unHidePass)}
                  ></BsFillEyeFill>
                ) : (
                  <BsFillEyeSlashFill
                    onClick={() => setUnHidePass(!unHidePass)}
                  ></BsFillEyeSlashFill>
                )}
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label
                htmlFor="confirmPassword"
                className="text-sm md:text-base font-semibold text-slate-500"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="text-base text-slate-600 outline-none border rounded px-3 h-10"
                placeholder="Confirm Password"
                required
              ></input>
            </div>
            <p className="text-center mt-2 text-sm text-slate-500">
              You have already an account. Please{" "}
              <button
                className="text-red-500 hover:underline"
                onClick={() => setLoginPage(!loginPage)}
              >
                Login
              </button>
            </p>
            <div className="flex w-full justify-center items-center pt-3">
              <button
                type="submit"
                className="px-4 py-1 text-sm md:text-base bg-blue-600 hover:bg-blue-500 text-white font-semibold duration-300 rounded"
              >
                Sign Up
              </button>
            </div>
          </form>
        </>
      )}
      {loginPage && (
        <>
          <form onSubmit={loginUser} className="space-y-3">
            <div className=" flex flex-col gap-1">
              <label
                htmlFor="email"
                id="email"
                className="text-sm md:text-base font-semibold text-slate-500"
              >
                Email
              </label>
              <input
                type="email"
                className="text-base text-slate-600 outline-none border rounded px-3 h-10"
                name="email"
                placeholder="Enter email"
                required
              ></input>
            </div>
            <div className=" flex flex-col gap-1 relative">
              <label
                htmlFor="password"
                className="text-sm md:text-base font-semibold text-slate-500"
              >
                Password
              </label>
              <input
                type={unHidePass ? "text" : "password"}
                id="password"
                className="text-base text-slate-600 outline-none border rounded px-3 h-10"
                name="password"
                placeholder="Password"
                required
              ></input>

              <div className={`absolute right-3 top-[37px] `}>
                {unHidePass ? (
                  <BsFillEyeFill
                    onClick={() => setUnHidePass(!unHidePass)}
                  ></BsFillEyeFill>
                ) : (
                  <BsFillEyeSlashFill
                    onClick={() => setUnHidePass(!unHidePass)}
                  ></BsFillEyeSlashFill>
                )}
              </div>
            </div>
            <p className="text-center mt-2 text-sm text-slate-500">
              You have no account. Please{" "}
              <button
                className="text-red-500 hover:underline"
                onClick={() => setLoginPage(!loginPage)}
              >
                Sign Up
              </button>
            </p>
            <div className="flex w-full justify-center items-center pt-3">
              <button
                type="submit"
                className="px-4 py-1 text-sm md:text-base bg-blue-600 hover:bg-blue-500 text-white font-semibold duration-300 rounded"
              >
                Login
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EmailLogin;
