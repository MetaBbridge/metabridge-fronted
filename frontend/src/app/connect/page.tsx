"use client";

import { useAccount, useBalance, useConnect } from "@starknet-react/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

const loader = ({ src }: { src: string }) => {
  return src;
};
const Page = () => {
  const { connectors, connect } = useConnect();
  const { address, status } = useAccount();
  const { data, error } = useBalance({
    address: address,
    enabled: !!address,
    watch: true,
  });

  const router = useRouter();
  //   useEffect(() => {
  //     if (status === "disconnected") {
  //       // on disconnect
  //     } else if (status === "connected") {
  //       // on connect
  //     }
  //   }, [address, status]);

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
        {status === "disconnected" ? (
          <div className="space-y-4">
            {connectors.slice(0, 2).map((connector) => {
              const isSvg = connector.icon.light?.startsWith("<svg");
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
                        src={connector.icon.dark!}
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
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-[16px] border border-[#E5EBFF] bg-white p-4">
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
        )}

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

export default Page;
