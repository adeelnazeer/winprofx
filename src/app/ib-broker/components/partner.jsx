import React from "react";
import { FaUserTie, FaLink, FaDollarSign } from "react-icons/fa";

const PartnerStepper = () => {
    return (
        <div className="inner-container mx-auto text-white pb-12">
            <div className="bg-gradient-to-b  from-[#162f40] to-[#0d1821] rounded-2xl md:p-8 p-4 shadow-lg">
                {/* Title Section */}

                <h2 className="text-xl md:text-2xl font-semibold mb-3">
                    Become A <span className="text-primary">Winprofx Partner</span> <br /> & Start
                    Earning Today
                </h2>
                <p className="text-sm md:text-base text-left mb-10">
                    Embark on a lucrative journey by becoming a WinproFX Partner and kickstart your
                    earnings today. Join our dynamic network, harness rewarding opportunities, and
                    pave the way for financial success together.
                </p>

                <div className="flex items-center gap-4 md:gap-1 flex-col md:flex-row md:w-11/12 w-full mx-auto justify-between">
                    <div className="flex flex-col items-center">
                        <div className="   mb-4">
                            <img className="w-14" src="/new-icons/ib-icon-08.svg" alt="mj" />
                        </div>
                        <h4 className="font-bold text-sm  text-center">
                            <span className=" font-normal">Apply to become an </span> <br />
                            <span className="text-white">Introducing Broker</span>
                        </h4>
                    </div>

                    <div className="flex-1 hidden md:block h-[1px] mb-6 bg-primary mx-4"></div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="  mb-4">
                            <img className="w-14" src="/new-icons/ib-icon-09.svg" alt="mj" />
                        </div>
                        <h4 className="font-bold text-sm text-gray-200 text-center">
                            <span className=" font-normal">Attract clients by <br />
                                sharing your</span> <span className="text-white">Referral Link</span>
                        </h4>
                    </div>

                    {/* Divider */}
                    <div className="flex-1 hidden md:block h-[1px] mb-6 bg-primary mx-4"></div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className=" rounded-full mb-4">
                            <img className="w-14" src="/new-icons/ib-icon-10.svg" alt="mj" />
                        </div>
                        <h4 className="font-bold text-sm text-gray-200 text-center">
                            <span className=" font-normal"> Receive Daily </span> <br />
                            <span className="text-white">Commission Payouts</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerStepper;
