import { projects } from "@/app/lib/seeds";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function RelevantFiles({ projectName }: { projectName: string }) {
  const project = projects.find((project) => project.name === projectName);
  const files = [
    { name: "Pitch Deck", icon: project?.icon },
    { name: "Road Map", icon: project?.icon },
  ];

  return (
    <div className="w-full space-y-4 rounded-[16px] bg-white p-4">
      <h2 className="text-base font-medium text-gray-900">Relevant Files</h2>
      <div className="space-y-2">
        {files.map((file, index) => (
          <Card
            key={index}
            className="flex items-center justify-between bg-[#F2F2F3] p-2 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-[8px]">
                <Image
                  src={file.icon || "/placeholder.svg"}
                  alt="project-icon"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-base font-semibold">{file.name}</span>
            </div>

            <button className="rounded-full p-2 hover:bg-gray-50">
              <Image
                src="/svg/go.svg"
                alt="View Details"
                width={32}
                height={32}
              />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
