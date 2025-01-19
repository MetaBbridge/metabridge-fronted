import ProjectDetailSection from "@/app/components/project/ProjectDetailSection";
import ProjectMilestonesSection from "@/app/components/project/ProjectMilestonesSection";
import { ProjectOverviewHeader } from "@/app/components/project/ProjectOverviewHeader";

const page = ({ params }: { params: { name: string } }) => {
  const name = decodeURIComponent(params.name);

  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <ProjectOverviewHeader />
      <div className="grid grid-cols-3 gap-4 rounded-[24px] bg-[#F2F2F3] p-4">
        <ProjectDetailSection id={name} />
        <ProjectMilestonesSection projectName={name} />
      </div>
    </div>
  );
};

export default page;
