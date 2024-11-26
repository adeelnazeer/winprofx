import React from "react";

const WhatYouCanTrade = () => {
    return (
        <div className="inner-container mx-auto md:py-12 py-4 items-center">
            <div className="text-center  w-full">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left text-white">What You Can Trade?</h2>
                <p className="text-sm text-white mb-12 text-left">
                    We're here to help during market volatility with WinproFX. You can trade on <br />
                    major markets across 3 asset classes, including FX, Metals, and CFDs.
                </p>

                {/* Icons Section */}
                <div className="grid grid-cols-2 max-w-3xl mx-auto  md:grid-cols-3 gap-y-8 gap-6">
                    {/* Single Trade Option */}
                    <div className="flex flex-col border-r border-r-[#3e4353] items-center text-white">
                        <img
                            src="/new-icons/13.svg"
                            alt="Metals"
                            className="h-16 w-16 mb-1"
                        />
                        <p className="text-sm font-semibold">Metals</p>
                    </div>
                    <div className="flex flex-col md:border-r border-r-[#3e4353] items-center text-white">
                        <img
                            src="/new-icons/14.svg"
                            alt="Forex"
                            className="h-16 w-16 mb-1"
                        />
                        <p className="text-sm font-semibold">Forex</p>
                    </div>
                    <div className="flex border-r md:border-r-0 border-r-[#3e4353] flex-col items-center text-white">
                        <img
                            src="/new-icons/15.svg"
                            alt="Commodities"
                            className="h-16 w-16 mb-1"
                        />
                        <p className="text-sm font-semibold">Commodities</p>
                    </div>
                    <div className="flex flex-col md:border-r border-r-[#3e4353] items-center text-white">
                        <img
                            src="/new-icons/16.svg"
                            alt="Oil"
                            className="h-16 w-16 mb-1"
                        />
                        <p className="text-sm font-semibold">Oil</p>
                    </div>
                    <div className="flex flex-col border-r border-r-[#3e4353] items-center text-white">
                        <img
                            src="/new-icons/17.svg"
                            alt="Indices"
                            className="h-16 w-16 mb-1"
                        />
                        <p className="text-sm font-semibold">Indices</p>
                    </div>
                    <div className="flex flex-col items-center text-white">
                        <img
                            src="/new-icons/18.svg"
                            alt="Crypto"
                            className="h-16 w-16 mb-1"
                        />
                        <p className="text-sm font-semibold">Crypto</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatYouCanTrade;
