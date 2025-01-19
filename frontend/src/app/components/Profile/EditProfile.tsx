"use client";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import AccountForm from "../AccountForm";
import ProfileCard from "./ProfileCard";

const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="rounded-[24px] bg-[#F2F2F3] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[24px] font-semibold">
          {isEditing ? "Edit Profile" : "Profile"}
        </h2>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant="primary"
          className="flex w-auto items-center gap-1 leading-[12px]"
        >
          {isEditing ? (
            <>
              <GoArrowLeft className="text-white" /> Back
            </>
          ) : (
            "Edit Profile"
          )}
        </Button>
      </div>
      <div className="space-y-4 overflow-hidden rounded-[16px] bg-white p-6">
        {isEditing ? <AccountForm /> : <ProfileCard />}
      </div>
    </div>
  );
};

export default EditProfile;
