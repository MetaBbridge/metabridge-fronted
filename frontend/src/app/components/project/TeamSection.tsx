import React from "react";
import { ProfileCard } from "./ProfileCard";

const team = [
  {
    name: "Ukpe, Jacob Emmanuel",
    role: "Product Designer/Manager",
    image: "/assets/profile-pic.png",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      telegram: "#",
    },
  },
  {
    name: "Mahmud Khan",
    role: "Blockchain Developer",
    image: "/assets/user.png",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      telegram: "#",
    },
  },
  {
    name: "Silver Brantis",
    role: "Fullstack Developer",
    image: "/assets/user.png",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      telegram: "#",
    },
  },
  {
    name: "Ukpe, Jacob Emmanuel",
    role: "Product Designer/Manager",
    image: "/assets/profile-pic.png",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      telegram: "#",
    },
  },
  {
    name: "Mahmud Khan",
    role: "Blockchain Developer",
    image: "/assets/user.png",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      telegram: "#",
    },
  },
  {
    name: "Silver Brantis",
    role: "Fullstack Developer",
    image: "/assets/user.png",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      telegram: "#",
    },
  },
];
const TeamSection = () => {
  return (
    <div>
      <div className="grid gap-6 rounded-[8px] bg-[#F2F2F3] p-2 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <ProfileCard
            key={i}
            name={member.name}
            role={member.role}
            image={member.image}
            socials={member.socials}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
