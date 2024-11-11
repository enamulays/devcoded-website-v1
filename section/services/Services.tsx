import React from "react";
import ImageTextCard from "../../components/ImageTextCard";

const Service = () => {
  return (
    <section className="contain">
      <h2 className="font-[700] text-[#211F1E] mb-8 lg:mb-[38px]">Services</h2>
      <div className="mb-[32px] lg:mb-[72px]">
        <ImageTextCard
          image="/image/service-img1.png"
          title="Firestone<br>Rubber Roofs"
          subtitle="EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide.. .EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide..."
          btntitle="Firestone rubber roofs"
          boxstyle="border-l sm:border-l-0 border-r  p-4 sm:w-[50%] "
          icon={true}
          cn="lg:mb-[58px] sm:flex mb-4 sm:mb-8"
          imgstyle="sm:w-[50%]"
        />
        <ImageTextCard
          image="/image/service-img2.png"
          title="Roof<br>Replacements"
          subtitle="EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide.. .EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide..."
          btntitle="Roof replacements"
          cn="flex-row-reverse lg:mb-[58px] sm:flex mb-4 sm:mb-8"
          boxstyle="border-r sm:border-r-0 border-l p-4 sm:w-[50%] "
          icon={true}
          imgstyle="sm:w-[50%]"
        />
        <ImageTextCard
          image="/image/service-img1.png"
          title="Conservatory<br>Ceiling Insulation"
          subtitle="EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide.. .EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide..."
          btntitle="Conservatory ceiling insulation"
          boxstyle="border-l sm:border-l-0 border-r p-4 sm:w-[50%] "
          icon={true}
          cn="lg:mb-[58px] sm:flex mb-4 sm:mb-8"
          imgstyle="sm:w-[50%]"
        />
        <ImageTextCard
          image="/image/service-img1.png"
          title="Roof<br>Replacements"
          subtitle="EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide.. .EPDM rubber roofing membranes have been successfully installed on hundreds of thousands of large commercial and industrial roofs worldwide..."
          btntitle="Roof replacements"
          cn="flex-row-reverse lg:mb-[58px] sm:flex mb-4 sm:mb-8"
          boxstyle="border-r sm:border-r-0  border-l p-4 sm:w-[50%] "
          icon={true}
          imgstyle="sm:w-[50%]"
        />
      </div>
    </section>
  );
};

export default Service;
