import React from "react";
import ImageTextCard from "../../components/ImageTextCard";

const bgImage = {
  backgroundImage: "url(/image/LocatinRoofers1.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const RoofersBoltonSection = () => {
  return (
    <section>
      <div
        className="font-[700] text-white lg:text-[48px] text-[32px] text-center py-12 sm:py-[170px] whitespace-nowrap mb-8"
        style={bgImage}
      >
        Roofers Bolton
      </div>
      <div className="sm:contain lg:pt-[109px] pb-4 sm:pb-8 lg:pb-[72px]">
        <ImageTextCard
          image="/image/LocatinRoofers2.png"
          title="Conservatory Roofs Bolton"
          subtitle="Conversion Rate Optimisation (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. This action can vary depending on your business goals and could include making a purchase, filling out a form, signing up for a newsletter, or downloading a resource. CRO involves understanding how users navigate your site, what actions they take, and what prevents them from completing your goals."
          subtitle2="Conversion Rate Optimisation (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. This action can vary depending on your business goals and could include making a purchase, filling out a form, signing up for a newsletter, or downloading a resource. CRO involves understanding how users navigate your site, what actions they take, and what prevents them from completing your goals."
          boxstyle="border-none lg:pl-[52px] lg:pr-[67px] lg:py-[15px] p-4 lg:w-[50%] "
          h4style="gap-4 text-[14px] tracking-[2.8px]"
          h2style="lg:mb-[38px] text-[#211F1E]"
          cn="lg:flex lg:mb-[58px] sm:block"
          imgstyle="lg:w-[50%]"
        />
        <ImageTextCard
          image="/image/LocatinRoofers2.png"
          title="Conservatory Roofs Bolton"
          subtitle="Conversion Rate Optimisation (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. This action can vary depending on your business goals and could include making a purchase, filling out a form, signing up for a newsletter, or downloading a resource. CRO involves understanding how users navigate your site, what actions they take, and what prevents them from completing your goals."
          subtitle2="Conversion Rate Optimisation (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. This action can vary depending on your business goals and could include making a purchase, filling out a form, signing up for a newsletter, or downloading a resource. CRO involves understanding how users navigate your site, what actions they take, and what prevents them from completing your goals."
          boxstyle="border-none lg:pl-[52px] lg:pr-[67px] lg:py-[15px] p-4 lg:w-[50%]"
          h4style="gap-4 text-[14px] tracking-[2.8px]"
          h2style="lg:mb-[38px] text-[#211F1E]"
          cn="lg:flex flex-row-reverse"
          imgstyle="lg:w-[50%]"
        />
      </div>
    </section>
  );
};

export default RoofersBoltonSection;
