"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion, spring } from "framer-motion";
import Image from "next/image";
import layer1 from "@/public/assets/Left.png";
import layer2 from "@/public/assets/Right.png";
import layer3 from "@/public/assets/Layer3.png";
import layer4 from "@/public/assets/Up.png";
import HeroAnimation from "@/components/custom/heroAnimation";

const HeroSection = () => {
  return <HeroAnimation />;
};

export default HeroSection;
