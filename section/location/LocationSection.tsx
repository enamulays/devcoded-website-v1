import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

const LocationSection = () => {
  return (
    <div className="contain pb-[32px] sm:pb-[60px] sm:flex gap-5">
      <div className="sm:w-[50%]">
        <div className="text-[32px] lg:text-[36px] font-[600] text-black  mb-4 sm:mb-8">
          Direction
        </div>
        <div>
          <Image
            src="/image/LocationImage.png"
            width={610}
            height={376}
            alt="LocationImage"
            className="rounded-[10px] mb-8 h-[376px]"
          />
        </div>
        <h4 className="pb-4 sm:pb-8 text-black font-[500]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h4>
      </div>
      <div className="sm:w-[50%] mt-[16px] sm:mt-[68px]">
        <form action="#" className="space-y-6">
          <div className="text-[32px] lg:text-[36px] font-[500] text-black pb-1">
            Get in touch
          </div>
          <TextField fullWidth label="Enter your name" />
          <TextField fullWidth label="Enter a valid email" />
          <TextField
            fullWidth
            label="Enter a your massage"
            multiline
            rows={4}
          />
          <div className="flex justify-end">
            <button className="px-[42px] py-[12px] text-[18px] rounded-[25px] bg-[#FF5733] sm:mt-[78px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationSection;
