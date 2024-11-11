"use client";
import React, { useState } from "react";

const AppInput = ({
  names,
  placeholder,
  textareas,
  inputarea,
}: {
  names?: string;
  textareas?: boolean;
  placeholder?: any;
  inputarea?: boolean;
}) => {
  const [input, setInput] = useState<any>();

  return (
    <div className="flex flex-col md:gap-3">
      <label
        htmlFor={names}
        className="text-[18px] font-[600] leading-[normal] text-[#2947A9]"
      >
        {names}
      </label>
      {!inputarea && (
        <input
          className="px-[12px] md:px-[16px] pt-[11px] pb-[11px] border-[#2947A9] rounded-[10px] bg-transparent border-[1px] outline-none w-full mb-4 lg:mb-0 text-[14px] md:text-[24px] lg:text-[14px]"
          type={names}
          name={names}
          placeholder={placeholder}
          id={names}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      )}
      {textareas && (
        <textarea
          className="px-[12px] pt-[16px] pb-[17px] border-[#2947A9] rounded-[10px] bg-transparent border-[1px] outline-none w-full text-[14px] md:text-[24px] lg:text-[14px]"
          rows={5}
          name={names}
          placeholder={placeholder}
          id={names}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></textarea>
      )}
    </div>
  );
};

export default AppInput;
