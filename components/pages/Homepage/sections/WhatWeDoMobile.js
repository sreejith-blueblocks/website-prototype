import Image from "next/image";
import React from "react";
import design from "@/public/assets/design.png";
import develop from "@/public/assets/develop.png";
import market from "@/public/assets/market.png";

const WhatWeDoMobile = () => {
  return (
    <div className=" bg-[#243E86] px-[30px] py-6 lg:hidden">
      <div className="container text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] text-white font-bold">Design</h1>
          <Image
            src={design}
            width={2368}
            height={2008}
            className=" max-w-[200px] lg:max-w-[550px] h-auto my-4"
          ></Image>
          <p className="text-[14px] my-5 text-justify">
            Our robust WEB/ GRAPHIC-DESIGN and WEB DEVELOPMENT skills and tools
            can completely customize interactive web solutions to Solution-based
            web applications. Easy to use Content Management System (CMS) to
            users willing to update websites on their own. The CMS is developed
            by us and is entirely customizable to client requirements.
            Ultra-modern responsive UX/ UI designs on both desktop & mobile
            devices for higher user engagement
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] text-white font-bold">Develop</h1>
          <Image
            src={develop}
            width={2368}
            height={2008}
            className=" max-w-[200px] lg:max-w-[550px] h-auto my-4"
          ></Image>
          <p className="text-[14px] my-5 text-justify">
            Our robust WEB/ GRAPHIC-DESIGN and WEB DEVELOPMENT skills and tools
            can completely customize interactive web solutions to Solution-based
            web applications. Easy to use Content Management System (CMS) to
            users willing to update websites on their own. The CMS is developed
            by us and is entirely customizable to client requirements.
            Ultra-modern responsive UX/ UI designs on both desktop & mobile
            devices for higher user engagement
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] text-white font-bold">Market</h1>
          <Image
            src={market}
            width={2368}
            height={2008}
            className=" max-w-[200px] lg:max-w-[550px] h-auto my-4"
          ></Image>
          <p className="text-[14px] my-5 text-justify">
            Our robust WEB/ GRAPHIC-DESIGN and WEB DEVELOPMENT skills and tools
            can completely customize interactive web solutions to Solution-based
            web applications. Easy to use Content Management System (CMS) to
            users willing to update websites on their own. The CMS is developed
            by us and is entirely customizable to client requirements.
            Ultra-modern responsive UX/ UI designs on both desktop & mobile
            devices for higher user engagement
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoMobile;
