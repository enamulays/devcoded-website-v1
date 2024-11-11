"use client";
import React, { useState } from "react";
import FooterTopSvg from "../data/icon/FooterTopSvg";
import FooterTopPortion from "../element/FooterTopPortion";
import LogoIcon from "../data/icon/LogoIcon";
import FooterElement from "../element/FooterElement";
import { footerData, footerData1, footerData2 } from "../data/footerData";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  let footerTop = true
  if (pathname === "/services" || pathname === "/location" || pathname === "/blog") {
    footerTop = false;
  }
  return (
    <div className="">
      {footerTop && (
        <div className="bg-[#D9D9D9] relative">
          <FooterTopSvg />
          <FooterTopPortion />
        </div>
      )}
      <div className="contain pt-8 lg:pt-[72px] pb-[50px] lg:flex gap-[67.89px] justify-between">
        <div className="flex-[1] mb-7">
          <div className="lg:pt-[22px] pb-9">
            <LogoIcon />
          </div>
          <p className="text-[17px] font-[500] text-[#211F1E]">
            Solid Close is your premier transaction coordination specialist,
            adeptly managing the intricacies of various deals, from real estate
            to material assets. Our expert team ensures smooth closings, giving
            you the freedom and peace of mind to focus on what matters most.
          </p>
        </div>
        <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-4 md:gap-[91.85px] flex-[1.75]">
          <FooterElement title="Contact Details" array={footerData} />
          <FooterElement title="Our Services" array={footerData1} />
          <FooterElement title="Our Services" array={footerData2} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
