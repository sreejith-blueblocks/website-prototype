"use client";
import { useContext, useState } from "react";
import styles from "./login.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserContext } from "@/contexts/UserContext";
import logo from "@/public/assets/icon.png";
import googleLogo from "@/public/assets/googleLogo.png";
import facebookLogo from "@/public/assets/facebookLogo.png";
import appleLogo from "@/public/assets/appleLogo.png";
import xLogo from "@/public/assets/xLogo.png";
import Image from "next/image";
import { LuMailOpen } from "react-icons/lu";
import Link from "next/link";
import { BiSolidLockOpen, BiSolidLock } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showStageTwo, setShowStageTwo] = useState(false);
  const { setUser, parseJwt, setIsLoggedIn } = useContext(UserContext);
  const [tempUserId, setTempUserId] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const submitData = async (e) => {
  
    e.preventDefault();
    if (!passwordMatch) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}User/UserRegistration`,
        {
          username,
          email,
          password,
          name: "stringsd",
          dateofBirth: "2024-05-29",
          phoneNumber: "stringdd",
          country: "stringdd",
          otp: 0,
        }
      );

      if (response.data.success) {
        setUser(response.data.user);
        Cookies.set("token", response.data.token);
        setIsLoggedIn(true);
        router.push("/dashboard");
      } else {
        setError(response.data.message || "Registration failed");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setError();
      setLoading(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordMatch(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordMatch(password, e.target.value);
  };

  const checkPasswordMatch = (pass, confirmPass) => {
    setPasswordMatch(pass === confirmPass);
  };

  return (
    <div className={`${styles.mainContainer} h-fu`}>
      <div className={`w-[60%] bg-slate-400 h-full ${styles.loginImage}`}></div>
      <div className="w-[40%] min-h-[500px] ">
        <div className="h-full min-h-[500px] bg-[#30303025] text-white border-[#ffffff5d] border flex flex-col items-center rounded-lg w-[90%]">
          <div className="flex flex-row items-center gap-4">
            <span>
              <Image
                src={logo}
                alt="BB logo"
                className="min-w-[38px] max-w-[55px] h-auto"
                height={1252}
                width={384}
              />
            </span>
            <p className="text-[55px] font-bold text-white">Logo</p>
          </div>
          {!showStageTwo ? (
            <div className="w-full flex flex-col items-center">
              <p className="font-bold my-[20px] mb-[30px]">
                Register new user!
              </p>
              <div className="w-full px-20">
                <div className="relative border border-[#A2A2A233] rounded-lg w-full flex flex-row p-2 py-3">
                  <div className="p-2 px-2 border-r-[1px]">
                    <LuMailOpen className="text-[20px]" />
                  </div>
                  <div
                    className={`flex flex-col w-full px-3 ${styles.inputBox}`}
                  >
                    <span className="text-[12px] text-[#B3B3B3]">
                      Email Address
                    </span>
                    <input
                      type="text"
                      className="flex-1"
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="relative border border-[#A2A2A233] rounded-lg w-full flex flex-row p-2 py-3 my-4 mb-1">
                  <div className="p-2 px-2 border-r-[1px]">
                    <FaRegUser className="text-[20px]" />
                  </div>
                  <div
                    className={`flex flex-col w-full px-3 ${styles.inputBox}`}
                  >
                    <span className="text-[12px] text-[#B3B3B3]">Username</span>
                    <input
                      type="text"
                      className="flex-1"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  disabled={!username || !email}
                  className="w-full bg-blue-600 p-3 rounded-md font-semibold my-3 cursor-pointer text-center"
                  onClick={() => {
                    setShowStageTwo(true);
                  }}
                >
                  Next
                </button>
              </div>
              <div>
                <p className="text-[#B3B3B3] text-[12px]">
                  Already have an account? Please{" "}
                  <Link
                    href={"/login"}
                    className="text-white font-medium underline cursor-pointer"
                  >
                    Log In
                  </Link>
                </p>
              </div>
              <div className="w-full flex flex-row items-center justify-between gap-x-2 px-20 mt-[45px]">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#b3b3b300] to-[#B3B3B3]"></div>
                <div className="text-[#B3B3B3] text-[12px]">
                  Or continue with
                </div>
                <div className="h-[2px] flex-1 bg-gradient-to-l from-[#b3b3b300] to-[#B3B3B3]"></div>
              </div>
              <div className="flex flex-row justify-between gap-x-4 items-center my-10">
                <div className="max-w-[45px] min-w-[45px] bg-gradient-to-tl from-[#0057FFB2] to-[#072E78B2] p-[6px] cursor-pointer rounded-full">
                  <Image src={googleLogo} alt="google Logo" />
                </div>
                <div className="max-w-[45px] min-w-[45px] bg-gradient-to-tl from-[#0057FFB2] to-[#072E78B2] p-[6px] cursor-pointer rounded-full">
                  <Image src={facebookLogo} alt="facebook Logo" />
                </div>
                <div className="max-w-[45px] min-w-[45px] bg-gradient-to-tl from-[#0057FFB2] to-[#072E78B2] p-[6px] cursor-pointer rounded-full">
                  <Image src={appleLogo} alt="apple Logo" />
                </div>
                <div className="max-w-[45px] min-w-[45px] bg-gradient-to-tl from-[#0057FFB2] to-[#072E78B2] p-[6px] cursor-pointer rounded-full">
                  <Image src={xLogo} alt="x Logo" />
                </div>
              </div>
              {error && (
                <p className="text-red-500 text-center font-bold mb-2">
                  {error}
                </p>
              )}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              <div className="flex flex-row items-center justify-center w-full px-20 my-4">
                <BsArrowLeft
                  className=""
                  onClick={() => {
                    setShowStageTwo(false);
                    setOtp(new Array(4).fill(""));
                  }}
                />
                <p className="w-full text-center font-semibold ">
                  Hey! {username}
                </p>
              </div>
              <form className="w-full px-20 select-none" onSubmit={submitData}>
                <div className="relative border border-[#A2A2A233] rounded-lg w-full flex flex-row p-2 py-3 my-4 mb-1">
                  <div className="p-2 px-2 border-r-[1px]">
                    <BiSolidLock className="text-[20px]" />
                  </div>
                  <div
                    className={`flex flex-col w-full px-3 ${styles.inputBox}`}
                  >
                    <span className="text-[12px] text-[#B3B3B3]">
                      Create a password
                    </span>
                    <input
                      type="password"
                      className="flex-1"
                      placeholder="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <div className="relative border border-[#A2A2A233] rounded-lg w-full flex flex-row p-2 py-3 my-4 mb-1">
                  <div className="p-2 px-2 border-r-[1px]">
                    {showPassword ? (
                      <BiSolidLockOpen className="text-[20px]" />
                    ) : (
                      <BiSolidLock className="text-[20px]" />
                    )}
                  </div>
                  <div
                    className={`flex flex-col w-full px-3 ${styles.inputBox}`}
                  >
                    <span className="text-[12px] text-[#B3B3B3]">
                      Confirm Password
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="flex-1"
                      placeholder="confirm password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                  </div>
                  <div
                    className="p-2 px-2 cursor-pointer"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <IoEyeSharp className="text-[20px]" />
                    ) : (
                      <FaEyeSlash className="text-[20px]" />
                    )}
                  </div>
                </div>

                {!passwordMatch && (
                  <div className="text-red-500 text-[12px]">
                    Passwords do not match
                  </div>
                )}

                <button
                  disabled={!passwordMatch}
                  className="w-full bg-blue-600 p-3 rounded-md font-semibold my-3 cursor-pointer"
                >
                  Next
                </button>
              </form>

              {error && (
                <p className="text-red-500 text-center font-bold mb-2">
                  {error}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
