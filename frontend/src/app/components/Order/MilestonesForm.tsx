import React, { memo } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./types";
import { Button } from "@/components/ui/Button";

type FormData = z.infer<typeof formSchema>;
const MilestonesForm = () => {
  const methods = useFormContext<FormData>();
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = methods;

  const milestones = methods.watch("milestones") || [{}];

  const addMilestone = () => {
    setValue(
      "milestones",
      [
        ...milestones,
        {
          title: "",
          description: "",
          startDate: "",
          endDate: "",
          funding: "",
          kpis: "",
          roi: "",
        },
      ],
      { shouldDirty: true },
    );
  };

  const removeMilestone = (index: number) => {
    const currentMilestones = getValues("milestones") || [];
    setValue(
      "milestones",
      currentMilestones.filter((_, i) => i !== index),
      { shouldDirty: true },
    );
  };

  return (
    <div className="space-y-6">
      {milestones.map((_, index) => (
        <div key={index} className="rounded-[12px] border border-[#D4D4D8] p-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-base font-medium text-[#131315]">
              Milestone {index + 1}
            </p>
            {milestones.length > 1 && (
              <button
                type="button"
                onClick={() => removeMilestone(index)}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            )}
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">Title</p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`milestones.${index}.title`)}
                    placeholder="Enter Title"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.milestones?.[index]?.title && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.milestones[index]?.title?.message}
                  </p>
                )}
              </div>

              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Description
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`milestones.${index}.description`)}
                    placeholder="Enter Description"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.milestones?.[index]?.description && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.milestones[index]?.description?.message}
                  </p>
                )}
              </div>

              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Timeframe
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 rounded-[8px] bg-[#F2F2F3] p-2">
                    <input
                      type="date"
                      {...register(`milestones.${index}.startDate`)}
                      className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B]"
                    />
                  </div>
                  <div className="flex-1 rounded-[8px] bg-[#F2F2F3] p-2">
                    <input
                      type="date"
                      {...register(`milestones.${index}.endDate`)}
                      className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B]"
                    />
                  </div>
                </div>
                {(errors.milestones?.[index]?.startDate ||
                  errors.milestones?.[index]?.endDate) && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.milestones[index]?.startDate?.message ||
                      errors.milestones[index]?.endDate?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Funding
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`milestones.${index}.funding`)}
                    placeholder="Enter Required Funds"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.milestones?.[index]?.funding && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.milestones[index]?.funding?.message}
                  </p>
                )}
              </div>

              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">KPIs</p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`milestones.${index}.kpis`)}
                    placeholder="Enter KPIs"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.milestones?.[index]?.kpis && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.milestones[index]?.kpis?.message}
                  </p>
                )}
              </div>

              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">ROI</p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`milestones.${index}.roi`)}
                    placeholder="Enter Projected ROI"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.milestones?.[index]?.roi && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.milestones[index]?.roi?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        onClick={addMilestone}
        variant="transparent"
        className="flex w-auto items-center gap-2 text-[#1443FF]"
      >
        <span className="text-xl">+</span> Add More Milestones
      </Button>
    </div>
  );
};

export default memo(MilestonesForm);
