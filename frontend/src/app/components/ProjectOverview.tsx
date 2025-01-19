"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/seeds";

const ProjectOverview = () => {
  return (
    <div className="rounded-[24px] bg-[#F2F2F3] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[24px] font-semibold">Projects</h2>
        <Link
          href="/projects"
          className="rounded-[4px] bg-[#1443FF] px-4 py-2 text-[12px] font-medium leading-[12px] text-white"
        >
          See All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.name}`}
            key={project.name}
            className="rounded-[16px] bg-white p-6"
          >
            <div className="mb-6">
              <Image
                src={project.logo}
                alt={project.name}
                width={400}
                height={200}
                className="w-full rounded-[12px]"
              />
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 overflow-hidden rounded-[8px]">
                  <Image
                    src={project.icon}
                    alt={project.name}
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-[16px] font-semibold">
                  {project.name}
                </span>
              </div>
              <button className="rounded-full p-2 hover:bg-gray-50">
                <Image
                  src="/svg/go.svg"
                  alt="View Details"
                  width={32}
                  height={32}
                />
              </button>
            </div>

            <p className="line-clamp-3 text-[13px] font-normal leading-[18.2px] text-[#7E7E8B]">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
