import React from "react";

const IntroductoryBanner = () => {
    return (
        <div className="inner-container mx-auto border-b border-b-[#3e4353] text-white md:pt-32 pt-16 pb-10 ">
            <div className="max-w-xl">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                     <span className="text-[#4ac8f5]">Team Up With WinproFX As A Partner(IB)</span> {" "} 
                    <span className="text-white"></span> & Let's Make Things
                    Awesome Together!
                </h1>
                {/* Subtitle */}
                <p className="text-sm italic md:text-base mb-6">
                    WINPROFX Introducing Broker (IB) Program Rewards Individuals & Businesses for
                    Introducing New Clients.
                </p>
                {/* Description */}
                <p className=" text-sm mb-8 leading-relaxed">
                    Our experienced forex brokers will help visionary individuals and institutions
                    in setting up their own business and Introducing Broker. With our extensive
                    experience in the Forex Industry, you can take the trading experience of your
                    customers to the next level with an innovative platform, dedicated support, low
                    commissions, and precise order execution. Choose the Best Forex Trading Broker
                    Platform to enhance your trading success.
                </p>
                {/* Button */}
                <button className="rounded-3xl border font-semibold border-primary bg-gradient-to-r from-[#096180] to-[#0a4280] text-white py-2 px-6 hover:bg-[#37a6d8] transition">
                    Become a Partner
                </button>
            </div>
        </div>
    );
};

export default IntroductoryBanner;
