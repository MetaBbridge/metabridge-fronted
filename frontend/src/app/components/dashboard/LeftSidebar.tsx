"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const LeftSidebar = () => {
  const pathname = usePathname();

  const sidebarLinks = useMemo(
    () =>
      pathname.includes("/investor")
        ? [
            {
              icon: "/svg/dashboard.svg",
              label: "Dashboard",
              href: "/investor/dashboard",
            },
            {
              icon: "/svg/archive-book.svg",
              label: "Explore",
              href: "/investor/explore",
            },
            {
              icon: "/svg/IconSet.svg",
              label: "Portfolio",
              href: "/investor/portfolio",
            },
            {
              icon: "/svg/profile-circle.svg",
              label: "Profile",
              href: "/investor/profile?type=investor",
            },
          ]
        : [
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
          ],
    [pathname],
  );

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-[#D4D4D8] bg-[#FAFAFA]">
      <div className="flex h-full flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="p-4">
            <Image
              src="/assets/logo-horizontal.svg"
              alt="MetaBridge"
              width={154}
              height={32}
            />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 p-4">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-3 rounded-[12px] px-3 py-4 text-base leading-[16px] ${
                  pathname.includes(link.href) ||
                  pathname === link.href ||
                  link.href.includes(pathname)
                    ? "bg-[#1443FF] font-semibold text-white"
                    : "font-normal text-black hover:bg-gray-100"
                }`}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <span className="transition-transform duration-1000 group-hover:translate-x-2">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section - Will stick to bottom */}
        <div className="p-4">
          <div className="relative rounded-[16px] border border-[#D4D4D8] bg-white p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
            {/* Logo Image */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <Image
                src="/assets/logo3d.png"
                alt="MetaBridge 3D"
                width={80}
                height={80}
                className="drop-shadow-xl"
              />
            </div>

            <div className="mt-8 text-center">
              <h3 className="mb-2 text-[16px] font-semibold leading-[19px] text-black">
                Empower Your Future
              </h3>
              <p className="mb-4 text-[12px] font-normal leading-[14px] text-[#7E7E8B]">
                Pitch smarter, grow faster, and secure your next funding.
              </p>
              <button className="absolute -bottom-4 left-1/2 w-auto -translate-x-1/2 rounded-[4px] border border-[#D4D4D8] bg-[#1443FF] px-4 py-2 text-[12px] font-medium text-white">
                Get Started
              </button>
            </div>
          </div>

          <button className="mt-10 flex w-full items-center gap-2 rounded-[12px] border-none p-3 text-[16px] font-normal leading-[16px] text-black">
            <Image
              src="/svg/push-left.svg"
              alt="Collapse"
              width={24}
              height={24}
            />
            Collapse
          </button>
        </div>
      </div>
    </aside>
  );
};
