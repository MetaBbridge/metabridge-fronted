export const ProjectOverviewHeader = () => {
  return (
    <div className="mb-5">
      {/* Overview Section */}
      <h1 className="mb-3 text-[24px] font-semibold">Overview</h1>
      <div className="space-y-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-[16px] border border-b-[4px] border-black bg-[#FFE0E0] p-4">
            <h3 className="mb-2 text-sm font-medium transition-transform duration-1000 hover:translate-x-2">
              Total Investments
            </h3>
            <p className="hover-bounce text-[24px] font-semibold hover:cursor-default">
              90,000.00
            </p>
          </div>
          <div className="rounded-[16px] border border-b-[4px] border-black bg-[#E0E7FF] p-4">
            <h3 className="mb-2 text-sm font-medium transition-transform duration-1000 hover:translate-x-2">
              Funding Orders
            </h3>
            <p className="hover-bounce text-[24px] font-semibold hover:cursor-default">
              3
            </p>
          </div>
          <div className="rounded-[16px] border border-b-[4px] border-black bg-[#FFEFD7] p-4">
            <h3 className="mb-2 text-sm font-medium transition-transform duration-1000 hover:translate-x-2">
              Requested funds (Approved)
            </h3>
            <p className="hover-bounce text-[24px] font-semibold hover:cursor-default">
              22,0000.00
            </p>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-[16px] border border-b-[4px] border-black bg-[#FFEED6] p-4">
            <h3 className="mb-2 text-sm font-medium transition-transform duration-1000 hover:translate-x-2">
              Projects
            </h3>
            <p className="hover-bounce text-[24px] font-semibold hover:cursor-default">
              3
            </p>
          </div>
          <div className="rounded-[16px] border border-b-[4px] border-black bg-[#EBEBFF] p-4">
            <h3 className="mb-2 text-sm font-medium transition-transform duration-1000 hover:translate-x-2">
              Milestones
            </h3>
            <p className="hover-bounce text-[24px] font-semibold hover:cursor-default">
              15
            </p>
          </div>
          <div className="rounded-[16px] border border-b-[4px] border-black bg-[#E0FFEE] p-4">
            <h3 className="mb-2 text-sm font-medium transition-transform duration-1000 hover:translate-x-2">
              Completed Milestones
            </h3>
            <p className="hover-bounce text-[24px] font-semibold hover:cursor-default">
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
