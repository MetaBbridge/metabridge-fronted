import React, { memo } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./types";
import { Button } from "@/components/ui/Button";

type FormData = z.infer<typeof formSchema>;
const EquityAllocationForm = () => {
  const methods = useFormContext<FormData>();
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = methods;

  const allocations = methods.watch("equityAllocationHolders") || [{}];

  const addAllocations = () => {
    setValue(
      "equityAllocationHolders",
      [
        ...allocations,
        {
          equityAllocation: "",
          totalEquityAllocated: "",
          percentageAllocation: "",
        },
      ],
      { shouldDirty: true },
    );
  };

  const removeAllocations = (index: number) => {
    const currentAllocations = getValues("equityAllocationHolders") || [];
    setValue(
      "equityAllocationHolders",
      currentAllocations.filter((_, i) => i !== index),
      { shouldDirty: true },
    );
  };

  return (
    <div className="rounded-[12px] border border-[#D4D4D8] p-6">
      <p className="mb-2 text-base font-medium text-[#131315]">
        Equity Allocation (Holders)
      </p>
      {allocations.map((_, index) => (
        <div
          key={index}
          className="mb-3 rounded-[12px] border border-[#D4D4D8] p-6"
        >
          {allocations.length > 1 && (
            <div className="mb-6 flex items-center justify-end">
              <button
                type="button"
                onClick={() => removeAllocations(index)}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          )}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Equity Allocation
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(
                      `equityAllocationHolders.${index}.equityAllocation`,
                    )}
                    placeholder="E.g Investor, Marketing, Team"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.equityAllocationHolders?.[index]?.equityAllocation && (
                  <p className="mt-1 text-sm text-red-500">
                    {
                      errors.equityAllocationHolders[index]?.equityAllocation
                        ?.message
                    }
                  </p>
                )}
              </div>

              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Total Equity Allocated
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(
                      `equityAllocationHolders.${index}.totalEquityAllocated`,
                    )}
                    placeholder="Enter Amount"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.equityAllocationHolders?.[index]
                  ?.totalEquityAllocated && (
                  <p className="mt-1 text-sm text-red-500">
                    {
                      errors.equityAllocationHolders[index]
                        ?.totalEquityAllocated?.message
                    }
                  </p>
                )}
              </div>

              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Percentage Allocation
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(
                      `equityAllocationHolders.${index}.percentageAllocation`,
                    )}
                    placeholder="Enter in %"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.equityAllocationHolders?.[index]
                  ?.percentageAllocation && (
                  <p className="mt-1 text-sm text-red-500">
                    {
                      errors.equityAllocationHolders[index]
                        ?.percentageAllocation?.message
                    }
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        onClick={addAllocations}
        variant="transparent"
        className="flex w-auto items-center gap-2 text-[#1443FF]"
      >
        <span className="text-xl">+</span> Add More Allocations
      </Button>
    </div>
  );
};

export default memo(EquityAllocationForm);
