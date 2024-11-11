import React from "react";
import AboutCard from "../../components/AboutCard";

const Customer = () => {
  return (
    <section className="pb-[72px]">
      <h2 className="text-[#2947A9] font-[700] contain py-4 lg:py-8">
        Customer & <br></br>Client Testimonials
      </h2>
      <div className="about-us-bg2">
        <div className="contain py-[50px] sm:flex justify-between gap-5 bg-[#2947a980]">
          <AboutCard
            title="Regards Ken C"
            subtitle="Once again thanks for an excellent job well done by your installation team Paul and Steve - It’s already the talk of the back gardens - I will certainly recommend your company to any enquirers."
          />
          <AboutCard
            title="Mrs Hulme"
            subtitle="Once again thanks for an excellent job well done by your installation team Paul and Steve - It’s already the talk of the back gardens - I will certainly recommend your company to any enquirers."
          />
          <AboutCard
            title="Regards Ken C"
            subtitle="Once again thanks for an excellent job well done by your installation team Paul and Steve - It’s already the talk of the back gardens - I will certainly recommend your company to any enquirers."
          />
        </div>
      </div>
    </section>
  );
};

export default Customer;
