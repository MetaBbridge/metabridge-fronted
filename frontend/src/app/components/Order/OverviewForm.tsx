import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { formSchema } from "./types";
import { z } from "zod";

type FormData = z.infer<typeof formSchema>;
const OverviewForm = () => {
  const methods = useFormContext<FormData>();
  return (
    <div>
      <input
        {...methods.register("projectName")}
        placeholder="Project Name"
        className="mb-2 w-full rounded-[12px] border border-[#D4D4D8] p-4 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
      />
      {methods.formState.errors.projectName && (
        <p className="text-sm text-red-500">
          {methods.formState.errors.projectName.message}
        </p>
      )}

      <div className="mb-2 grid grid-cols-2 gap-4">
        <div>
          <input
            {...methods.register("email")}
            placeholder="Email"
            className="w-full rounded-[12px] border border-[#D4D4D8] p-4 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
          />
          {methods.formState.errors.email && (
            <p className="text-sm text-red-500">
              {methods.formState.errors.email.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...methods.register("website")}
            placeholder="Website"
            className="w-full rounded-[12px] border border-[#D4D4D8] p-4 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
          />
          {methods.formState.errors.website && (
            <p className="text-sm text-red-500">
              {methods.formState.errors.website.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-2 grid grid-cols-2 gap-4">
        <div>
          <input
            {...methods.register("phoneNumber")}
            placeholder="Phone Number"
            className="w-full rounded-[12px] border border-[#D4D4D8] p-4 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
          />
          {methods.formState.errors.phoneNumber && (
            <p className="text-sm text-red-500">
              {methods.formState.errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div>
          <Select
            onValueChange={(value) => methods.setValue("category", value)}
            value={methods.watch("category")}
          >
            <SelectTrigger className="h-[50px] w-full rounded-[12px] border border-[#D4D4D8] p-4 text-[14px] font-normal text-[#7E7E8B]">
              <SelectValue
                placeholder="Select Category"
                className="text-[#D4D4D8]"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
          {methods.formState.errors.category && (
            <p className="text-sm text-red-500">
              {methods.formState.errors.category.message}
            </p>
          )}
        </div>
      </div>

      <input
        {...methods.register("locationAddress")}
        placeholder="Location Address"
        className="mb-2 w-full rounded-[12px] border border-[#D4D4D8] p-4 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
      />
      {methods.formState.errors.locationAddress && (
        <p className="text-sm text-red-500">
          {methods.formState.errors.locationAddress.message}
        </p>
      )}

      <textarea
        {...methods.register("description")}
        placeholder="Description"
        className="mb-2 h-32 w-full rounded-[12px] border border-[#D4D4D8] p-4 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
      />
      {methods.formState.errors.description && (
        <p className="text-sm text-red-500">
          {methods.formState.errors.description.message}
        </p>
      )}

      <textarea
        {...methods.register("problemStatement")}
        placeholder="Problem Statement"
        className="mb-2 h-32 w-full rounded-[12px] border border-[#D4D4D8] p-4 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
      />
      {methods.formState.errors.problemStatement && (
        <p className="text-sm text-red-500">
          {methods.formState.errors.problemStatement.message}
        </p>
      )}

      <textarea
        {...methods.register("projectStory")}
        placeholder="Project Story"
        className="mb-2 h-32 w-full rounded-[12px] border border-[#D4D4D8] p-4 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
      />
      {methods.formState.errors.projectStory && (
        <p className="text-sm text-red-500">
          {methods.formState.errors.projectStory.message}
        </p>
      )}

      <div className="mb-2 space-y-4 rounded-[12px] border border-[#D4D4D8] p-6">
        <p className="text-base font-medium text-[#131315]">Images</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-[12px] border border-dashed border-[#D4D4D8] p-4">
            <span className="text-sm text-[#7E7E8B]">
              Landscape Cover Image (format: JPEG only, size: 590×224, max: 5MB)
            </span>
            <input
              type="file"
              {...methods.register("landscapeCover")}
              className="hidden"
              id="landscape"
            />
            <label
              htmlFor="landscape"
              className="cursor-pointer rounded-[8px] bg-[#E5EBFF] px-4 py-2 text-[#1443FF]"
            >
              Upload
            </label>
          </div>

          <div className="flex items-center justify-between rounded-[12px] border border-dashed border-[#D4D4D8] p-4">
            <span className="text-sm text-[#7E7E8B]">
              Portrait Cover Image (format: JPEG only, size: 247×224, max: 5MB)
            </span>
            <input
              type="file"
              {...methods.register("portraitCover")}
              className="hidden"
              id="portrait"
            />
            <label
              htmlFor="portrait"
              className="cursor-pointer rounded-[8px] bg-[#E5EBFF] px-4 py-2 text-[#1443FF]"
            >
              Upload
            </label>
          </div>

          <div className="flex items-center justify-between rounded-[12px] border border-dashed border-[#D4D4D8] p-4">
            <span className="text-sm text-[#7E7E8B]">
              Logo Icon (format: PNG only, size: 400×400, max: 2MB)
            </span>
            <input
              type="file"
              {...methods.register("logoIcon")}
              className="hidden"
              id="logo"
            />
            <label
              htmlFor="logo"
              className="cursor-pointer bg-[#E5EBFF] px-4 py-2 text-[#1443FF]"
            >
              Upload
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-[12px] border border-[#D4D4D8] p-6">
        <p className="text-base font-medium text-[#131315]">Social</p>
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="mb-2 text-sm font-normal text-[#7E7E8B]">Github</p>
            <div className="rounded-[8px] bg-[#F2F2F3] p-2">
              <input
                {...methods.register("github")}
                placeholder="Enter Link"
                className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-2 text-sm font-normal text-[#7E7E8B]">LinkedIn</p>
            <div className="rounded-[8px] bg-[#F2F2F3] p-2">
              <input
                {...methods.register("linkedin")}
                placeholder="Enter Link"
                className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-2 text-sm font-normal text-[#7E7E8B]">
              X (Twitter)
            </p>
            <div className="rounded-[8px] bg-[#F2F2F3] p-2">
              <input
                {...methods.register("twitter")}
                placeholder="Enter Link"
                className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-2 text-sm font-normal text-[#7E7E8B]">Telegram</p>
            <div className="rounded-[8px] bg-[#F2F2F3] p-2">
              <input
                {...methods.register("telegram")}
                placeholder="Enter Link"
                className="w-full rounded-[8px] border border-[#D4D4D8] p-2 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewForm;
