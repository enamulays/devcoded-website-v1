import Image from "next/image";
import React from "react";
import AboutTitle from "../../element/AboutTitle";

const AboutUs = () => {
  return (
    <section className="about-us-bg">
      <h2 className="bg-[#eeeeddcc] text-center font-[700] text-[#2947A9] pb-[30px] pt-[31px]">
        About US
      </h2>
      <div className="bg-[#ffffffe6] pt-[48px] pb-1 lg:pb-[46px]">
        <div className="lg:flex mb-10 lg:mb-[106px] lg:contain">
          <div className="py-12 px-4 md:pl-8 md:pr-8 lg:pr-[117px] bg-primary flex-1 mb-8 lg:mb-0">
            <h2 className="font-[500] text-white mb-7">
              Over 30 years experience
            </h2>
            <p className="md:text-[20px] font-[400] text-white text-[16px] leading-6 lg:leading-[normal]">{`Over 30 years eDirect Roofing & Building Ltd offer a professional, friendly and reliable service and are specialists in conservatory tiled roofing, roof replacements, Firestone rubber roofing Conservatory conversions and rebuilds, thermally efficient replacement glazing, lean-too/carports and other home improvements. All designed and tested to withstand the harshest of weather conditions. We have completed 1000's of jobs in the Northwest and throughout the UK, with 100% customer satisfaction. All our work is insured and guaranteed. Our craftsmen are qualified, experienced and professional joiners, electricians, plumbers and finishers with over 40 years experience.`}</p>
          </div>
          <div className="flex flex-1 items-center">
            <Image
              src="/image/AboutUs-about.png"
              height={333}
              width={566}
              alt="AboutUs-about"
              className="lg:ml-[-60px] w-full"
            ></Image>
          </div>
        </div>
        <div className="md:flex justify-between gap-4 lg:gap-[67px] items-start contain">
          <AboutTitle
            title="Family Business"
            subtitle="We have over 40 years experience in the industry and you are getting service from a family not a sales force!"
          />
          <AboutTitle
            title="Competitive Prices"
            subtitle="Our commitment to our customers is to delivery the best possible prices, sometimes as much as 50% cheaper than our competitors using the same product."
          />
          <AboutTitle
            title="Market Leading Products"
            subtitle="We only use the best available materials, all with BBA approvals and lengthy guarantees."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
