import { ProjectOverviewHeader } from "@/app/components/project/ProjectOverviewHeader";
import ProjectOverview from "@/app/components/ProjectOverview";

const page = () => {
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <ProjectOverviewHeader />
      <ProjectOverview />
    </div>
  );
};

export default page;
