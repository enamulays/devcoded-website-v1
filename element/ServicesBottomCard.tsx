import React from "react";

interface SProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}
const ServicesBottomCard = ({ icon, title, subtitle }: SProps) => {
  return (
    <div className="p-4 sm:p-8 sm:px-[47px] lg:pb-[34px] lg:pt-[33px] rounded-[20px] border-[#2947A9] border-[1px] text-[#FF5733] mb-5 sm:mb-0">
      <div className="mb-6 font-[500] flex justify-center">{icon}</div>
      <h3 className="mb-2 font-[400] text-center">{title}</h3>
      <h5>{subtitle}</h5>
    </div>
  );
};

export default ServicesBottomCard;
