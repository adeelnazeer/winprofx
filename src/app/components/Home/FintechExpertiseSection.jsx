import React from "react";

const CallToAction = () => {
  return (
    <div className="inner-container mx-auto pb-16">
      <div className="bg-gradient-to-b flex-col md:flex-row gap-2  from-[#0d1821] to-[#162f40] rounded-2xl md:p-10 p-6 flex justify-between items-center">
        <div>
          <h2 className="md:text-3xl text-2xl font-semibold text-primary">Ready to Start?</h2>
          <p className="text-white mt-2">
            Trade with an <span className="font-bold text-white">Award Winning broker!</span>
          </p>
        </div>
        <button className="rounded-3xl border border-primary bg-gradient-to-r from-[#096180] to-[#0a4280] text-sm md:text-base text-white font-semibold py-2 px-6 transition-all">
          Open Live Account
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
