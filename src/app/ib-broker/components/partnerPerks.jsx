import React from "react";
 
const PartneringPerks = () => {
    return (
        <div className="inner-container border-b border-b-[#3e4353] mx-auto text-white py-16 ">
            {/* Title Section */}
            <h2 className="text-xl md:text-2xl max-w-xl mx-auto font-semibold text-center mb-12">
                <span className="text-primary">Partnering Perks:</span> Commission Riches,
                Award-Winning Trust, Market Evolution and Daily Win Rewards!
            </h2>

            {/* Perks Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="flex flex-col justify-end min-h-40 bg-gradient-to-b from-[#05324f] via-[#0a2b42] to-[#0b1120] p-6 rounded-2xl shadow-md">
                    <img className="w-9 h-9" src="/new-icons/ib-icon-02.svg" alt="" />
                    <p className="text-sm leading-tight mt-4">Commission up to <br /><span className="font-bold">80%</span> spread revshare</p>
                </div>
                <div className="flex flex-col justify-end min-h-40 bg-gradient-to-b from-[#05324f] via-[#0a2b42] to-[#0b1120] p-6 rounded-2xl shadow-md">
                    <img className="w-9 h-9" src="/new-icons/ib-icon-03.svg" alt="" />
                    <p className="text-sm mt-4">Reputable Broker With <br /><span className="font-bold">40+</span> Industry awards</p>
                </div>
                <div className="flex flex-col justify-end min-h-40 bg-gradient-to-b from-[#05324f] via-[#0a2b42] to-[#0b1120] p-6 rounded-2xl shadow-md">
                    <img className="w-9 h-9" src="/new-icons/ib-icon-04.svg" alt="" />
                    <p className="text-sm mt-4">Evolving everyday in the market</p>
                </div>
                <div className="flex flex-col justify-end min-h-40 bg-gradient-to-b from-[#05324f] via-[#0a2b42] to-[#0b1120] p-6 rounded-2xl shadow-md">
                    <img className="w-9 h-9 " src="/new-icons/ib-icon-05.svg" alt="" />
                    <p className="text-sm mt-4">Trade and Win <br /><span className="font-bold">Rewards</span> Everyday</p>
                </div>
            </div>

            {/* Reasons Section */}
            <h3 className="text-xl md:text-2xl font-semibold  mb-8 pt-6">
                <span className=" text-primary">What Sets Us Apart: </span> <br /> Reasons for Client Preference
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                <div className="flex gap-1">
                    <h4 className="text-4xl font-bold text-primary">1.</h4>
                    <p className="text-sm font-bold">Fastest<br /> Withdrawal</p>
                </div>
                <div className="flex gap-1">
                    <h4 className="text-4xl font-bold text-primary">2.</h4>
                    <p className="text-sm font-bold">No<br/> Swap</p>
                </div>
                <div className="flex gap-1">
                    <h4 className="text-4xl font-bold text-primary">3.</h4>
                    <p className="text-sm font-bold">No<br/> Commission</p>
                </div>
                <div className="flex gap-1">
                    <h4 className="text-4xl font-bold text-primary">4.</h4>
                    <p className="text-sm font-bold">Low<br/> Spread</p>
                </div>
            </div>
        </div>
    );
};

export default PartneringPerks;
