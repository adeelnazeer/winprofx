import React from "react";

const CallToAction = () => {
  return (
    <div className="inner-container mx-auto pb-16">
      <div className="bg-gradient-to-b flex-col md:flex-row gap-2  from-[#041C32] to-[#073B5C] rounded-2xl md:p-10 p-6 flex justify-between items-center shadow-lg">
        <div>
          <h2 className="md:text-3xl text-2xl font-semibold text-primary">Ready to Start?</h2>
          <p className="text-white mt-2">
            Trade with an <span className="font-bold text-white">Award Winning broker!</span>
          </p>
        </div>
        <button className="bg-[#4BC9F0] text-sm md:text-base text-[#041C32] font-semibold py-2 px-6 rounded-md hover:bg-[#37B1DA] transition-all">
          Open Live Account
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
