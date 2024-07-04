"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/assets/bb_logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

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
      className={`py-4 max-w-[1600px] px-[30px] lg:px-20 w-full fixed top-0 z-[9999] transition-all duration-300 ${
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
        <ul className="lg:flex space-x-2 lg:space-x-16 text-white font-medium hidden">
          <li>
            <a href="#" className="hover:text-gray-300 text-[16px]">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 text-[16px]">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 text-[16px]">
              Industries
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 text-[16px]">
              Contact Us
            </a>
          </li>
          <li>
            <Link href="/admin" className="hover:text-gray-300 text-[16px]">
              Dashboard
            </Link>
          </li>
        </ul>
        <div>
          <GiHamburgerMenu className="text-[40px] text-white" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
