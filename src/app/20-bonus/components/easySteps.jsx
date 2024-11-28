import React from "react";

const EasySteps = () => {
    return (
        <div className=" py-10 mx-auto inner-container">
            <div className="bg-gradient-to-b p-8 rounded-2xl from-[#133d4f] via-[#122330] to-[#0d1821] text-white">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">
                        Start Your Journey of Success In
                    </h2>
                    <h3 className="text-2xl font-bold text-primary">3 <span className="text-white">Easy Steps!</span></h3>
                </div>

                <div className="mb-10">
                    <div className="flex items-start gap-4">
                        <div className="text-4xl font-bold min-w-6 text-primary">1</div>
                        <div className="pl-6 border-l border-l-[#3e4353]">
                            <h4 className="text-lg font-bold text-primary">Open a Live Account</h4>
                            <p className="text-sm font-normal">
                                Open a live account in a few clicks with simple KYC & start your
                                journey towards success!
                            </p>
                            <ul className="flex flex-wrap gap-4 mt-4 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="text-primary">✔</span> Leverage | <span className="font-bold">1:500</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-primary">✔</span> Spreads starting from | <span className="font-bold">0</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-primary">✔</span> Swap | <span className="font-bold">FREE</span>
                                </li>
                            </ul>
                            <div className="flex gap-4 mt-6">
                                <button className="rounded-3xl border font-semibold border-primary bg-gradient-to-r from-[#096180] to-[#0a4280] px-6 py-2 text-sm min-w-52 hover:scale-105 transition-transform">
                                    Open Live Account
                                </button>
                                <button className="rounded-3xl border font-semibold border-primary bg-gradient-to-r from-[#096180] to-[#0a4280] px-6 py-2 text-sm min-w-52 hover:scale-105 transition-transform">
                                    T&C
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <div className="flex items-start gap-4">
                        <div className="text-4xl font-bold min-w-6 text-primary">2</div>
                        <div className="pl-6 border-l border-l-[#3e4353]">
                            <h4 className="text-lg font-bold text-primary">Deposit</h4>
                            <p className="text-sm font-normal">
                                Make your first deposit through our instant & hassle-free deposit
                                methods.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-start gap-4">
                        <div className="text-4xl font-bold min-w-6 text-primary">3</div>
                        <div className="pl-6 border-l border-l-[#3e4353]">
                            <h4 className="text-lg font-bold text-primary">Activate</h4>
                            <p className="text-sm font-normal">
                                Activate your bonus by just simply filling out the form below with
                                your trading account number and get your account funded with a
                                whopping 20% bonus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasySteps;
