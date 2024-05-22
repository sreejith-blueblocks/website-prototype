import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface DefaultSession {
    name: string;
    username: string;
    userId: number;
    password: string;
    email: string;
    phoneNumber: number;
    country: string;
    dateofBirth: string;
    message: string;
    jwtToken: string;
  }
}
