"use client";
import { useFormContext } from "react-hook-form";
import { formSchema } from "./types";
import { z } from "zod";
import { splitCamelCaseIntoWords } from "@/app/lib/utils";

type FormData = z.infer<typeof formSchema>;

const documentsList = [
  "businessRegistration",
  "companyLicense",
  "businessModel",
  "financialStatement",
  "roadmap",
  "pitchDeck",
];

const Documents = () => {
  const methods = useFormContext<FormData>();
  return documentsList.map((document, i) => (
    <div
      key={document}
      className="mb-2 space-y-2 rounded-[12px] border border-[#D4D4D8] p-4"
    >
      <p className="text-base font-medium text-[#131315]">
        {`${splitCamelCaseIntoWords(document)} ${i == 1 && "(if any)"}`}
      </p>

      <div className="flex items-center justify-between rounded-[12px] border border-dashed border-[#D4D4D8] py-2 pl-4 pr-2">
        <span className="text-sm text-[#7E7E8B]">
          Format: PDF, Docs only, max-size: 5MB
        </span>
        <input
          type="file"
          {...methods.register(document as keyof FormData)}
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
    </div>
  ));
};

export default Documents;
