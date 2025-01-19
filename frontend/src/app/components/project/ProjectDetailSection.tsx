import { projects } from "@/app/lib/seeds";
import Image from "next/image";
import React from "react";
import { FundingOrderCard } from "./FundingCard";
import TeamSection from "./TeamSection";

const ProjectDetailSection = ({ id }: { id: string }) => {
  const project = projects.find((project) => project.name === id);
  if (!project) return <div>Project not found</div>;

  return (
    <div className="col-span-2 space-y-4">
      <div className="space-y-4 rounded-[16px] bg-white p-4">
        <div className="h-[140px] w-full rounded-[8px]">
          <Image
            src={project.logo}
            alt={project.name}
            width={200}
            height={200}
            className="h-full w-full"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-[8px]">
              <Image
                src={project.icon}
                alt={project.name}
                width={32}
                height={32}
              />
            </div>
            <span className="text-[20px] font-semibold">{project.name}</span>
          </div>
          <p className="text-[12px] font-normal leading-3 text-[#7E7E8B]">
            created: 01/13/2025
          </p>
        </div>
        <p className="text-left text-base font-normal text-[#7E7E8B]">
          Sela Matrix DePIN Manager is an all-in-one platform designed to
          simplify the deployment, management, and monetization of Decentralized
          Physical Infrastructure Networks (DePINs).
        </p>
        <div className="flex items-center gap-0.5">
          <div className="w-auto rounded-[24px] border-[1.5px] border-[#D4D4D8] p-2 text-[14px] font-medium">
            Blockchain
          </div>
          <div className="w-auto rounded-[24px] border-[1.5px] border-[#D4D4D8] p-2 text-[14px] font-medium">
            IoT
          </div>
          <div className="w-auto rounded-[24px] border-[1.5px] border-[#D4D4D8] p-2 text-[14px] font-medium">
            DeFi
          </div>
          <div className="w-auto rounded-[24px] border-[1.5px] border-[#D4D4D8] p-2 text-[14px] font-medium">
            Infrastructure
          </div>
        </div>
      </div>
      <div className="w-full space-y-4 rounded-[16px] bg-white p-4">
        <h2 className="text-[24px] font-semibold">Funding Orders</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <FundingOrderCard
            status="ongoing"
            logo={project.logo}
            name={project.name}
            icon={project.icon}
            milestone={{
              number: 1,
              description: "Prototype development and deployment",
            }}
            totalRequest="5,000.00 USD"
            tokenEquityOffer="500,000.83 SELA - 5%"
            tokenPrice="0.0254 USDT"
            raise="Coming soon"
          />
          <FundingOrderCard
            status="upcoming"
            logo={project.logo}
            icon={project.icon}
            name={project.name}
            milestone={{
              number: 1,
              description: "Prototype development and deployment",
            }}
            totalRequest="5,000.00 USD"
            tokenEquityOffer="500,000.83 SELA - 5%"
            tokenPrice="0.0254 USDT"
            raise="2,000 of 5,000 USDT"
          />
        </div>
        <div className="flex justify-center gap-2 pt-2">
          {[1, 2, 3].map((dot) => (
            <button
              key={dot}
              className={`h-2 w-2 rounded-full transition-colors ${
                dot === 3 ? "bg-gray-900" : "bg-gray-200"
              }`}
              aria-label={`Page ${dot}`}
            />
          ))}
        </div>
      </div>
      <div className="w-full space-y-4 rounded-[16px] bg-white p-4">
        <h2 className="text-[24px] font-semibold">Problem Satements</h2>
        <p className="text-[14px] font-normal leading-[19.6px] text-[#656571]">
          The adoption and management of Decentralized Physical Infrastructure
          Networks (DePINs) face significant challenges due to the complexity of
          coordinating physical assets with blockchain technology. Operators and
          participants struggle with: Fragmented Management: Lack of centralized
          tools for onboarding, monitoring, and optimizing physical
          infrastructure assets across decentralized networks. Incentive
          Misalignment: Inefficient or unclear reward systems, leading to
          suboptimal participation and reduced network growth. Data Transparency
          and Security: Difficulty in ensuring real-time, trustworthy data
          sharing while safeguarding sensitive information. Scalability and
          Accessibility: High technical barriers and infrastructure costs limit
          participation from small operators and emerging markets. These
          challenges hinder the scalability, efficiency, and economic potential
          of DePINs, leaving untapped opportunities for industries like IoT,
          energy grids, and shared connectivity networks. The DePIN Manager
          project aims to address these issues by providing a streamlined,
          user-friendly platform that bridges the gap between physical assets
          and blockchain networks, fostering collaboration, innovation, and
          sustainable growth.
        </p>
      </div>
      <div className="w-full space-y-4 rounded-[16px] bg-white p-4">
        <h2 className="text-[24px] font-semibold">
          Use Cases for DePIN Manager
        </h2>
        <div className="space-y-2 rounded-[8px] bg-[#F2F2F3] p-2">
          <h3 className="text-[16px] font-semibold leading-[22px]">
            1. Smart IoT Device Networks
          </h3>
          <p className="text-justify text-[14px] font-normal leading-[19.6px] text-[#656571]">
            Scenario: A decentralized network of smart sensors is deployed for
            real-time environmental monitoring in urban areas.How DePIN Manager
            Helps: Simplifies onboarding and registration of IoT devices to the
            blockchain. Provides real-time analytics to monitor device
            performance and data accuracy. Distributes tokenized rewards to
            contributors for maintaining and sharing high-quality data.
          </p>
        </div>
      </div>
      <div className="w-full space-y-4 rounded-[16px] bg-white p-4">
        <h2 className="text-[24px] font-semibold">Project Team</h2>
        <TeamSection />
      </div>
    </div>
  );
};

export default ProjectDetailSection;
