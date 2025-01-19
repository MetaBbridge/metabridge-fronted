"use client";

import { useSearchParams } from "next/navigation";
import AccountForm from "./AccountForm";

// Form validation schema

const AccountSetup = () => {
  const searchParams = useSearchParams();
  const userType = searchParams.get("type");
  const isInvestor = userType === "investor";

  return (
    <div className="w-full">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full p-4">
          <img
            src="/assets/Icon.png"
            alt="Wallet"
            className="h-[135px] w-[135px]"
          />
        </div>
      </div>
      {/* Connect Text */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-[24px] font-semibold">
          {isInvestor
            ? "Invest smarter with MetaBridge AI"
            : "You’re one step away from your next funding"}
        </h1>
        <p className="text-base font-normal text-[#7E7E8B]">
          {isInvestor
            ? "Please complete form to continue"
            : "Complete account setup to continue"}
        </p>
      </div>

      <div className="rounded-[24px] bg-white/70 p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
        <AccountForm />
      </div>
    </div>
  );
};

export default AccountSetup;
