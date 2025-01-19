"use client";

import { abi } from "@/abi/abi";
import {
  useAccount,
  useContract,
  useSendTransaction,
} from "@starknet-react/core";
import { Country, State } from "country-state-city";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CONTRACT_ADDRESS } from "../lib/constant";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AccountForm = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const { contract } = useContract({ abi: abi, address: CONTRACT_ADDRESS });
  const { address } = useAccount();
  const router = useRouter();

  const { isError, error, send, isPending, isSuccess } = useSendTransaction({});
  const searchParams = useSearchParams();
  const userType = searchParams.get("type");
  const isInvestor = userType === "investor";
  const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    country: z.string().min(1, "Please select a country"),
    state: z.string().min(1, "Please select a state"),
    address: z.string().min(1, "Address is required"),
    linkedin: z.string().optional(),
    dob: z.string().optional(),
    city: z.string().optional(),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  });

  type FormData = z.infer<typeof formSchema>;
  useEffect(() => {
    if (isSuccess) {
      router.push(isInvestor ? "/investor/dashboard" : "/dashboard");
    }
    if (isError) {
      toast.error(error!.message, { icon: "🔥" });
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    // Get states when country changes
    if (selectedCountry) {
      const statesData = State.getStatesOfCountry(selectedCountry).map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        }),
      );
      setStates(statesData);
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    // Get countries with flags
    const countriesData = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
      flag: country.flag,
    }));
    setCountries(countriesData);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    isInvestor
      ? send(
          contract && address
            ? [
                contract.populate("register_investor", [
                  data.fullName,
                  data.email,
                  data.dob!,
                  data.country,
                  data.state,
                  data.city!,
                  data.address,
                  data.linkedin!,
                ]),
              ]
            : undefined,
        )
      : send(
          contract && address
            ? [
                contract.populate("register_entrepreneur", [
                  data.fullName,
                  data.email,
                  data.country,
                  data.state,
                  data.address,
                ]),
              ]
            : undefined,
        );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="mb-2 block text-base font-medium text-[#131315]">
          Full Name
        </label>
        <input
          {...register("fullName")}
          placeholder="John Doe"
          className="w-full rounded-[12px] border border-[#D4D4D8] p-4 placeholder:text-[#D4D4D8]"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-base font-medium text-[#131315]">
          Email
        </label>
        <input
          {...register("email")}
          placeholder="bridge@metabridge.com"
          className="w-full rounded-[12px] border border-[#D4D4D8] p-4 placeholder:text-[#D4D4D8]"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {isInvestor && (
        <div>
          <label className="mb-2 block text-base font-medium text-[#131315]">
            Date of birth
          </label>
          <input
            {...register("dob")}
            type="date"
            placeholder="bridge@metabridge.com"
            className="w-full rounded-[12px] border border-[#D4D4D8] p-4 placeholder:text-[#D4D4D8]"
          />
          {errors.dob && (
            <p className="mt-1 text-sm text-red-500">{errors.dob.message}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-base font-medium text-[#131315]">
            Country
          </label>
          <select
            {...register("country")}
            className="w-full appearance-none rounded-[12px] border border-[#D4D4D8] bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%20stroke%3D%22%23131315%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[center_right_24px] bg-no-repeat p-4 pr-16 placeholder:text-[#D4D4D8]"
            onChange={(e) => {
              register("country").onChange(e);
              setSelectedCountry(e.target.value);
            }}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.flag} {country.label}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="mt-1 text-sm text-red-500">
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-base font-medium text-[#131315]">
            State
          </label>
          <select
            {...register("state")}
            className="w-full appearance-none rounded-[12px] border border-[#D4D4D8] bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%20stroke%3D%22%23131315%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[center_right_24px] bg-no-repeat p-4 pr-16 placeholder:text-[#D4D4D8]"
            disabled={!selectedCountry}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
          )}
        </div>
      </div>

      {isInvestor && (
        <div>
          <label className="mb-2 block text-base font-medium text-[#131315]">
            City
          </label>
          <input
            {...register("city")}
            placeholder="Entet city"
            className="w-full rounded-[12px] border border-[#D4D4D8] p-4 placeholder:text-[#D4D4D8]"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>
      )}

      <div>
        <label className="mb-2 block text-base font-medium text-[#131315]">
          Address
        </label>
        <input
          {...register("address")}
          placeholder="Enter your Address"
          className="w-full rounded-[12px] border border-[#D4D4D8] p-4 placeholder:text-[#D4D4D8]"
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      {isInvestor && (
        <div>
          <label className="mb-2 block text-base font-medium text-[#131315]">
            LinkedIn Profile
          </label>
          <input
            {...register("linkedin")}
            placeholder="Enter your LinkedIn profile URL"
            className="w-full rounded-[12px] border border-[#D4D4D8] p-4 placeholder:text-[#D4D4D8]"
          />
          {errors.linkedin && (
            <p className="mt-1 text-sm text-red-500">
              {errors.linkedin.message}
            </p>
          )}
        </div>
      )}

      <div className="mt-5 flex items-center gap-2">
        <input
          type="checkbox"
          {...register("termsAccepted")}
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
      {errors.termsAccepted && (
        <p className="text-sm text-red-500">{errors.termsAccepted.message}</p>
      )}

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full rounded-[12px] py-4 text-center text-base font-semibold text-white ${
          isValid ? "bg-[#1443FF]" : "cursor-not-allowed bg-[#ADBEFF]"
        }`}
      >
        {isPending ? (
          <div className="flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-2 border-[#fff]" />
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default AccountForm;
