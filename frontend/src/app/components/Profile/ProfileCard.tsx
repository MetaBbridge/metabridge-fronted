"use client";
import { Button } from "@/components/ui/Button";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import AccountForm from "../AccountForm";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const location = {
  country: "Canada",
  region: "Manitoba",
  address: "No. 55 Old Force Avenue Manitoba, CA",
};

interface LocationTagProps {
  label: string;
}

function LocationTag({ label }: LocationTagProps) {
  return (
    <span className="inline-flex rounded-[8px] border border-[#D4D4D8] bg-white px-4 py-2 text-sm text-[#7E7E8B]">
      {label}
    </span>
  );
}
const ProfileCard = () => {
  return (
    <div className="space-y-4 overflow-hidden rounded-[16px] bg-white p-6">
      <div className="flex gap-6">
        {/* Profile Image */}
        <div className="relative h-[180px] w-[180px] shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/assets/profile-pic.png"
            alt="profile-pic"
            fill
            className="object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="space-y-4 py-2">
          <div className="space-y-1">
            <h2 className="text-[24px] font-semibold">Ukpe, Jacob Emmanuel</h2>
            <div className="flex flex-col gap-3">
              <p className="font-normal text-[#7E7E8B]">Jakes@metabridge.com</p>
              {true && (
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4 text-gray-600" />
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <LocationTag label={location.country} />
            <LocationTag label={location.region} />
            <LocationTag label={location.address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
