import { City, Country, State } from "country-state-city";
import React, { memo, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { formSchema } from "./types";
import { z } from "zod";

type FormData = z.infer<typeof formSchema>;
const SelectCountryAndState = ({ index }: { index: number }) => {
  const methods = useFormContext<FormData>();
  const {
    register,
    formState: { errors },
  } = methods;
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  useEffect(() => {
    // Get countries with flags
    const countriesData = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
      flag: country.flag,
    }));
    setCountries(countriesData);
  }, []);

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
    // Get Citites when country and state changes
    if (selectedCountry && selectedState) {
      const citiesData = City.getCitiesOfState(
        selectedCountry,
        selectedState,
      ).map((city) => ({
        value: city.stateCode,
        label: city.name,
      }));
      setCities(citiesData);
    } else {
      setCities([]);
    }
  }, [selectedCountry, selectedState]);
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <p className="mb-2 text-sm font-normal text-[#7E7E8B]">Country</p>
        <div className="rounded-[8px] bg-[#F2F2F3] p-2">
          <select
            {...register(`teamMembers.${index}.country`)}
            className="w-full appearance-none rounded-[8px] border border-[#D4D4D8] bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%20stroke%3D%22%23131315%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[center_right_24px] bg-no-repeat p-2 pr-16 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
            onChange={(e) => {
              register(`teamMembers.${index}.country`).onChange(e);
              setSelectedCountry(e.target.value);
            }}
          >
            <option value="" className="text-[14px] font-normal text-[#7E7E8B]">
              Select Country
            </option>
            {countries.map((country) => (
              <option
                className="text-[14px] font-normal text-[#7E7E8B]"
                key={country.value}
                value={country.value}
              >
                {country.flag} {country.label}
              </option>
            ))}
          </select>
        </div>
        {errors.teamMembers?.[index]?.country && (
          <p className="mt-1 text-sm text-red-500">
            {errors.teamMembers[index]?.country?.message}
          </p>
        )}
      </div>
      <div>
        <p className="mb-2 text-sm font-normal text-[#7E7E8B]">State</p>
        <div className="rounded-[8px] bg-[#F2F2F3] p-2">
          <select
            {...register(`teamMembers.${index}.state`)}
            className="w-full appearance-none rounded-[8px] border border-[#D4D4D8] bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%20stroke%3D%22%23131315%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[center_right_24px] bg-no-repeat p-2 pr-16 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
            onChange={(e) => {
              register(`teamMembers.${index}.state`).onChange(e);
              setSelectedState(e.target.value);
            }}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </div>
        {errors.teamMembers?.[index]?.state && (
          <p className="mt-1 text-sm text-red-500">
            {errors.teamMembers[index]?.state?.message}
          </p>
        )}
      </div>
      <div>
        <p className="mb-2 text-sm font-normal text-[#7E7E8B]">City</p>
        <div className="rounded-[8px] bg-[#F2F2F3] p-2">
          <select
            {...register(`teamMembers.${index}.city`)}
            className="w-full appearance-none rounded-[8px] border border-[#D4D4D8] bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%20stroke%3D%22%23131315%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[center_right_24px] bg-no-repeat p-2 pr-16 text-[14px] font-normal text-[#7E7E8B] placeholder:text-[#D4D4D8]"
            onChange={(e) => {
              register(`teamMembers.${index}.city`).onChange(e);
            }}
          >
            <option value="">Select State</option>
            {cities.map((city) => (
              <option key={city.value} value={city.label}>
                {city.label}
              </option>
            ))}
          </select>
        </div>
        {errors.teamMembers?.[index]?.city && (
          <p className="mt-1 text-sm text-red-500">
            {errors.teamMembers[index]?.city?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(SelectCountryAndState);
