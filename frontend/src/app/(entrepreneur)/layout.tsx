"use client";

import { LeftSidebar } from "@/app/components/dashboard/LeftSidebar";
import { RightSidebar } from "@/app/components/dashboard/RightSidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const sidebarLinks = [
    {
      icon: "/svg/dashboard.svg",
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: "/svg/archive-book.svg",
      label: "Orders",
      href: "/orders",
    },
    {
      icon: "/svg/IconSet.svg",
      label: "Projects",
      href: "/projects",
    },
    {
      icon: "/svg/profile-circle.svg",
      label: "Profile",
      href: "/profile",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <LeftSidebar />
      {/* Main Content */}
      <main className="ml-64 flex-1">
        {/* Top Navigation */}
        <nav className="sticky top-0 z-30 border-b border-[#D4D4D8] bg-[#FAFAFA]">
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-2">
              <Image
                src="/svg/archive-h.svg"
                alt="Dashboard"
                width={28}
                height={28}
              />
              {pathname === "/dashboard" && (
                <>
                  <span className="text-[#71717A]">Dashboard</span>
                  <span className="text-[#71717A]">/</span>
                  <span>Home</span>
                </>
              )}

              {pathname === "/orders" && (
                <>
                  <span className="text-[#71717A]">Funding Orders</span>
                </>
              )}
              {pathname === "/projects" && (
                <>
                  <span className="text-[#71717A]">Projects</span>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex">
          <div className="flex-1">{children}</div>
        </div>
      </main>
      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default DashboardLayout;
