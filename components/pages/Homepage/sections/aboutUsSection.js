import React from "react";
import TextScrollAnimation from "@/components/custom/textScrollAnimation";

export default function AboutUsSection({}) {
  const paragraph =
    "Welcome to Blue Blocks, your premier destination for comprehensive IT solutions. We specialize in cutting-edge services from web apps to SEO. Let us be your partner in success, delivering top-notch software development and more.";

  return (
    <div className=" h-[500px] flex items-center justify-center">
      <div className="w-[1100px]">
        {" "}
        <TextScrollAnimation paragraph={paragraph} />
      </div>
    </div>
  );
}
