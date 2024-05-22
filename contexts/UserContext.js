"use client";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchJwt = async () => {
      const token = Cookies.get("token");

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
      console.error("Error decoding JWT payload:", error.message);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, parseJwt, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
