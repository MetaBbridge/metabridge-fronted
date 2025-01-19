import { OverviewCard } from "@/app/components/dashboard/Overview";
import ProjectDetailSection from "@/app/components/project/ProjectDetailSection";
import ProjectMilestonesSection from "@/app/components/project/ProjectMilestonesSection";

const page = ({ params }: { params: { name: string } }) => {
  const name = decodeURIComponent(params.name);

  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <OverviewCard
          title="Total Investments"
          value="50,000.00"
          style="bg-[#FFE0E0]"
        />
        <OverviewCard title="Funding orders" value="2" style="bg-[#E0E7FF]" />
        <OverviewCard
          title="Requested funds (Approved)"
          value="10,000.00"
          style="bg-[#FFEFD7]"
        />
        <OverviewCard title="Investors" value="6" style="bg-[#E0FFEE]" />
        <OverviewCard title="Milestones" value="5" style="bg-[#E0FFEE]" />
        <OverviewCard
          title="Completed Milestones"
          value="2"
          style="bg-[#E0FFEE]"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 rounded-[24px] bg-[#F2F2F3] p-4">
        <ProjectDetailSection id={name} />
        <ProjectMilestonesSection projectName={name} />
      </div>
    </div>
  );
};

export default page;
