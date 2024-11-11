import React from "react";
import StartsIcon from "../data/icon/StartsIcon";

const AboutCard = ({title,subtitle}:{title:string, subtitle:string}) => {
  return (
    <div className="px-5 lg:px-[43px] py-6 lg:py-0 lg:pt-[81px] lg:pb-[82.67px] bg-white rounded-[10px] mb-4 sm:mb-0">
      <h3 className="font-[500] text-black sm-[38px]">{title}</h3>
      <h5 className="text-[#2947A9] font-[400] mb-[38px]">{subtitle}</h5>
      <div className="flex gap-[7.34px]">
        <StartsIcon />
        <div>{`(620 reviews)`}</div>
      </div>
    </div>
  );
};

export default AboutCard;
