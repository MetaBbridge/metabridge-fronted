"use client";

import Overview from "@/app/components/dashboard/Overview";
import ProjectOverview from "@/app/components/ProjectOverview";
import Image from "next/image";
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
      <Overview />
      <div className="mb-8 rounded-[24px] bg-[#F2F2F3] p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[24px] font-semibold">Your Orders</h2>
          <button className="flex items-center gap-2 rounded-[4px] bg-[#1443FF] px-4 py-2 text-[12px] font-medium leading-[12px] text-white">
            <span>+</span> Create New Order
          </button>
        </div>

        <div className="overflow-hidden rounded-[16px] bg-white p-2">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="h-9 rounded-[8px] bg-[#F2F2F3]">
                <th className="p-4 text-left">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded-[4px] border-gray-300"
                    checked={selectedOrders.length === orders.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="whitespace-nowrap p-4 text-left text-sm font-medium text-gray-600">
                  No.s
                </th>
                <th className="whitespace-nowrap p-4 text-left text-sm font-medium text-gray-600">
                  Date
                </th>
                <th className="whitespace-nowrap p-4 text-left text-sm font-medium text-gray-600">
                  Project Name
                </th>
                <th className="whitespace-nowrap p-4 text-left text-sm font-medium text-gray-600">
                  Description
                </th>
                <th className="whitespace-nowrap p-4 text-left text-sm font-medium text-gray-600">
                  Founder
                </th>
                <th className="whitespace-nowrap p-4 text-left text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="whitespace-nowrap p-4 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="whitespace-nowrap p-4 text-left text-sm font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className={`border-t ${
                    selectedOrders.includes(order.id)
                      ? "bg-[#E5E6FF]"
                      : "bg-white"
                  }`}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded-[4px] border-gray-300"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleCheckboxChange(order.id)}
                    />
                  </td>
                  <td className="p-4 text-sm">{order.id}</td>
                  <td className="p-4 text-sm">{order.date}</td>
                  <td className="p-4 text-sm">{order.projectName}</td>
                  <td className="p-4 text-sm text-gray-600">
                    {order.description}
                  </td>
                  <td className="p-4 text-sm">{order.founder}</td>
                  <td className="p-4 text-sm">{order.email}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full px-[13px] py-2 text-[10px] font-medium text-white ${
                        order.status === "Rejected"
                          ? "bg-[#FF7970]"
                          : order.status === "Requested"
                            ? "bg-[#70ADFF]"
                            : "bg-[#84EBB3]"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2 rounded-[8px] border border-[#D4D4D8] bg-[#F2F2F3] p-1">
                      <button className="">
                        <Image
                          src={
                            selectedOrders.includes(order.id)
                              ? "/svg/edit-active.svg"
                              : "/svg/edit.svg"
                          }
                          alt="Edit"
                          width={20}
                          height={20}
                        />
                      </button>
                      <button className="">
                        <Image
                          src={
                            selectedOrders.includes(order.id)
                              ? "/svg/bin-active.svg"
                              : "/svg/bin.svg"
                          }
                          alt="Delete"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Projects Section */}
      <ProjectOverview />
    </div>
  );
};

export default DashboardPage;
