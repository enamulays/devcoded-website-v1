import React from "react";
import HomeTitle from "../../element/HomeTitle";
import Image from "next/image";

const BuildingSection = () => {
  return (
    <div className="my-[43px] border-t-[1px] border-[#9E9E9E] contain">
      <div className="lg:flex gap-[23px] items-center sm:pt-8">
        <div className="w-full">
          <HomeTitle
            title="Manchester No.1 Roofing Specialist"
            content1="North West Roofers Ltd offer all aspects of quality roofing services you can rely on throughout Greater Manchester and North Cheshire."
            content2="Our reputation matters to us. We are Members of the Confederation of Roofing Contractors and Firestone Rubber Roofing-approved contractors. Our work is guaranteed, and we have public liability insurance for up to £1million."
          />
          <HomeTitle
            title="Quality Roofing Services You Can Trust!"
            content1="Our reputation matters to us. We are Members of the Confederation of Roofing Contractors and Firestone Rubber Roofing-approved contractors. Our work is guaranteed, and we have public liability insurance for up to £1million.."
            content2={`Call <span class="text-[#ff5733] font-[700]">0111 756 4973</span>  or <span class="text-[#ff5733] font-[700]"> 0111 826 4973</span> or <span class="text-[#ff5733] font-[700]">email info@tho.com</span> for a free, no-obligation quote. Also ask us about our OAP discount.`}
          />
        </div>
        <div className="w-full">
          <Image
            src="/image/HomSection-Building.png"
            alt="HomSection-Building"
            height={452}
            width={790}
            className="block lg:hidden"
          />
          <Image
            src="/image/HomSection-Building.png"
            alt="HomSection-Building"
            height={452}
            width={610}
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingSection;
