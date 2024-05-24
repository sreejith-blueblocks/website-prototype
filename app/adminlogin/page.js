"use client";
import { useContext, useState } from "react";
import styles from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserContext } from "@/contexts/UserContext";
import jwt from "jsonwebtoken";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser, parseJwt, user, setIsLoggedIn } = useContext(UserContext);

  const handleLogin = async (e) => {
    setError("");
    e.preventDefault();
    setLoading(true);
    Cookies.remove("token");
    setUser(null);
    try {
      const response = await axios.post(
        // `${process.env.NEXT_PUBLIC_USER_BASE_URL}UserLogin`,
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}Admin/AdminLogin`,
        {
          username: username,
          userId: 0,
          password: password,
          email: "string",
          dateofBirth: "2024-04-29T08:53:27.739Z",
          phoneNumber: "string",
          country: "string",
          location: "string",
        }
      );

      if (response?.status === 200) {
        setUser(null);
        Cookies.set("token", response?.data?.jwtToken);
        // parseJwt(response?.data?.jwtToken);
        const payload = await parseJwt(response?.data?.jwtToken);
        setIsLoggedIn(true);

        setUser(payload);
        router.push("/admin");
      } else {
        setLoading(false);
        setError("Invalid username or password");
      }
    } catch (error) {
      setLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
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
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <h1 className={styles.formTitle}>Admin Login</h1>
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
