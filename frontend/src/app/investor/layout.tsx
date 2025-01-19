"use client";

import { LeftSidebar } from "@/app/components/dashboard/LeftSidebar";
import { RightSidebar } from "@/app/components/dashboard/RightSidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

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
              {pathname === "/investor/dashboard" && (
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
              {pathname.includes("explore") && (
                <>
                  <span className="text-[#71717A]">Explore</span>
                </>
              )}
              {pathname.includes("portfolio") && (
                <>
                  <span className="text-[#71717A]">Portfolio</span>
                </>
              )}
              {pathname.includes("profile") && (
                <>
                  <span className="text-[#71717A]">Profile</span>
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
