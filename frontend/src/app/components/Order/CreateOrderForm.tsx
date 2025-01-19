import { Button } from "@/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { GoArrowLeft } from "react-icons/go";
import { z } from "zod";

import MilestonesForm from "./MilestonesForm";
import OverviewForm from "./OverviewForm";
import { formSchema } from "./types";
import Documents from "./Documents";
import TeamMembers from "./TeamMembers";
import EquityForm from "./EquityForm";

type FormData = z.infer<typeof formSchema>;

const formSteps = ["Overview", "Milestones", "Documents", "Team", "Equity"];

const CreateOrderForm = ({
  setShowCreateOrder,
}: {
  setShowCreateOrder: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      milestones: [
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
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="mb-8 rounded-[24px] bg-[#F2F2F3] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[24px] font-semibold">Create Funding Order</h2>
        <Button
          onClick={() => setShowCreateOrder(false)}
          variant="primary"
          className="flex w-auto items-center gap-1 leading-[12px]"
        >
          <GoArrowLeft className="text-white" /> Back
        </Button>
      </div>
      <div className="overflow-hidden rounded-[16px] bg-white p-6">
        <div className="flex items-center gap-1 rounded-[8px] bg-[#F2F2F3] p-1">
          {formSteps.map((step, i) => (
            <Button
              onClick={() => setActiveStep(i)}
              variant={activeStep === i ? "primary" : "transparent"}
              className="flex w-auto items-center gap-1 leading-[12px]"
            >
              {step}
            </Button>
          ))}
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="mt-6 space-y-4"
          >
            {activeStep === 0 && <OverviewForm />}
            {activeStep === 1 && <MilestonesForm />}
            {activeStep === 2 && <Documents />}
            {activeStep === 3 && <TeamMembers />}
            {activeStep === 4 && <EquityForm />}

            {activeStep === 4 && (
              <div className="mt-5 flex items-center gap-2">
                <input
                  type="checkbox"
                  {...methods.register("termsAccepted")}
                  className="h-5 w-5 rounded border-gray-300"
                />
                <p className="text-sm font-normal text-[#7E7E8B]">
                  By submitting the form you agree to MetaBridge
                  <a href="#" className="font-normal text-[#1443FF]">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-normal text-[#1443FF]">
                    Condition
                  </a>
                </p>
              </div>
            )}
            <div className="flex gap-4">
              <Button type="submit" variant="primary" className="flex-1">
                Submit Order
              </Button>
              <Button type="button" variant="secondary" className="flex-1">
                Save to Draft
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateOrderForm;
