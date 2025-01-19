"use client";

import Overview, { OverviewCard } from "@/app/components/dashboard/Overview";
import ProjectOverview from "@/app/components/ProjectOverview";
import { projects } from "@/app/lib/seeds";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Order {
  id: number;
  date: string;
  projectName: string;
  description: string;
  founder: string;
  email: string;
  status: "Rejected" | "Requested" | "Approved";
}

const DashboardPage = () => {
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);

  const orders: Order[] = [
    {
      id: 1,
      date: "05/26/2024",
      projectName: "Sela Matrix",
      description: "Streamlining Decentralized Physical...",
      founder: "Jakes Layinton",
      email: "help@selamatrix.org",
      status: "Rejected",
    },
    {
      id: 2,
      date: "05/26/2024",
      projectName: "ZKSecure",
      description: "Revolutionizing Privacy with Zero-Knowledge...",
      founder: "Segun Salem",
      email: "info@zksecure.com",
      status: "Requested",
    },
    {
      id: 3,
      date: "05/26/2024",
      projectName: "BlockHaven",
      description: "A Secure and Decentralized Future f...",
      founder: "John Emiht Khan",
      email: "hello@blockhaven.io",
      status: "Approved",
    },
  ];

  // Handle individual checkbox changes
  const handleCheckboxChange = (orderId: number) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId],
    );
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    setSelectedOrders(
      selectedOrders.length === orders.length
        ? []
        : orders.map((order) => order.id),
    );
  };

  return (
    <div className="mx-auto max-w-[1400px] p-6">
      {/* Orders Section */}
      <div>
        <h1 className="mb-3 text-[24px] font-semibold">Overview</h1>
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          <OverviewCard
            title="Total Investments"
            value="20,000.00"
            style="bg-[#FFE0E0]"
          />
          <OverviewCard
            title="Projected ROI"
            value="22,000.00"
            style="bg-[#E0E7FF]"
          />
          <OverviewCard title="Orders" value="4" style="bg-[#FFEFD7]" />
          <OverviewCard title="Projects" value="2" style="bg-[#E0FFEE]" />
        </div>
      </div>

      {/* Projects Section */}
      <div className="rounded-[24px] bg-[#F2F2F3] p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[24px] font-semibold">Projects</h2>
          <Link
            href="/investor/explore"
            className="rounded-[4px] bg-[#1443FF] px-4 py-2 text-[12px] font-medium leading-[12px] text-white"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <Link
              href={`/investor/explore/${project.name}`}
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

              <div className="-mx-3 -mb-6 mt-4 space-y-4 rounded-[8px] border border-[#D4D4D8] bg-white px-3 pt-2">
                <div className="space-y-1">
                  <h3 className="text-[16px] font-semibold">
                    Project Milestone
                  </h3>
                  <p className="line-clamp-3 text-[13px] font-normal leading-[18.2px] text-[#7E7E8B]">
                    Go to market and market acceleration for USA and Canada
                    market and user incentive program.
                  </p>
                </div>

                <div className="mt- -mx-3 -mb-6 space-y-3 rounded-[8px] border border-[#D4D4D8] bg-[#F2F2F3] px-3 py-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[10px] font-normal text-[#656571]">
                      Total Request:
                    </span>
                    <span className="text-[10px] font-medium">
                      5,000.00 USD
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] font-normal text-[#656571]">
                      Token Equity Offer:
                    </span>
                    <span className="text-[10px] font-medium">
                      500,000. 83 SELA - 5%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] font-normal text-[#656571]">
                      Token Price:
                    </span>
                    <span className="text-[10px] font-medium">0.0254 USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] font-normal text-[#656571]">
                      Raise:
                    </span>
                    <span className="text-[10px] font-medium">
                      2,000 of 5,000 USDT
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
