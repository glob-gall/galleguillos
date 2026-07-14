import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type ExternalLinkProps = {
  icon: ReactNode;
  link: string;
  text: string;
};
export default function ExternalLink({ icon, link, text }: ExternalLinkProps) {
  return (
    <Link
      className="flex flex-row items-center hover:bg-zinc-700/30 p-1 transition rounded"
      href={link}
      target="_blank"
    >
      {icon}
      <span className="text-zinc-300 text-sm ml-2">{text}</span>
      <ArrowUpRight className="text-zinc-400 mb-2" size={12} />
    </Link>
  );
}
