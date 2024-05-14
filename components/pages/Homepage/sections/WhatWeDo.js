"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import design from "@/public/assets/design.png";
import develop from "@/public/assets/develop.png";
import market from "@/public/assets/market.png";
import backgroundEllipse from "@/public/assets/backgroundEllipse.png";
import styles from "./style.module.scss";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhatWeDo() {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex flex-col bg-[#243E86]">
      <div className="overflow-hidden ">
        <div
          id="skills"
          ref={scroller}
          className=" flex overflow-x-hidden bg-[#243E86]  w-[400vw] m-0   relative h-screen text-white"
        >
          <section
            ref={skills}
            className="skill-set px-20 w-screen h-full  ns-horizontal-section__item flex items-center z-50  flex-row justify-between py-[60px]  "
          >
            <div className="flex-1 max-w-[478px]">
              <div className="relative  h-[250px]  w-full">
                <h1 className=" absolute left-0 bottom-0 text-white  z-[500] leading-tight text-[128px] font-[900]">
                  Design
                </h1>
                <h1
                  className={`absolute text-[300px] left-0 -bottom-5 z-[499] leading-tight h-full   ${styles.gradientText}`}
                >
                  Design
                </h1>
              </div>
              <p className="text-[12px] text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                contains Lorem Ipsum.
              </p>
              <p className="my-2 font-bold">Learn more</p>
            </div>
            <div className="flex-1 flex flex-row items-center justify-end ">
              <Image
                src={design}
                width={2368}
                height={2008}
                className="max-w-[550px] h-auto"
              ></Image>
            </div>
          </section>
          <section
            ref={skills}
            className="skill-set px-20 w-screen h-full  ns-horizontal-section__item flex items-center z-50  flex-row justify-between  py-[50px]"
          >
            <div className="flex-1 flex flex-row items-end justify-start ">
              <Image
                src={design}
                width={2368}
                height={2008}
                className="max-w-[550px] h-auto z-[999]"
              ></Image>
            </div>
            <div className="flex-1 z-[995] max-w-[478px]">
              <div className="relative  h-[250px]  w-full">
                <h1 className=" absolute left-0 bottom-0 text-white  z-[500] leading-tight text-[128px] font-[900]">
                  Develop
                </h1>
                <h1
                  className={`absolute text-[300px] right-0 -bottom-5 z-[499] leading-tight h-full   ${styles.gradientText}`}
                >
                  Develop
                </h1>
              </div>

              <p className="text-[12px] text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                contains Lorem Ipsum.
              </p>
              <p className="my-2 font-bold">Learn more</p>
            </div>
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full  ns-horizontal-section__item flex items-center z-50  flex-row justify-between  py-[50px]"
          >
            <div className="flex-1  max-w-[478px]">
              <div className="relative  h-[250px]  w-full">
                <h1 className=" absolute left-0 bottom-0 text-white  z-[500] leading-tight text-[128px] font-[900]">
                  Market
                </h1>
                <h1
                  className={`absolute text-[300px] left-0 -bottom-10 z-[499] leading-tight h-full   ${styles.gradientText}`}
                >
                  Market
                </h1>
              </div>
              <p className="text-[12px] text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                contains Lorem Ipsum.
              </p>
              <p className="my-2 font-bold">Learn more</p>
            </div>
            <div className="flex-1 flex items-center justify-end ">
              <div className="max-w-[550px]  flex-1 ">
                <Image
                  src={design}
                  width={2368}
                  height={2008}
                  className="max-w-[550px] w-full h-auto z-[995]"
                ></Image>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
