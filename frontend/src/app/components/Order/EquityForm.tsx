import React, { memo } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./types";
import { Button } from "@/components/ui/Button";
import EquityAllocationForm from "./EquityAllocationForm";

type FormData = z.infer<typeof formSchema>;
const EquityForm = () => {
  const methods = useFormContext<FormData>();
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className="space-y-2">
      <div className="rounded-[12px] border border-[#D4D4D8] p-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-base font-medium text-[#131315]">
            Total Equity Distribution
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                Toal Equity
              </p>
              <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                <input
                  {...register("totalEquity")}
                  placeholder="Enter Total Amount"
                  className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                />
              </div>
              {errors.totalEquity && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.totalEquity.message}
                </p>
              )}
            </div>

            <div>
              <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                Distributed Equity
              </p>
              <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                <input
                  {...register("distributedEquity")}
                  placeholder="Enter in %"
                  className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                />
              </div>
              {errors.distributedEquity && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.distributedEquity.message}
                </p>
              )}
            </div>
            <div>
              <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                Equity Share Offer
              </p>
              <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                <input
                  {...register("equityShareOffered")}
                  placeholder="Enter in %"
                  className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                />
              </div>
              {errors.equityShareOffered && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.equityShareOffered.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <EquityAllocationForm />
    </div>
  );
};

export default memo(EquityForm);
