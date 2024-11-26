import React from "react";

const IntroducingBrokerBenefits = () => {
    return (
        <div className="inner-container mx-auto text-white py-12">
            <div className="">
                <h2 className="text-xl md:text-2xl font-semibold mb-3">
                    Benefits Of Becoming <br />
                    <span className="text-[#4ac8f5]">Introducing Broker</span> With WinproFX:
                </h2>

                <p className="max-w-3xl font-normal text-sm md:text-base mb-6 leading-relaxed">
                    Unlock a world of advantages by becoming an Introducing Broker with WinproFX.
                    Enjoy generous commission structures, industry recognition, continuous market
                    evolution, and the opportunity to empower traders with everyday rewards.
                </p>
                <p className="max-w-3xl font-normal text-sm md:text-base mb-8">
                    Join us in reshaping the future of trading partnerships with the{" "}
                    <span className="font-bold text-white">Best Broker Trading Platform.</span>
                </p>

                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <img className=" w-8 h-8" src="/new-icons/19.svg" alt="" />
                        <div>
                            <h4 className="text-base font-semibold">Multi-tier up to 5 Levels:</h4>
                            <p className="text-sm">
                                As an IB you could have up to 5 sub levels of referral traders.
                            </p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-center space-x-4">
                        <img className=" w-8 h-8" src="/new-icons/19.svg" alt="" />
                        <div>
                            <h4 className="text-base font-semibold">Easy to get Started:</h4>
                            <p className="text-sm">
                                No mountains of paperwork to sign or difficult IT implementation
                                required.
                            </p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex items-center space-x-4">
                        <img className=" w-8 h-8" src="/new-icons/19.svg" alt="" />
                        <div>
                            <h4 className="text-base font-semibold">Personalized Service:</h4>
                            <p className="text-sm">
                                A personal IB account manager would be assigned to support you.
                            </p>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="flex items-center space-x-4">
                        <img className=" w-8 h-8" src="/new-icons/19.svg" alt="" />
                        <div>
                            <h4 className="text-base font-semibold">Promotion Support:</h4>
                            <p className="text-sm">
                                Frequent promotional events for IB to attract and convert clients.
                            </p>
                        </div>
                    </div>
                    {/* Item 5 */}
                    <div className="flex items-center space-x-4">
                        <img className=" w-8 h-8" src="/new-icons/19.svg" alt="" />
                        <div>
                            <h4 className="text-base font-semibold">Fast Payout Settlement:</h4>
                            <p className="text-sm">
                                As an IB the payment should be fast.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroducingBrokerBenefits;
