import React from "react";
import PhonIcon from "../data/icon/PhonIcon";
import MailIcon from "../data/icon/MailIcon";

const topData = [
  {
    icon: <PhonIcon />,
    label: "0111 756 4973",
  },
  {
    icon: <PhonIcon />,
    label: "0111 826 4973",
  },
  {
    icon: <MailIcon />,
    label: "info@tho.com",
  },
];

const TopSection = () => {
  return (
    <div className="bg-primary  pt-[7px] pb-[10px] md:flex justify-center hidden">
      <ul className="md:flex  gap-[24px] justify-center" >
        {topData.map((item, index) => (
          <li key={index} className="flex items-center justify-start text-[18px] font-[600] text-white font-monts gap-[2px]">
            <div className="h-5 w-5">{item.icon}</div>
            <div className="mt-[-2.5px] whitespace-nowrap">{item.label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSection;
