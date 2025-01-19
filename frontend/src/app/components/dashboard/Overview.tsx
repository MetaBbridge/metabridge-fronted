import React from "react";

export const OverviewCard = ({
  title,
  value,
  style,
}: {
  title: string;
  value: string;
  style?: string;
}) => {
  return (
    <div
      className={`rounded-[16px] border border-b-[4px] border-black p-4 ${style}`}
    >
      <h3 className="mb-2 text-sm font-medium transition-transform duration-1000 hover:translate-x-2">
        {title}
      </h3>
      <p className="hover-bounce text-[24px] font-semibold hover:cursor-default">
        {value}
      </p>
    </div>
  );
};

const Overview = () => {
  return (
    <div>
      {/* Overview Section */}
      <h1 className="mb-3 text-[24px] font-semibold">Overview</h1>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <OverviewCard title="Projects" value="0" style="bg-[#FFE0E0]" />
        <OverviewCard title="Orders" value="0" style="bg-[#E0E7FF]" />
        <OverviewCard
          title="Completed Milestones"
          value="0"
          style="bg-[#FFEFD7]"
        />
      </div>
    </div>
  );
};

export default Overview;
