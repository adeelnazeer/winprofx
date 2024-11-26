"use client"
import React, { useState } from "react";

const ProfitCalculator = () => {
    const [clientCount, setClientCount] = useState(1);
    const [profit, setProfit] = useState(130); // Example calculation based on the slider value

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setClientCount(value);
        setProfit(value * 130); // Example formula: $130 per client
    };

    return (
        <div className="inner-container mx-auto text-white md:py-16 py-8">
            {/* <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center"> */}
            {/* Left Section */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
                How Much You Can Earn? <br />
                <span className="text-[#4ac8f5]">Calculate your profit</span>
            </h2>
            <div className=" grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-sm md:text-base leading-relaxed">
                        This advanced commission calculator operates on the basis of Introducing
                        Brokers' client count and their trading volume in lots, providing an
                        accurate reflection of earned commissions.
                    </p>
                </div>
                <div className="text-right">
                    <h4 className="text-lg font-semibold">How much you gain</h4>
                    <p className="text-4xl text-primary  font-bold">${profit}</p>
                    <p className="text-sm text-primary font-bold">Per month</p>
                </div>
            </div>
            <div className="w-full mt-6">
                <div className="flex justify-between text-sm mb-2">
                    <button className="bg-gradient-to-r  from-[#034a77] to-[#0c162b] text-sm shadow-lg text-white py-1.5 px-10 rounded-lg hover:scale-105 transition-transform">
                        {clientCount} Client{clientCount > 1 ? "s" : ""}
                    </button>
                </div>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={clientCount}
                    onChange={handleSliderChange}
                    className="w-full h-[5px] bg-white rounded-lg appearance-none cursor-pointer"
                    style={{
                        background: `linear-gradient(to right, #4ac8f5 ${(clientCount / 100) * 100
                            }%, #fff ${(clientCount / 100) * 100}%)`,
                    }}
                />
            </div>
            {/* </div> */}
        </div>
    );
};

export default ProfitCalculator;
