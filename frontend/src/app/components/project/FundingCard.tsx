"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface FundingOrderCardProps {
  status: "upcoming" | "ongoing";
  milestone: {
    number: number;
    description: string;
  };
  totalRequest: string;
  tokenEquityOffer: string;
  tokenPrice: string;
  raise: string;
  logo: any;
  icon: any;
  name?: string;
}

export function FundingOrderCard({
  status,
  milestone,
  totalRequest,
  tokenEquityOffer,
  tokenPrice,
  logo,
  icon,
  raise,
  name,
}: FundingOrderCardProps) {
  console.log({
    name,
  });
  const pathname = usePathname();
  const isInvestor = pathname.includes("investor");
  const isonPortfolio = pathname.includes("portfolio");
  const router = useRouter();
  const handleInvest = () => {
    router.push(`/investor/explore/${name}/invest`);
  };

  return (
    <div className="overflow-hidden rounded-t-[16px] bg-white">
      {/* Header Image */}
      <div className="relative h-[140px]">
        <div className="absolute inset-0">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="!h-full !w-full"
          />
        </div>
        {/* Logo Overlay */}
        <div className="absolute -bottom-6 left-3">
          <Image src={icon} alt="icon" width={32} height={32} />
        </div>
        {/* Status Badge */}
        <div className="absolute -bottom-8 right-4">
          {status === "upcoming" ? (
            <span className="rounded-[4px] bg-[#D4D4D8] p-1 text-[10px] font-medium text-white">
              Upcoming
            </span>
          ) : (
            <span className="rounded-full bg-[#FF6B6B] p-1 text-[10px] font-medium text-white">
              Ongoing Funding
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="rounded-b-[8px] border border-[#D4D4D8] px-3 pb-6 pt-8">
        <div className="mb-4 space-y-2">
          <h4 className="text-base font-semibold">Sela Matrix</h4>
          <p className="text-[13px] font-semibold text-[#7E7E8B]">
            Project Milestone {milestone.number} -
            <span className="font-normal">{milestone.description}</span>
          </p>
        </div>

        <div className="-mx-3 -mb-6 space-y-3 rounded-[8px] border border-[#D4D4D8] bg-[#F2F2F3] px-3 py-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Total Request:
            </span>
            <span className="text-[10px] font-medium">{totalRequest}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Token Equity Offer:
            </span>
            <span className="text-[10px] font-medium">{tokenEquityOffer}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Token Price:
            </span>
            <span className="text-[10px] font-medium">{tokenPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-normal text-[#656571]">
              Raise:
            </span>
            <span className="text-[10px] font-medium">{raise}</span>
          </div>
          {isInvestor && !isonPortfolio && (
            <Button onClick={handleInvest} className="w-full">
              <span>Invest</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
