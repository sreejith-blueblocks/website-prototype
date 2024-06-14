"use client";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const router = useRouter();

  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchJwt = async () => {
      const token = Cookies.get("token");
      setToken(token);

      if (!token) {
        console.log("Please Provide some token");
        return;
      }
      const payloadFromJwt = await parseJwt(token);

      setIsLoggedIn(true);
      setUser(payloadFromJwt);
    };
    fetchJwt();
  }, []);

  const parseJwt = async (token) => {
    const key = "ByYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM";
    try {
      if (!token) {
        throw new Error("Token is required.");
      }

      const decoded = jwt.verify(token, key);

      return decoded;
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        setUser();
        Cookies.remove("token");
        router.push("/login");
      }
      console.error("Error decoding JWT payload:", error.name);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, parseJwt, setIsLoggedIn, token }}
    >
      {children}
    </UserContext.Provider>
  );
}
