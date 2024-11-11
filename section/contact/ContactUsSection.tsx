import React from "react";
import Form from "../../form/Form";
import FooterElement from "../../element/FooterElement";
import { footerData } from "../../data/footerData";

const ContactUsSection = () => {
  return (
    <div className="contain pb-8 lg:pb-8">
      <div className="font-[700] text-[32px] sm:text-[40px] text-[#2947A9] text-center lg:pt-[38px] lg:pb-20 py-8">
        Contact Us
      </div>
      <div className="sm:flex gap-[21px]">
        <div className="sm:w-[50%] mb-8 sm:mb-8">
          <h2 className="text-[32px] font-[700] text-[#211F1E] pb-8">
            Contact Details
          </h2>
          <h4 className="text-[#211F1E] font-[600] mb-8">
            Please fill out and submit the contact form
            <br />
            below and we will get back to you as soon as we can.
          </h4>
          <FooterElement array={footerData} />
        </div>
        <div className="lg:pt-[64px] sm:w-[50%]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
