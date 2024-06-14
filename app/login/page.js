"use client";
import { useContext, useState } from "react";
import styles from "./login.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserContext } from "@/contexts/UserContext";
import OtpField from "./(components)/optfield";
import logo from "@/public/assets/icon.png";
import googleLogo from "@/public/assets/googleLogo.png";
import facebookLogo from "@/public/assets/facebookLogo.png";
import appleLogo from "@/public/assets/appleLogo.png";
import xLogo from "@/public/assets/xLogo.png";
import Image from "next/image";
import { LuMailOpen } from "react-icons/lu";
import Link from "next/link";
import { BiSolidLockOpen, BiSolidLock } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const { setUser, parseJwt, setIsLoggedIn } = useContext(UserContext);
  const [tempUserId, setTempUserId] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    Cookies.remove("token");
    setUser(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}User/UserLogin`,
        {
          name: "sdfs",
          username,
          userId: 0,
          password,
          email: "user@example.com",
          dateofBirth: "2024-04-29T08:53:27.739Z",
          phoneNumber: "string",
          country: "string",
          parentReference_Number: "string",
        }
      );

      if (response?.status === 200) {
        setTempUserId(response.data.userId);
        setShowOtpModal(true);
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async () => {
    setLoading(true);
    setError("");

    try {
      const otpAsNumber = parseInt(otp.join(""), 10);

      const otpResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}User/VerifyOtp`,
        {
          Name: "string",
          userId: tempUserId,
          username,
          otp: otpAsNumber,
          email: "email@email.com",
          dateofBirth: "",
          PhoneNumber: "",
          country: "",
          password: "sdfs",
          ParentReference_Number: "string",
        }
      );

      if (otpResponse?.status === 200) {
        Cookies.set("token", otpResponse.data.jwtToken);
        const payload = await parseJwt(otpResponse.data.jwtToken);
        setIsLoggedIn(true);
        setUser(payload);
        router.push("/user");
      } else {
        setError("Invalid OTP");
      }
    } catch (error) {
      setError("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.mainContainer} h-fu`}>
      <div
        className={`w-[60%] bg-slate-400 h-full  ${styles.loginImage}`}
      ></div>
      <div className="w-[40%] min-h-[500px] ">
        <div className="h-full min-h-[500px] relative bg-[#30303025] text-white border-[#ffffff5d] border flex flex-col items-center rounded-lg w-[90%]">
          {loading && (
            <div className="w-full  absolute h-full z-[25] flex items-center justify-center bg-[#ffffff49]">
              <div className={`${styles.loadingSpinner}`}></div>
            </div>
          )}
          <div className="flex flex-row items-center gap-4 z-[24]">
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
          {!showOtpModal ? (
            <div className="w-full flex flex-col items-center">
              <p className="font-bold my-[20px] mb-[30px]">Welcome back!</p>
              <form className="w-full px-20" onSubmit={handleLogin}>
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
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                    <span className="text-[12px] text-[#B3B3B3]">Password</span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="flex-1"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                <div className="w-full flex flex-row justify-between items-center text-[#B3B3B3]">
                  <div>
                    <label className={`${styles.customCheckbox} text-[12px]`}>
                      <input type="checkbox" />
                      <span
                        className={`${styles.checkmark} select-none`}
                      ></span>
                      Remember me
                    </label>
                  </div>
                  <div>
                    <Link href={""} className="text-[12px] select-none">
                      Forgot Password
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 p-3 rounded-md font-semibold my-3 cursor-pointer"
                >
                  Log In
                </button>
              </form>
              <div>
                <p className="text-[#B3B3B3] text-[12px]">
                  Doesn’t have an account? Please{" "}
                  <Link
                    href={"/register"}
                    className="text-white font-medium underline"
                  >
                    Register
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
            <OtpField
              otp={otp}
              setOtp={setOtp}
              activeOTPIndex={activeOTPIndex}
              setActiveOTPIndex={setActiveOTPIndex}
              handleOtpVerification={handleOtpVerification}
              loading={loading}
              error={error}
              setShowOtpModal={setShowOtpModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}
