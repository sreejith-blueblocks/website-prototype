"use client";
import { useState } from "react";
import styles from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    setError("");
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_USER_BASE_URL}UserLogin`,
        {
          username: "user1",
          userId: 0,
          password: "user1",
          email: "string",
          dateofBirth: "2024-04-29T08:53:27.739Z",
          phoneNumber: "string",
          country: "string",
        }
      );
      console.log(response.data); 
      if (response.status === 200) {
        const expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + 30 * 60 * 1000); 

       
        document.cookie = `token=${
          response.data.jwtToken
        }; expires=${expirationTime.toUTCString()}; path=/`;

       
        router.push("/user");
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
            <h1 className={styles.formTitle}>Login</h1>
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
