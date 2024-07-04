import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import layer1 from "@/public/assets/Left.png";
import layer2 from "@/public/assets/Right.png";
import layer3 from "@/public/assets/Layer3.png";
import layer4 from "@/public/assets/Up.png";

const HeroAnimation = () => {
  return (
    <div className="h-[580px]  pt-16 bg-[#243E86] relative ">
      <motion.div
        initial={{ x: 0 }} // Initial opacity and x position
        animate={{
          x: -100,
        }}
        transition={{
          delay: 2,
          duration: 0.4,
          type: "spring",
          ease: "backInOut",
        }} // Fade in animation duration
        className="left-animation w-[300px] h-[200px]  absolute left-[160px] top-[200px] select-none hidden lg:block"
      >
        <motion.div
          initial={{ opacity: 0, x: 0 }} // Initial opacity and x position
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 2 }} // Fade in animation duration
          className="left-animation w-[300px] h-[200px] "
        >
          <Image
            alt=""
            src={layer1}
            width={1626}
            height={1408}
            className="w-[800px] h-auto"
          ></Image>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 0 }} // Initial opacity and x position
        animate={{
          x: 250,
        }}
        transition={{
          delay: 2,
          duration: 0.4,
          type: "spring",
          ease: "backInOut",
        }}
        className="w-[300px] h-[200px]  absolute right-[300px] top-[240px] select-none hidden lg:block"
      >
        <motion.div
          initial={{ opacity: 0, x: 0 }} // Initial opacity and x position
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 2 }} // Fade in animation duration
          className="w-[300px] h-[200px] "
        >
          <Image
            alt=""
            src={layer2}
            height={462}
            width={377}
            className="w-[462px]"
          ></Image>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 1, y: 0 }} // Initial opacity and x position
        animate={{
          opacity: 0,
          y: -250,
        }}
        transition={{
          delay: 2,
          duration: 0.4,
          type: "spring",
          ease: "backInOut",
        }}
        className="w-[300px] h-[200px] hidden lg:block  absolute top-[25px]  right-[50%] transform translate-x-[40%] select-none"
      >
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 2 }}
          className="w-[300px] h-[200px] "
        >
          <Image
            alt=""
            src={layer4}
            height={1000}
            width={727}
            className="w-[800px] h-auto"
          ></Image>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 1, y: 100 }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 2,
          duration: 0.4,
          type: "spring",
          ease: "backInOut",
        }}
        className="w-[300px] h-[200px] hidden lg:block  absolute bottom-[28px]  right-[66%] transform translate-x-[40%] select-none"
      >
        <motion.div
          initial={{ opacity: 0 }} // Initial opacity and x position
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 2, duration: 0.4 }}
          className="w-[1000px] h-auto"
        >
          <Image
            src={layer3}
            className="h-auto w-full"
            width={4068}
            height={1369}
          ></Image>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, fontSize: "0.5rem" }}
        animate={{ opacity: 1, fontSize: "3rem" }}
        transition={{
          delay: 3,
          duration: 0.4,
          type: "spring",
          ease: "backInOut",
        }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="font-bold text-white">Banner Content</h1>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
