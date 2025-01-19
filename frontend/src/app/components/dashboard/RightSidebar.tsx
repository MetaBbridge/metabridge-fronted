"use client";
import { Button } from "@/components/ui/Button";
import { useConnect, useDisconnect } from "@starknet-react/core";
import { useAccount, useBalance } from "@starknet-react/core";
import Image from "next/image";

export const RightSidebar = () => {
  const { status } = useAccount();

  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const loader = ({ src }: { src: string }) => {
    return src;
  };
  return (
    <aside className="sticky top-0 h-screen w-80 overflow-y-auto border-l border-[#D4D4D8] bg-[#FAFAFA] p-6">
      {/* Wallet Section */}
      {status === "disconnected" && (
        <h3 className="mb-4 text-[16px] font-semibold transition-transform duration-1000 hover:translate-x-2">
          Connect Wallet
        </h3>
      )}
      <div className="mb-6 rounded-[16px] bg-white p-4 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
        {status === "connected" ? (
          <>
            <div className="mb-4 flex items-center gap-2">
              <Image
                width={28}
                height={28}
                src="/assets/wallet icon.svg"
                alt="Wallet Avatar"
                className="h-[28px] w-[28px] object-cover"
              />
              <div>
                <p className="text-[14px] font-medium">0x4cf****cd12</p>
                <p className="text-[12px] text-[#71717A]">
                  Balance: $20,000.62
                </p>
              </div>
              <button className="ml-auto">
                <Image
                  src="/svg/Arrow-Down.svg"
                  alt="More"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <button
              className="w-full rounded-[12px] bg-[#1443FF] py-3 text-[14px] font-medium text-white"
              onClick={() => disconnect()}
            >
              Disconnect Wallet
            </button>
          </>
        ) : (
          <div className="space-y-2">
            {connectors.slice(0, 2).map((connector) => {
              return (
                <button
                  key={connector.name}
                  className="group flex w-full items-center justify-between rounded-[16px] border-2 border-[#D4D4D8] bg-white p-1 transition-all duration-500 hover:border-2 hover:border-[#6883da] hover:bg-gray-50"
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
                        // @ts-ignore
                        src={connector.icon.dark}
                        width={28}
                        height={28}
                        className="h-[20px] w-[20px] rounded-[5px] object-cover transition-transform duration-500 group-hover:scale-150"
                      />
                    </div>

                    <span className="text-sm font-medium text-[#0A0A0B] transition-transform duration-500 group-hover:scale-110">
                      {connector.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Notifications */}
      <div className="mb-6">
        <h3 className="mb-4 text-[16px] font-semibold transition-transform duration-1000 hover:translate-x-2">
          Activities
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-[12px] bg-white p-2 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
            <div className="rounded-[8px]">
              <Image src="/svg/user.svg" alt="User" width={24} height={24} />
            </div>
            <div className="transition-transform duration-1000 hover:translate-x-2">
              <p className="text-[13px] font-normal">You have new investor</p>
              <p className="text-[10px] font-normal text-[#7E7E8B]">
                Today, 11:59 AM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-[12px] bg-white p-2 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
            <div className="rounded-[8px]">
              <Image
                src="/svg/archive.svg"
                alt="Check"
                width={24}
                height={24}
              />
            </div>
            <div className="transition-transform duration-1000 hover:translate-x-2">
              <p className="text-[13px] font-normal">Order Approved</p>
              <p className="text-[10px] font-normal text-[#7E7E8B]">
                Today, 11:59 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div>
        <h3 className="mb-4 text-[16px] font-semibold transition-transform duration-1000 hover:translate-x-2">
          Upcoming Milestones
        </h3>
        <div className="space-y-2">
          <div className="rounded-[12px] bg-white p-4 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/depin-logo.png"
                  alt="Sela Matrix"
                  width={32}
                  height={32}
                  className="rounded-[8px]"
                />
                <span className="text-[14px] font-medium">Sela Matrix</span>
              </div>
              <button className="rounded-full p-1 hover:bg-gray-50">
                <Image src="/svg/go.svg" alt="View" width={32} height={32} />
              </button>
            </div>
            <p className="mb-1 text-[14px] font-medium">Prototype Submission</p>
            <p className="mb-3 text-[12px] text-[#71717A]">Due date: Today</p>
            <Button variant="primary" fullWidth>
              Submit Milestone
            </Button>
          </div>

          <div className="rounded-[12px] bg-white p-4 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/blockchain-logo.png"
                  alt="BlockHaven"
                  width={32}
                  height={32}
                  className="rounded-[8px]"
                />
                <span className="text-[14px] font-medium">BlockHaven</span>
              </div>
              <button className="rounded-full p-1 hover:bg-gray-50">
                <Image src="/svg/go.svg" alt="View" width={32} height={32} />
              </button>
            </div>
            <p className="mb-1 text-[14px] font-medium">Prototype Submission</p>
            <p className="mb-3 text-[12px] text-[#71717A]">
              Due date: 02/11/2025
            </p>
            <Button variant="secondary" fullWidth>
              Submit Milestone
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
