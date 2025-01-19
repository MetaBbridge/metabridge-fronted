"use client";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

const InvestorFunding = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <div className="mb-8 rounded-[24px] bg-[#F2F2F3] p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[24px] font-semibold">Invest In Order</h2>
          <Button
            onClick={() => null}
            variant="primary"
            className="flex w-auto items-center gap-1 leading-[12px]"
          >
            <GoArrowLeft className="text-white" /> Back
          </Button>
        </div>
        <div className="space-y-4 overflow-hidden rounded-[16px] bg-white p-6">
          <div className="relative rounded-[12px] border-[1.2px] border-[#D4D4D8] px-3 pb-6 pt-8">
            <span className="absolute right-3 top-0 rounded-[4px] bg-[#FF6B6B] p-1 text-[10px] font-medium text-white">
              Ongoing Funding
            </span>
            <div className="mb-4 space-y-2">
              <h4 className="text-base font-semibold">Project Milestone 1</h4>
              <p className="text-[13px] font-normal text-[#7E7E8B]">
                Prototype development and deployment
              </p>
            </div>

            <div className="-mx-3 -mb-6 space-y-3 rounded-[8px] border border-[#D4D4D8] bg-[#F2F2F3] px-3 py-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[10px] font-normal text-[#656571]">
                  Total Request:
                </span>
                <span className="text-[10px] font-medium">5,000.00 USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] font-normal text-[#656571]">
                  Token Equity Offer:
                </span>
                <span className="text-[10px] font-medium">
                  500,000.83 SELA - 5%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] font-normal text-[#656571]">
                  Token Price:
                </span>
                <span className="text-[10px] font-medium">0.0254 USDT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] font-normal text-[#656571]">
                  Raise:
                </span>
                <span className="text-[10px] font-medium">
                  2,000 of 5,000 USDT
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] border-[1.2px] border-[#D4D4D8] px-3 pb-6 pt-8">
            <p className="text-base font-medium text-[#131315]">Amount </p>
            <div className="flex items-center gap-4">
              <input
                value={amount}
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full flex-1 rounded-[12px] border border-[#D4D4D8] p-3 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
              />
              {/* {methods.formState.errors.locationAddress && (
                <p className="text-sm text-red-500">
                  {methods.formState.errors.locationAddress.message}
                </p>
              )} */}
              <Button className="py-3">Commit Amount</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorFunding;
