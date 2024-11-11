"use client"
import { usePathname } from "next/navigation";
import React from "react";

interface FooterItem {
  label: string;
  icon: React.ReactNode;
}

const FooterElement = ({ title, array }: { title?: string; array: any }) => {
  const pathname = usePathname();

  let margin = ""
  let text = ''
  let space = ""
  if (pathname === "/") {
    margin = "mb-6 lg:mb-[58px]";
  }else if(pathname === "/contact-us"){
    text = "text-[24.36px]"
    space = "space-y-[24.82px]"
  }

  return (
    <div className="">
      <h4 className={`font-[900] text-[#211F1E] ${margin}`}>{title}</h4>
      <ul className={`${space}`}>
        {array.map((item: FooterItem, index: number) => (
          <li
            key={index}
            className={`flex items-center gap-1 justify-start mb-2 lg:mb-4 font-[500] ${text}`}
          >
            {item.icon}
            <h5>{item.label}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterElement;
