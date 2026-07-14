import { Github } from "@/components/icon/github";
import { Linkedin } from "@/components/icon/linkedin";
import { Whatsapp } from "@/components/icon/whatsapp";
import { DictionaryFooter } from "@/i18n/types";
import { Mail } from "lucide-react";
import Link from "next/link";

type FooterProps = {
  dict: DictionaryFooter;
};
export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-zinc-950 px-10 py-10  border-t border-zinc-600">
      <div className="container flex items-center justify-between mx-auto flex-col md:flex-row">
        <span className="text-neutral-500">
          {dict.rights1} &copy; {new Date().getFullYear()} - {dict.rights2}
        </span>

        <div className="flex gap-2 mt-3">
          <Link
            className="flex  gap-3 py-2 px-5 hover:bg-neutral-300 bg-neutral-100 rounded-full duration-200"
            href="https://wa.me/+5549991075283"
          >
            <Whatsapp className="text-neutral-900" fontSize={22} />
            <span className="text-neutral-900">WhatsApp</span>
          </Link>

          <Link
            className="p-2 hover:bg-secondary rounded-full"
            href="https://www.linkedin.com/in/luis-felipe-galleguillos/"
          >
            <Linkedin fontSize={24} />
          </Link>

          <Link
            className="p-2 hover:bg-secondary rounded-full"
            href="https://github.com/glob-gall"
          >
            <Github fontSize={24} />
          </Link>

          <Link
            className="p-2 hover:bg-secondary rounded-full"
            href="mailto:luisfelipegalleguillos@hotmail.com"
          >
            <Mail className="text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
