"use client";
import { useAccount } from "@starknet-react/core";
import ConnectWalletWidget from "./ConnectWalletWidget";

const ConnectWallet = () => {
  const { address, status } = useAccount();
  return (
    <>
      <div className="mb-6 flex justify-center">
        <div className="rounded-full p-4">
          <img
            src="/assets/OTP Visual.png"
            alt="Wallet"
            className="h-[135px] w-[135px]"
          />
        </div>
      </div>
      {/* Connect Text */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-[24px] font-semibold">Connect Wallet</h1>
        <p className="text-base font-normal text-[#7E7E8B]">
          Connect a wallet to continue
        </p>
      </div>
      {/* Wallet Options */}
      <div className="rounded-[24px] bg-white/70 p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
        <ConnectWalletWidget />

        {/* Terms */}
        {status === "disconnected" && (
          <div className="mt-5 flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
            />
            <p className="text-sm font-normal text-[#7E7E8B]">
              Read and accept{" "}
              <a href="#" className="font-normal text-[#1443FF]">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="font-normal text-[#1443FF]">
                Privacy Policy
              </a>
            </p>
          </div>
        )}
      </div>
      {/* Skip Option */}
      {status === "disconnected" && (
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-[#7E7E8B]">
            Connect later?{" "}
            <a href="#" className="font-medium text-[#1443FF]">
              Skip and Continue
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default ConnectWallet;
