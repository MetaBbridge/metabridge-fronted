import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    telegram?: string;
  };
}

export function ProfileCard({ name, role, image, socials }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white p-3 shadow-sm">
      <div className="relative mb-4 h-[120px] w-full overflow-hidden rounded-lg border border-[#D4D4D8] bg-[#D4D4D8]">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name}'s profile picture`}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="mb-1 text-center text-base font-semibold">{name}</h3>
      <p className="mb-4 text-center text-[12px] font-medium text-[#7E7E8B]">
        {role}
      </p>
      <SocialLinks {...socials} />
    </div>
  );
}
