import React from "react";

const TradeBanner = () => {
    return (
        <div className="inner-container mx-auto py-10 flex items-center justify-center">
            <div className=" gap-3 w-full flex flex-wrap items-center justify-between">
                {/* Left Content */}
                <div className="text-white text-center md:text-left w-full max-w-lg">
                    <h2 className="text-2xl  md:text-3xl text-primary font-bold">
                        <span className="text-white">Trade Your Best and <br />
                            Enjoy </span> Hassle Free <span className="text-white"> &  </span><br />
                        Instant Withdrawals!
                    </h2>
                    <p className="text-sm mt-2 italic font-normal">
                        Your comfort is our top priority.
                    </p>
                    <button className="rounded-3xl border font-semibold border-primary bg-gradient-to-r from-[#096180] to-[#0a4280] text-sm shadow-lg text-white py-3 px-10 mt-8 hover:scale-105 transition-transform">
                        Ready to Start
                    </button>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src="/20-img1.webp"
                        alt="Rewards"
                        className="md:max-w-lg max-w-xs"
                    />
                </div>
            </div>
        </div>
    );
};

export default TradeBanner;
