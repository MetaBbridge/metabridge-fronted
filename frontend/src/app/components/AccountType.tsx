"use client";

import {
  useAccount,
  useContract,
  useReadContract,
  useSendTransaction,
} from "@starknet-react/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTRACT_ADDRESS } from "../lib/constant";
import toast from "react-hot-toast";
import { abi } from "@/abi/abi";
import { BigNumberish } from "starknet";

const loader = ({ src }: { src: string }) => {
  return src;
};
const AccountType = () => {
  const [selectedType, setSelectedType] = useState<"investor" | "entrepreneur">(
    "entrepreneur",
  );
  const { contract } = useContract({ abi: abi, address: CONTRACT_ADDRESS });
  const { address } = useAccount();
  const {
    data: role,
    error: roleError,
    isLoading: roleLoading,
  } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi,
    functionName: "check_user_role",
    enabled: !!address,
    args: [address?.toString() ?? "0x0"],
  });

  const router = useRouter();

  const { isError, error, send, isPending, isSuccess } = useSendTransaction({
    calls:
      contract && address
        ? [
            contract.populate("select_role", [
              address.toString(),
              selectedType === "entrepreneur" ? 1 : 2,
            ]),
          ]
        : undefined,
  });

  useEffect(() => {
    if (isSuccess) {
      router.push(`/connect/account-setup?type=${selectedType}`);
    }
    if (isError) {
      toast.error(error!.message, { icon: "🔥" });
    }
  }, [isSuccess, isError]);

  const handleSelectedRole = async () => {
    if (!selectedType) {
      toast.error("Please select a role", { icon: "🔥" });
      return;
    }
    if (role === BigInt(1) || role === BigInt(2)) {
      toast.error("You have already selected a role", { icon: "🔥" });
      router.push(`/connect/account-setup?type=${selectedType}`);
      return;
    }
    send();
  };

  return (
    <>
      <div className="mb-6 flex justify-center">
        <div className="rounded-full p-4">
          <img
            src="/assets/choose-account.png"
            alt="Wallet"
            className="h-[135px] w-[135px]"
          />
        </div>
      </div>
      {/* Connect Text */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-[24px] font-semibold">Choose Account Type </h1>
        <p className="text-base font-normal text-[#7E7E8B]">
          Select a role to continue
        </p>
      </div>
      {/* Wallet Options */}
      <div className="rounded-[24px] bg-white/70 p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
        <div className="space-y-4">
          <button
            className="group flex w-full items-center justify-between rounded-[16px] border-2 border-[#D4D4D8] bg-white p-4 transition-all duration-500 hover:border-2 hover:border-[#6883da] hover:bg-gray-50"
            onClick={() => setSelectedType("entrepreneur")}
          >
            <div className="flex items-center gap-3">
              <div className="overflow-hidden rounded-[5px] bg-[#E5EBFF] p-1 transition-colors duration-500 group-hover:bg-[#6883da]/60">
                <Image
                  alt="entrepreneur"
                  loader={loader}
                  src="/svg/business.svg"
                  width={40}
                  height={40}
                  className="h-8 w-8 rounded-[5px] object-cover transition-transform duration-500 group-hover:scale-150"
                />
              </div>

              <span className="text-[20px] font-semibold text-[#0A0A0B] transition-transform duration-500 group-hover:scale-110">
                Entrepreneur
              </span>
            </div>

            {/* Radio Button */}
            <div className="flex items-center gap-2">
              <div
                className={`h-6 w-6 rounded-full border-2 p-1 ${
                  selectedType === "entrepreneur"
                    ? "border-[#6883da]"
                    : "border-[#D4D4D8]"
                }`}
              >
                {selectedType === "entrepreneur" && (
                  <div className="h-full w-full rounded-full bg-[#6883da]" />
                )}
              </div>
            </div>
          </button>
          <button
            className="group flex w-full items-center justify-between rounded-[16px] border-2 border-[#D4D4D8] bg-white p-4 transition-all duration-500 hover:border-2 hover:border-[#6883da] hover:bg-gray-50"
            onClick={() => {
              setSelectedType("investor");
            }}
          >
            <div className="flex items-center gap-3">
              <div className="overflow-hidden rounded-[5px] bg-[#E5EBFF] p-1 transition-colors duration-500 group-hover:bg-[#6883da]/60">
                <Image
                  alt="entrepreneur"
                  loader={loader}
                  src="/svg/briefcase icon.svg"
                  width={40}
                  height={40}
                  className="h-8 w-8 rounded-[5px] object-cover transition-transform duration-500 group-hover:scale-150"
                />
              </div>

              <span className="text-[20px] font-semibold text-[#0A0A0B] transition-transform duration-500 group-hover:scale-110">
                Investor
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`h-6 w-6 rounded-full border-2 p-1 ${
                  selectedType === "investor"
                    ? "border-[#6883da]"
                    : "border-[#D4D4D8]"
                }`}
              >
                {selectedType === "investor" && (
                  <div className="h-full w-full rounded-full bg-[#6883da]" />
                )}
              </div>
            </div>
          </button>
        </div>

        <button
          className="my-4 w-full rounded-[16px] bg-[#1443FF] py-4 text-center text-base font-semibold text-white"
          onClick={handleSelectedRole}
        >
          {isPending ? (
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-2 border-[#fff]" />
            </div>
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </>
  );
};

export default AccountType;
