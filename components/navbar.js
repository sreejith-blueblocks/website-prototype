"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/assets/bb_logo.png";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.1 }}
      className={`py-4 max-w-[1600px] px-20 w-full fixed top-0 z-10 transition-all duration-300 ${
        scrolled ? "bg-gray-800" : "bg-transparent text"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-lg text-white">
          <Image
            src={logo}
            className="w-[230px] h-auto"
            height={1252}
            width={384}
          ></Image>
        </span>
        <ul className="flex space-x-16 text-white font-medium">
          <li>
            <a href="#" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Industries
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
          <li>
            <Link href="/dashboardTwo" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
