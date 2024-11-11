import React from "react";
import RightArrowIcon from "../data/icon/RightArrowIcon";

interface TProps {
  title: string;
  subtitle: string;
  subtitle2?: string;
  btntitle?: string;
  cn?: string;
  boxstyle?: string;
  icon?: boolean;
  h2style?: string;
  h4style?: string;
}

const TextTitle = ({
  title,
  subtitle,
  subtitle2,
  btntitle,
  boxstyle,
  icon,
  h2style,
  h4style,
}: TProps) => {
  return (
    <div
      className={`border-[#2947A9] sm:border-t border-b sm:p-8 lg:py-[33px] lg:pl-[72px] lg:pr-[104px] ${boxstyle}`}
    >
      <h2
        className={`text-[#2947A9] font-[700] mb-4 sm:mb-8 ${h2style}`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <h4
        className={`text-[#2947A9] font-[400] mb-4 sm:mb-8 flex flex-col ${h4style}`}
      >
        <div>{subtitle}</div>
        <div>{subtitle2}</div>
      </h4>
      <div className="flex text-[#FF5733] font-[400] gap-3">
        <h4>{btntitle}</h4>
        {icon ? <RightArrowIcon strok="#FF5733" /> : ""}
      </div>
    </div>
  );
};

export default TextTitle;
