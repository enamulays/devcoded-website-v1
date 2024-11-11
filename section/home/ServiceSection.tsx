import React from "react";
import HomeServiceCard from "../../components/HomeServiceCard";

const ServiceSection = () => {
  return (
    <section className="contain">
      <div className="mb-[32px]">
      <h2 className="text-primary font-[700] mb-6 lg:mb-[52px]">Our Services</h2>
      <div className="lg:px-[34px]">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-[120px] mb-8">
          <HomeServiceCard
            image="/image/HomeService1.png"
            title="Flat Roofing"
            content="North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters,"
            btn="Flat roofing"
          />
          <HomeServiceCard
            image="/image/HomeService2.png"
            title="New Roof"
            content="North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters,"
            btn="New roof"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-[120px]">
          <HomeServiceCard
            image="/image/HomeService3.png"
            title="Lead Work"
            content="North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters,"
            btn="Lead work"
          />
          <HomeServiceCard
            image="/image/HomeService4.png"
            title="Roof Repairs"
            content="North West Roofers offer a competitively priced, low maintenance, uPVC roofline installation including gutters,"
            btn="Roof repairs"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ServiceSection;
