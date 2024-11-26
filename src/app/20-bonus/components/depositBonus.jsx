import React from "react";

const DepositBonusComparison = () => {
    return (
        <div className="inner-container border-b border-b-[#3e4353] mx-auto py-10 flex justify-center">
            <div className="w-full text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Get More Trading Power With <br /> Our <span className="text-[#00b4d8]"> Deposit Bonus</span> When You Deposit
                </h2>
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                    <div className="w-[300px]">
                        <img src="/stats-img1.svg" alt="" />
                    </div>
                    <div className="w-[300px]">
                        <img src="/stats-img2.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositBonusComparison;
