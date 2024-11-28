import React from "react";

const ProgramDetails = () => {
    return (
        <section className="inner-container mx-auto  text-white pb-12 px-4">
            {/* Program Period & Eligibility Section */}
            <div className="bg-gradient-to-b  to-[#162f40] from-[#0d1821] p-8 rounded-2xl">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                        Program <span className=" text-primary"> Period </span> & <span className=" text-primary">Eligibility:</span>
                    </h2>
                    <p className="  italic mb-6">
                        Get started now and make the most of your trades.
                    </p>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Active Dates:</strong> <span className=" font-extralight gray-text"> December 1, 2024 – December 31,
                                    2024</span>
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Trading Timeline:</strong> <span className=" font-extralight gray-text"> You have 30 days from your
                                    start date to reach your target volume. </span>
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Who Can Join:</strong>  <span className=" font-extralight gray-text">Exclusively for retail clients.
                                    IBs are excluded. </span>
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Entry Criteria:</strong> <span className=" font-extralight gray-text"> One entry per participant per
                                    program. </span>
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Trading Criteria:</strong> <span className=" font-extralight gray-text"> Eligible trades must be held
                                    for at least 3 minutes to qualify. </span>
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Excluded Instruments:</strong> <span className=" font-extralight gray-text"> Stocks and cryptocurrency
                                    pairs are excluded. </span>
                            </p>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border border-[#3e4353]s" />
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                        Important <span className=" text-primary"> Terms </span> & <span className="text-primary">Conditions</span>
                    </h2>
                    <p className="  italic mb-6">
                        Ensure you meet all the criteria before participating.
                    </p>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Fair Play:</strong> <span className=" font-extralight gray-text"> Market manipulation or abuse, such
                                    as latency arbitrage, will result in disqualification.</span>
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Eligibility Limitations:</strong> <span className=" font-extralight gray-text"> Self-directed
                                    individual accounts only. </span>
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Liability Disclaimer:</strong>  <span className=" font-extralight gray-text">WinproFX will not be
                                    responsible for trading losses. Program participation does not
                                    alter risk profiles. </span>
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#54c2e8] mr-2">✔</span>
                            <p>
                                <strong>Dispute Resolution:</strong> <span className=" font-extralight gray-text"> Any issues will be handled
                                    by management fairly. </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProgramDetails;
