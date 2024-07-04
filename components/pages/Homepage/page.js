import Navbar from "@/components/navbar";
import AboutUsSection from "@/components/pages/Homepage/sections/aboutUsSection";
import HeroSection from "@/components/pages/Homepage/sections/heroSection";
import ServiceSection from "@/components/pages/Homepage/sections/serviceSection";
import React from "react";
import Testimonials from "./sections/testimonials";
import CtaSection from "./sections/CTA";
import FooterSection from "../../footer";
import WhatWeDo from "./sections/WhatWeDo";
import WhatWeDoMobile from "./sections/WhatWeDoMobile";
const LazyLoadedComponent = React.lazy(() => import("./sections/WhatWeDo"));

const Homepage = () => {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <AboutUsSection />
        <LazyLoadedComponent />
        <WhatWeDoMobile />
        <Testimonials />
        <CtaSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Homepage;
