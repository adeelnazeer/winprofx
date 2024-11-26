import React from "react";

const TradeBanner = () => {
    return (
        <div className="inner-container mx-auto py-10 flex items-center justify-center">
            <div className=" gap-3 w-full flex flex-wrap items-center justify-between">
                {/* Left Content */}
                <div className="text-white text-center md:text-left w-full max-w-lg">
                    <h2 className="text-2xl  md:text-3xl text-primary font-bold">
                        Trade Your Best and <br />
                        Enjoy Hassle Free & <br />
                        Instant Withdrawals!
                    </h2>
                    <p className="text-sm mt-2 italic font-normal">
                        Your comfort is our top priority.
                    </p>
                    <button className="bg-gradient-to-r mt-8 from-[#034a77] to-[#0c162b] text-sm shadow-lg text-white py-3 px-10 rounded-lg hover:scale-105 transition-transform">
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
