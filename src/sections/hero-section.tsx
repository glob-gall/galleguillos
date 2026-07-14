import Contact from "@/components/contact";
import ExternalLink from "@/components/external-link";
import { Github } from "@/components/icon/github";
import { Instagram } from "@/components/icon/instagram";
import { Linkedin } from "@/components/icon/linkedin";
import { Whatsapp } from "@/components/icon/whatsapp";
import { DictionaryHero } from "@/i18n/types";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  dict: DictionaryHero;
};
export default function HeroSection({ dict }: HeroSectionProps) {
  return (
    <div className="container  mx-auto px-10 gap-2 pb-20 grid md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto]">
      <div className="flex flex-col bg-zinc-700/20 border p-4 rounded-lg gap-4">
        <div>
          <h3 className="font-bold text-zinc-200">Links</h3>
          <ExternalLink
            icon={<Linkedin className="text-zinc-400" fontSize={18} />}
            link="https://www.linkedin.com/in/luis-felipe-galleguillos/"
            text="Linkedin"
          />
          <ExternalLink
            icon={<Github className="text-zinc-400" fontSize={18} />}
            link="https://github.com/glob-gall"
            text="Github"
          />
          <ExternalLink
            icon={
              <Instagram
                className="text-zinc-400 bg-zinc-400 p-[0.6px] rounded"
                fontSize={18}
              />
            }
            link="https://www.instagram.com/luisf.galleguillos/"
            text="Instagram"
          />
        </div>
        <div>
          <h3 className="font-bold text-zinc-200">{dict.contacts}</h3>
          <Contact
            icon={<Whatsapp className="text-zinc-400" fontSize={18} />}
            link="https://wa.me/+5549991075283"
            text="+55 (49) 99107-5283"
          />
          <Contact
            icon={<Mail className="text-3xl text-zinc-400" size={18} />}
            link="mailto:luisfelipegalleguillos@gmail.com"
            text="luisfelipegalleguillos@gmail.com"
          />
        </div>
      </div>

      <div className="grid sm:items-center gap-2 bg-zinc-700/20 p-4 rounded-lg border">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Image
            alt="Luis Felipe Galleguillos Campos"
            src="/profile.jpg"
            height={128}
            width={128}
            className="rounded-lg w-[128px] h-[128px] sm:w-[84px] sm:h-[84px]"
          />

          <div className="">
            <h4 className="text-xl lg:text-3xl font-bold text-zinc-200">
              Luis Galleguillos
            </h4>
            <p className="text-zinc-500 text-xl">{dict.title}</p>
          </div>
        </div>

        <p className="text-zinc-400 text-justify">{dict.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:col-span-2 lg:col-span-1">
        <div className="flex flex-row gap-2">
          <Link
            className="flex-1 border bg-zinc-700/20 text-nowrap p-4 hover:bg-zinc-700/40 rounded-lg items-center justify-center flex transition"
            href="/doc/Luis_Galleguillos_Full_Stack_Developer.pdf"
            target="_blank"
          >
            <span className="text-zinc-300">🇺🇲 Resume</span>
          </Link>
          <Link
            className="flex-1 border bg-zinc-700/20 text-nowrap p-4 hover:bg-zinc-700/40 rounded-lg items-center justify-center flex transition"
            href="/doc/Luis_Galleguillos_Desenvolvedor_Full_Stack.pdf"
            target="_blank"
          >
            <span className="text-zinc-300">🇧🇷 Currículo</span>
          </Link>
        </div>
        <div className="flex-1 bg-zinc-100 rounded-lg  flex items-center justify-center p-4 relative overflow-hidden">
          <Image
            alt="Luis Felipe Galleguillos linkedin"
            src="/colorful.svg"
            height={48}
            width={48}
            className="absolute top-0 left-0 max-h-full"
          />
          <Image
            alt="Luis Felipe Galleguillos linkedin"
            src="/colorful-2.svg"
            height={48}
            width={48}
            className="absolute bottom-0 right-0 max-h-full"
          />
          <span className="text-zinc-800 font-bold ">{dict.banner_title}</span>
        </div>
      </div>
    </div>
  );
}
