import React from "react";
import Form from "../../form/Form";

const HeroSection = () => {
  return (
    <section className="hero-bg ">
      <div className="contain lg:flex justify-between items-center gap-[21px] md:py-[78px] py-[30px]">
        <div className="flex-1 text-center lg:text-left">
          <h1 className=" text-black font-[700] leading-[normal] opacity-70 mb-1">
            ROOFERS IN
          </h1>
          <h1 className=" text-[#FF5733] font-[700] leading-[normal] opacity-70">MANCHESTER &</h1>
          <h1 className=" text-[#FF5733] text-[32px] md:text-[54px] lg:text-[64px] font-[700] leading-[normal] opacity-70 mb-[14px] md:mb-[20px] lg:mb-[34px]  whitespace-nowrap">NORTH CHESHIRE</h1>
          <p className="font-[500] text-[16px] md:text-[34px]  leading-[normal] mb-10 text-left">
            At North West Roofers Ltd we specialise in all aspects of roofing
            including new roofs, roof repairs, flat roofing, guttering & roof
            drone surveys.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default HeroSection;
