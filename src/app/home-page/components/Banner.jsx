import React from "react";

const Banner = () => {
    return (
        <section className="inner-container mx-auto border-b border-b-[#3e4353] text-white pt-20 pb-10">
            <div className="flex flex-col lg:flex-row items-center justify-between  ">
                {/* Left Content */}
                <div className="max-w-lg text-center lg:text-left">
                    <h2 className="md:text-4xl text-2xl font-bold mb-4 text-primary leading-snug">
                        Your Path To Profitable <br /> Trading Starts Here
                    </h2>
                    <p className="text-lg mb-8">
                        WinproFX is a Globally Reputed Broker Offering Tightest Spreads, Lightning Fast Withdrawals, 300+ Tradable Instruments With Nanosecond Execution on Your Finger Tips.
                    </p>
                    <div className="flex flex-col gap-2 justify-center lg:justify-start">
                        <div>
                            <button className="bg-gradient-to-r min-w-52 from-[#034a77] to-[#0c162b] text-sm shadow-lg text-white py-3 px-10 rounded-lg hover:scale-105 transition-transform">
                                Open Account
                            </button>
                        </div>
                        <div>
                            <button className="bg-gradient-to-r min-w-52 from-[#034a77] to-[#0c162b] text-sm shadow-lg text-white py-3 px-10 rounded-lg hover:scale-105 transition-transform">
                                Join Telegram
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0">
                    <img
                        src="/home-banner.webp"
                        alt="Trading App"
                        className="md:w-72 w-52 lg:w-80 mx-auto lg:mx-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
