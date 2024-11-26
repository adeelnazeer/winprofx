import React from "react";

const TradeToWinBanner = () => {
    return (
        <div className="inner-container mx-auto py-12 flex justify-center items-center">
            <div className="relative grid md:grid-cols-3 grid-cols-1 bg-gradient-to-b from-[#034a77] via-[#0a2642] to-[#0d1428] text-white rounded-2xl items-center justify-between w-full">
                {/* Left Content */}
                <div className=" md:col-span-2  md:p-8 px-4 py-4  w-full text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Trade to <span className="text-primary">WIN</span>
                    </h2>
                    <h3 className="text-xl font-medium"> <span className="gray-text">Trade more and </span> win GUARANTED prizes.<br/>
                    The more you trade, the better the prize.
                    </h3>
                    <p className="text-sm mt-2 italic">Promotion Dates: 1st December 2024 to 31st Dec 2024</p>
                    <button className="bg-gradient-to-r mt-6 from-[#034a77] to-[#0c162b] text-white py-3 px-8 rounded-lg hover:shadow-lg transition-transform">
                        Learn More
                    </button>
                </div>

                {/* Right 3D Text */}
                <div className=" w-full md:-mb-12 flex justify-center mt-6 md:mt-0">
                    <img
                        src="/trade-banner-removebg-preview.png"
                        alt="20% Bonus Graphic"
                        className="w-3/5 md:w-4/5 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default TradeToWinBanner;
