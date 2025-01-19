import { ProjectMilestone } from "./ProjectMileStone";
import { RelevantFiles } from "./RelevantFile";
import { TokenEquity } from "./TokenEquity";
import { UsefulLinks } from "./UsefulLinks";

const ProjectMilestonesSection = ({ projectName }: { projectName: string }) => {
  return (
    <div className="space-y-8">
      <TokenEquity />

      <UsefulLinks />
      <RelevantFiles projectName={projectName} />
      <div className="space-y-4">
        <h2 className="text-base font-medium text-gray-900">
          Project Milestones
        </h2>
        <div className="space-y-4">
          <ProjectMilestone
            number={1}
            title="Prototype Submission"
            description="Our prototype demonstrates the core functionality and potential impact of our project, designed to address (specific problem/challenge)"
            funding={{
              amount: "5,000.00 USD",
              roi: "10,000.00 USD",
              startDate: "14/01/2025",
              endDate: "15/02/2025",
            }}
            kpis={[
              "A brief explanation of its purpose and benefits",
              "How it contributes to the project's overall goals",
              "Its unique advantage or innovative aspect",
            ]}
          />
          <ProjectMilestone
            number={2}
            title="Beta Testing"
            description="Our prototype demonstrates the core functionality and potential impact of our project, designed to address (specific problem/challenge)"
            funding={{
              amount: "5,000.00 USD",
              roi: "10,000.00 USD",
              startDate: "14/01/2025",
              endDate: "15/02/2025",
            }}
            kpis={[
              "A brief explanation of its purpose and benefits",
              "How it contributes to the project's overall goals",
              "Its unique advantage or innovative aspect",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectMilestonesSection;
