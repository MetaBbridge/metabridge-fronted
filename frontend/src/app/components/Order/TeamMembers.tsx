import React, { memo, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./types";
import { Button } from "@/components/ui/Button";
import { City, Country, State } from "country-state-city";
import SelectCountryAndState from "./SelectTeamCountryAndCity";

type FormData = z.infer<typeof formSchema>;
const TeamMembers = () => {
  const methods = useFormContext<FormData>();
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = methods;

  const teamMembers = methods.watch("teamMembers") || [{}];

  const addMilestone = () => {
    setValue(
      "teamMembers",
      [
        ...teamMembers,
        {
          fullName: "",
          email: "",
          phoneNumber: "",
          country: "",
          state: "",
          city: "",
          locationAddress: "",
          role: "",
          linkedin: "",
          twitter: "",
          telegram: "",
          github: "",
          photo: "",
          identification: "",
        },
      ],
      { shouldDirty: true },
    );
  };

  const removeMember = (index: number) => {
    const currentMembers = getValues("teamMembers") || [];
    setValue(
      "teamMembers",
      currentMembers.filter((_, i) => i !== index),
      { shouldDirty: true },
    );
  };

  return (
    <div className="space-y-6">
      {teamMembers.map((_, index) => (
        <div key={index} className="rounded-[12px] border border-[#D4D4D8] p-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-base font-medium text-[#131315]">
              Team Member {index + 1}
            </p>
            {teamMembers.length > 1 && (
              <button
                type="button"
                onClick={() => removeMember(index)}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            )}
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Full Name
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`teamMembers.${index}.fullName`)}
                    placeholder="Enter Full Name"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.teamMembers?.[index]?.fullName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.teamMembers[index]?.fullName?.message}
                  </p>
                )}
              </div>

              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">Email</p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`teamMembers.${index}.email`)}
                    placeholder="Enter Description"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.teamMembers?.[index]?.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.teamMembers[index]?.email?.message}
                  </p>
                )}
              </div>
              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Phone Number
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`teamMembers.${index}.phoneNumber`)}
                    placeholder="Enter Description"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.teamMembers?.[index]?.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.teamMembers[index]?.phoneNumber?.message}
                  </p>
                )}
              </div>
            </div>
            <SelectCountryAndState index={index} />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Location Address
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`teamMembers.${index}.locationAddress`)}
                    placeholder="Enter Location Address"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.teamMembers?.[index]?.locationAddress && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.teamMembers[index]?.locationAddress?.message}
                  </p>
                )}
              </div>

              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">Role</p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <input
                    {...register(`teamMembers.${index}.role`)}
                    placeholder="Enter Role"
                    className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                  />
                </div>
                {errors.teamMembers?.[index]?.role && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.teamMembers[index]?.role?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Upload Photo
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <div className="flex items-center justify-between rounded-[8px] border border-dashed border-[#D4D4D8] bg-white p-4">
                    <span className="text-[12px] font-normal italic text-[#7E7E8B]">
                      Format: PNG, JPEG only, size: 400x400, max: 5MB
                    </span>
                    <input
                      type="file"
                      {...register(`teamMembers.${index}.photo`)}
                      className="hidden"
                      id="photo"
                    />
                    <label
                      htmlFor="photo"
                      className="cursor-pointer rounded-[2px] bg-[#E5EBFF] px-2 py-1 text-[12px] font-normal text-[#1443FF]"
                    >
                      Upload
                    </label>
                  </div>
                </div>
                {/* {errors.teamMembers?.[index]?.photo && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.teamMembers[index]?.photo?.message}
                  </p>
                )} */}
              </div>

              <div>
                <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                  Upload ID (Passport, National ID, etc)
                </p>
                <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                  <div className="flex items-center justify-between rounded-[8px] border border-dashed border-[#D4D4D8] bg-white p-4">
                    <span className="text-[12px] font-normal italic text-[#7E7E8B]">
                      Format: PNG, JPEG only, size: 400x400, max: 5MB
                    </span>
                    <input
                      type="file"
                      {...register(`teamMembers.${index}.identification`)}
                      className="hidden"
                      id="identification"
                    />
                    <label
                      htmlFor="identification"
                      className="cursor-pointer rounded-[2px] bg-[#E5EBFF] px-2 py-1 text-[12px] font-normal text-[#1443FF]"
                    >
                      Upload
                    </label>
                  </div>
                </div>
                {/* {errors.teamMembers?.[index]?.photo && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.teamMembers[index]?.photo?.message}
                  </p>
                )} */}
              </div>
            </div>
            <div className="space-y-1 rounded-[12px] border border-[#D4D4D8] p-6">
              <p className="text-base font-medium text-[#131315]">Social</p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                    Github
                  </p>
                  <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                    <input
                      {...register(`teamMembers.${index}.github`)}
                      placeholder="Enter Link"
                      className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                    />
                  </div>
                  {errors.teamMembers?.[index]?.github && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.teamMembers[index]?.github?.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                    LinkedIn
                  </p>
                  <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                    <input
                      {...register(`teamMembers.${index}.linkedin`)}
                      placeholder="Enter Link"
                      className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                    />
                  </div>
                  {errors.teamMembers?.[index]?.linkedin && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.teamMembers[index]?.linkedin?.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                    X (Twitter)
                  </p>
                  <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                    <input
                      {...register(`teamMembers.${index}.twitter`)}
                      placeholder="Enter Link"
                      className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                    />
                  </div>
                  {errors.teamMembers?.[index]?.twitter && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.teamMembers[index]?.twitter?.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
                    Telegram
                  </p>
                  <div className="rounded-[8px] bg-[#F2F2F3] p-2">
                    <input
                      {...register(`teamMembers.${index}.telegram`)}
                      placeholder="Enter Link"
                      className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
                    />
                  </div>
                  {errors.teamMembers?.[index]?.telegram && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.teamMembers[index]?.telegram?.message}
                    </p>
                  )}
                </div>
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
        <span className="text-xl">+</span> Add More teamMembers
      </Button>
    </div>
  );
};

export default memo(TeamMembers);
