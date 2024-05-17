import React from "react";
import TextScrollAnimation from "@/components/custom/textScrollAnimation";

export default function AboutUsSection({}) {
  const paragraph1 =
    "Blue Blocks is a family more than a company bound by the principles of mutual respect, integrity, collaboration and coordination. We are a group of passionate minds collectively seeking innovative and creative ways of integrating information technology into how we do things. Our tech experts are skilled and experienced in developing and implementing innovative and customizable business applications using a proven agile/scrum development process across heterogeneous Industries.";
  const paragraph2 = "";
  const paragraph3 = "";

  return (
    <div className=" h-[600px] flex items-center justify-center">
      <div className="w-[1100px]">
        {" "}
        <TextScrollAnimation paragraph={paragraph1} />
      </div>
    </div>
  );
}
