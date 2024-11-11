import React from "react";
import AccordingFAQ from "../../muicomponent/AccordingFAQ";

const QuestionSection = () => {
  return (
    <div className="contain sm:pb-[44px]">
      <div className="text-[32px] sm:text-[36px] font-[800] mb-8 lg:mb-12 text-center">
        <span className="text-[#2947A9]">Frequently Asked</span> Questions
      </div>
      <div className="sm:px-8 lg:px-[120px]">
        <AccordingFAQ
          typography="Q: How do you ensure the security of my data?"
          title="Q: How do you ensure the security of my data?"
        />
        <AccordingFAQ
          typography="Q: How do you ensure the security of my data?"
          title="Q: How do you ensure the security of my data?"
        />
        <AccordingFAQ
          typography="Q: How do you ensure the security of my data?"
          title="Q: How do you ensure the security of my data?"
        />
        <AccordingFAQ
          typography="Q: How do you ensure the security of my data?"
          title="Q: How do you ensure the security of my data?"
        />
        <AccordingFAQ
          typography="Q: How do you ensure the security of my data?"
          title="Q: How do you ensure the security of my data?"
        />
      </div>
    </div>
  );
};

export default QuestionSection;
