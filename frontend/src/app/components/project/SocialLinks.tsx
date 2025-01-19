import { Github, Linkedin, Send, Twitter } from "lucide-react";

interface SocialLinksProps {
  linkedin?: string;
  github?: string;
  twitter?: string;
  telegram?: string;
}

export function SocialLinks({
  linkedin,
  github,
  twitter,
  telegram,
}: SocialLinksProps) {
  return (
    <div className="flex gap-2">
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-50"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-4 w-4 text-gray-600" />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-50"
          aria-label="GitHub Profile"
        >
          <Github className="h-4 w-4 text-gray-600" />
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-50"
          aria-label="Twitter Profile"
        >
          <Twitter className="h-4 w-4 text-gray-600" />
        </a>
      )}
      {telegram && (
        <a
          href={telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-50"
          aria-label="Telegram Profile"
        >
          <Send className="h-4 w-4 text-gray-600" />
        </a>
      )}
    </div>
  );
}
