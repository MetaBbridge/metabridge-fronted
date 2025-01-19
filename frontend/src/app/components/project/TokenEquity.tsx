"use client";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
export function TokenEquity() {
  const pathname = usePathname();
  const isInvestor = pathname.includes("investor");

  return (
    <div className="w-full space-y-3 rounded-[16px] bg-white p-4">
      <h3 className="text-[14px] font-medium">Token Equity Offer</h3>
      <div className="rounded-[16px] border border-b-[4px] border-black bg-[#EBEBFF] p-4">
        <h3 className="mb-2 text-[14px] font-normal transition-transform duration-1000 hover:translate-x-2">
          Total offered in USD
        </h3>
        <p className="hover-bounce text-[24px] font-semibold hover:cursor-default">
          10,000.00
        </p>
      </div>
      {isInvestor && (
        <div className="space-y-3 rounded-[8px] border border-[#D4D4D8] bg-[#F2F2F3] px-3 py-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Total Supply:
            </span>
            <span className="text-[10px] font-medium">5,000,000.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Equity:
            </span>
            <span className="text-[10px] font-medium">5,000.00 - 30%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Community:
            </span>
            <span className="text-[10px] font-medium">10,000.00 - 20%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Development:
            </span>
            <span className="text-[10px] font-medium">10,000.00 - 20%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Marketing:
            </span>
            <span className="text-[10px] font-medium">10,000.00 - 15%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Team:
            </span>
            <span className="text-[10px] font-medium">10,000.00 - 10%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Advisors:
            </span>
            <span className="text-[10px] font-medium">10,000.00 -5%</span>
          </div>
        </div>
      )}
    </div>
  );
}
