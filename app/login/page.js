"use client";
import { useContext, useState } from "react";
import styles from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserContext } from "@/contexts/UserContext";
import OtpField from "./(components)/optfield";

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

  const handleLogin = async (e) => {
    setError("");
    e.preventDefault();
    setLoading(true);
    Cookies.remove("token");
    setUser(null);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}User/UserLogin`,
        {
          name: "",
          username,
          userId: 0,
          password,
          email: "string",
          dateofBirth: "2024-04-29T08:53:27.739Z",
          phoneNumber: "string",
          country: "string",
        }
      );

      if (response?.status === 200) {
        setShowOtpModal(true);
        setLoading(false);
      } else {
        setLoading(false);
        setError("Invalid username or password");
      }
    } catch (error) {
      setLoading(false);
      setError("Invalid username or password");
    }
  };

  const handleOtpVerification = async () => {
    setLoading(true);
    setError("");
    try {
      const otpResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}User/VerifyOtp`,
        {
          Name: "",
          userId: 2,
          username,
          otp: otp.join(""),
          email: "",
          dateofBirth: "",
          PhoneNumber: "",
          country: "",
          password: "",
        }
      );

      if (otpResponse?.status === 200) {
        Cookies.set("token", otpResponse?.data?.jwtToken);
        const payload = await parseJwt(otpResponse?.data?.jwtToken);
        setIsLoggedIn(true);
        setUser(payload);
        setShowOtpModal(false);
        router.push("/user");
      } else {
        setLoading(false);
        setError("Invalid OTP");
      }
    } catch (error) {
      setLoading(false);
      setError("Invalid OTP");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.loginContainer} relative`}>
        <div className={styles.left}>
          <h1 className={styles.logo}>Blue Logo</h1>
          <p className={styles.tagline}>Welcome back! Log in to continue</p>
          <div className={styles.socialIcons}>
            <button className={`${styles.socialButton} ${styles.google}`}>
              <FcGoogle className={`${styles.icon} `} />
              Log in with Google
            </button>
            <button className={`${styles.socialButton} ${styles.facebook}`}>
              <FaSquareFacebook className={`${styles.icon} text-[#5050ff]`} />
              Log in with Facebook
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.formTitle}>User Login</h1>
          {showOtpModal === true ? (
            <>
              <div className={styles.modal}>
                <div className={styles.modalContent}>
                  <h2 className="text-center">Enter OTP</h2>
                  <OtpField
                    otp={otp}
                    setOtp={setOtp}
                    activeOTPIndex={activeOTPIndex}
                    setActiveOTPIndex={setActiveOTPIndex}
                    handleOtpVerification={handleOtpVerification}
                  />
                  {error && <p className="text-red-500 text-center">{error}</p>}
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <form onSubmit={handleLogin} className={styles.loginForm}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.loginInput}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.loginInput}
                />
                <p className="mb-2 text-red-500 text-center font-bold">
                  {error && error}
                </p>
                <button type="submit" className={styles.loginButton}>
                  Log In
                </button>
              </form>
            </>
          )}

          {!error && loading && (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
