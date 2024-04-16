import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";

export const metadata = {
  title: "Blue Blocks",
  description: "Blue Block home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center justify-center ">
        {children}
      </body>
    </html>
  );
}
