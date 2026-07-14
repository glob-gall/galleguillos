import Link from "next/link";
import { ReactNode } from "react";

type ContactProps = {
  icon: ReactNode;
  link: string;
  text: string;
};
export default function Contact({ icon, link, text }: ContactProps) {
  return (
    <div className="flex flex-row items-center gap-1">
      <Link
        href={link}
        target="_blank"
        className=" hover:bg-zinc-700/30 p-1 rounded transition"
      >
        {icon}
      </Link>
      <span className="text-zinc-300 text-sm">{text}</span>
    </div>
  );
}
