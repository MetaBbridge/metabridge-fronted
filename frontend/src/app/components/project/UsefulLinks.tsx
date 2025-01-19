import { Globe, Linkedin, Youtube, Github, Send } from "lucide-react";

export function UsefulLinks() {
  const links = [
    { icon: Globe, href: "#", label: "Website" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Send, href: "#", label: "Telegram" },
  ];

  return (
    <div className="w-full space-y-4 rounded-[16px] bg-white p-4">
      <h2 className="text-base font-medium text-gray-900">Useful Links</h2>
      <div className="flex gap-3">
        {links.map((Link, index) => (
          <a
            key={index}
            href={Link.href}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
            aria-label={Link.label}
          >
            <Link.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
