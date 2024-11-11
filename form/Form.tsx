"use client";
import { usePathname } from "next/navigation";
import Button from "../element/Button";
import AppInput from "./AppInput";

const Form = () => {
  const pathname = usePathname();
  console.log(pathname);

  let shadow = "";
  let padding = "";
  let title 
  let width = ""
  if (pathname === "/") {
    shadow = "shadow-[-1px_-1px_4px_0px_#00000040]";
    padding = 'p-[20px] md:px-[50px] md:py-[38px]';
    width = "lg:max-w-[610px]";
    title = true;
  }

  return (
    <div
      className={`${width} flex1 bg-white rounded-[20px] ${shadow} ${padding}`}
    >
      {
        title ? (<h1 className="text-[24px] md:text-[32px] text-[#2947A9] font-[700] leading-[normal] text-center mb-8">
          Request A FREE Quote
        </h1>) : ""
      }
      <form>
        <div className="lg:grid grid-cols-[1fr_1fr] block gap-[28px] mb-[18px] md:mb-0">
          <AppInput names="Name" placeholder="Your name" />
          <AppInput names="Contract Number" placeholder="Your number" />
          <AppInput names="Email" placeholder="Email" />
          <AppInput names="Post Code" placeholder="Code" />
        </div>
        <AppInput
          names="Messege"
          placeholder="Type your messege"
          textareas={true}
          inputarea={true}
        />
        <Button className="mt-[24px] md:mt-[38px] w-full py-[19px] text-[20px] font-[600]">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
