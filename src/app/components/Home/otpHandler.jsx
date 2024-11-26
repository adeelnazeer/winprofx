import React from "react";

const AccountComparisonTable = () => {
    return (
        <div className="inner-container mx-auto text-white md:py-16 py-6">
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-spacing-0 text-left text-sm">
                    <thead className="text-white">
                        <tr className="border-b border-[#ffffffa1]">
                            <th className="py-3 px-4"></th>
                            <th className="py-3 px-4 text-base">Standard</th>
                            <th className="py-3 px-4 text-base">Pro</th>
                            <th className="py-3 px-4 text-base">ECN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Minimum Deposit</td>
                            <td className="py-3 px-4 font-medium">$10</td>
                            <td className="py-3 px-4 font-medium">$2500</td>
                            <td className="py-3 px-4 font-medium">$5000</td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef] ">Spread</td>
                            <td className="py-3 px-4 font-medium">From 0.2 pips</td>
                            <td className="py-3 px-4 font-medium">From 0.1 pips</td>
                            <td className="py-3 px-4 font-medium">From 0 pips</td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Commission</td>
                            <td className="py-3 px-4 font-medium">No commission</td>
                            <td className="py-3 px-4 font-medium">No commission</td>
                            <td className="py-3 px-4 font-medium">Up to $3.50 each side per lot</td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Maximum Leverage</td>
                            <td className="py-3 px-4 font-medium">1:500</td>
                            <td className="py-3 px-4 font-medium">1:500</td>
                            <td className="py-3 px-4 font-medium">1:500</td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Instruments</td>
                            <td className="py-3 px-4 font-medium">
                                Forex, metals, cryptocurrencies, energies, stocks, indices
                            </td>
                            <td className="py-3 px-4 font-medium">
                                Forex, metals, cryptocurrencies, energies, stocks, indices
                            </td>
                            <td className="py-3 px-4 font-medium">
                                Forex, metals, cryptocurrencies, energies, stocks, indices
                            </td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Minimum lot size</td>
                            <td className="py-3 px-4 font-medium">0.01 pips</td>
                            <td className="py-3 px-4"> font-medium0.01 pips</td>
                            <td className="py-3 px-4"> font-medium0.01 pips</td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Maximum lot size</td>
                            <td className="py-3 px-4 font-medium">
                                200 (7:00 - 20:59 GMT +0), 60 (21:00 - 6:59 GMT +0)
                            </td>
                            <td className="py-3 px-4 font-medium">
                                200 (7:00 - 20:59 GMT +0), 60 (21:00 - 6:59 GMT +0)
                            </td>
                            <td className="py-3 px-4 font-medium">
                                200 (7:00 - 20:59 GMT +0), 60 (21:00 - 6:59 GMT +0)
                            </td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Maximum Number of positions</td>
                            <td className="py-3 px-4 font-medium">Unlimited</td>
                            <td className="py-3 px-4 font-medium">Unlimited</td>
                            <td className="py-3 px-4 font-medium">Unlimited</td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Hedged Margin</td>
                            <td className="py-3 px-4 font-medium">0%</td>
                            <td className="py-3 px-4 font-medium">0%</td>
                            <td className="py-3 px-4 font-medium">0%</td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Margin call</td>
                            <td className="py-3 px-4 font-medium">30%</td>
                            <td className="py-3 px-4 font-medium">30%</td>
                            <td className="py-3 px-4 font-medium">30%</td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Stop out</td>
                            <td className="py-3 px-4 font-medium">
                                0% (see details about stocks)
                            </td>
                            <td className="py-3 px-4 font-medium">
                                0% (see details about stocks)
                            </td>
                            <td className="py-3 px-4 font-medium">
                                0% (see details about stocks)
                            </td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Order execution</td>
                            <td className="py-3 px-4 v">Market</td>
                            <td className="py-3 px-4 v">
                                Instant (Forex, metals, energies, stocks, indices), market
                                (cryptocurrencies)
                            </td>
                            <td className="py-3 px-4 v">Market</td>
                        </tr>
                        <tr className="border-b border-[#485b6f]">
                            <td className="py-3 px-4 font-normal text-[#fafdef]">Swap-Free</td>
                            <td className="py-3 px-4 font-medium">Available</td>
                            <td className="py-3 px-4 font-medium">Available</td>
                            <td className="py-3 px-4 font-medium">Available</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AccountComparisonTable;
