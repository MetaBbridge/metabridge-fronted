"use client";

import { abi } from "@/abi/abi";
import {
  useAccount,
  useBalance,
  useConnect,
  useSendTransaction,
  useContract,
  useReadContract,
} from "@starknet-react/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CONTRACT_ADDRESS } from "../lib/constant";

const ConnectWalletWidget = () => {
  const { address, status } = useAccount();

  const { data } = useBalance({
    address: address,
    enabled: !!address,
    watch: true,
  });
  const { connectors, connect } = useConnect();
  const router = useRouter();

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

  useEffect(() => {
    //@ts-ignore
    if (role === BigInt(1)) {
      router.push("/dashboard");
    } else if (role === BigInt(2)) {
      router.push("/investor/dashboard");
    }
  }, [role]);
  const loader = ({ src }: { src: string }) => {
    return src;
  };

  if (status === "disconnected") {
    return (
      <div className="space-y-4">
        {connectors.slice(0, 2).map((connector) => {
          return (
            <button
              className="group flex w-full items-center justify-between rounded-[16px] border-2 border-[#D4D4D8] bg-white p-4 transition-all duration-500 hover:border-2 hover:border-[#6883da] hover:bg-gray-50"
              onClick={() => {
                connect({ connector });
                localStorage.setItem("lastUsedConnector", connector.name);
              }}
            >
              <div className="flex items-center gap-3">
                <div className="overflow-hidden rounded-[5px] bg-[#E5EBFF] p-1 transition-colors duration-500 group-hover:bg-[#6883da]/60">
                  <Image
                    alt={connector.name}
                    loader={loader}
                    src={
                      typeof connector.icon === "object"
                        ? connector.icon.light
                        : connector.icon
                    }
                    width={40}
                    height={40}
                    className="h-8 w-8 rounded-[5px] object-cover transition-transform duration-500 group-hover:scale-150"
                  />
                </div>

                <span className="text-base font-semibold text-[#0A0A0B] transition-transform duration-500 group-hover:scale-110">
                  {connector.name}
                </span>
              </div>
              {connector.name === "argentX" && (
                <span className="rounded-[8px] border-b-2 border-l border-r border-t border-black bg-[#00FF85] p-2 text-[10px] font-medium text-[#52525B]">
                  Recommended
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="space-y-4">
        <div className="flex w-full items-center justify-between rounded-[16px] border border-[#E5EBFF] bg-white p-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full">
              <img
                src="/assets/wallet icon.svg"
                alt="Wallet Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-[#0A0A0B]">
                {address?.slice(0, 6)}****{address?.slice(-4)}
              </span>
              <span className="text-base font-medium text-[#7E7E8B]">
                Balance: ${data?.formatted || "0.00"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-[8px] bg-[#99FFC7] px-3 py-1 text-sm font-medium text-[#027A48]">
            <Image
              src="/svg/check-circle.svg"
              alt="Check"
              width={16}
              height={16}
            />
            Connected
          </div>
        </div>

        <button
          className="w-full rounded-[16px] bg-[#1443FF] py-4 text-center text-base font-semibold text-white"
          onClick={() => {
            router.push("/connect/account-type");
          }}
        >
          Continue
        </button>
      </div>
    );
  }
};

export default ConnectWalletWidget;
