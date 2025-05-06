import {  Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 px-6 py-10  border-t border-zinc-600 ">
      <div className="container flex items-center justify-between mx-auto flex-col md:flex-row">

        <span className="text-neutral-500">
        Luis Galleguillos &copy; {new Date().getFullYear()}  - Todos os direitos reservados
        </span>

        <div className="flex gap-2 mt-3">
              <Link className="flex  gap-3 py-2 px-5 hover:bg-neutral-300 bg-neutral-100 rounded-full duration-200" href="https://api.whatsapp.com/send?phone=554999107528">
                  <Image
                    alt="Luis Felipe Galleguillos whatsapp"
                    src="/whatsapp.svg"
                    height={24}
                    width={24}
                    className=""
                  />
                  <span className="text-neutral-900">
                    WhatsApp
                  </span>
                </Link>

                <Link className="p-2 hover:bg-neutral-800 rounded-full duration-200" href="https://github.com/glob-gall">
                  <Image
                    alt="Luis Felipe Galleguillos github"
                    src="/github.svg"
                    height={24}
                    width={24}
                    className=" invert"
                  />
                </Link>

                <Link className="p-2 hover:bg-neutral-800 rounded-full duration-200" href="https://www.linkedin.com/in/luis-felipe-galleguillos/">
                  <Image
                    alt="Luis Felipe Galleguillos linkedin"
                    src="/linkedin.svg"
                    height={24}
                    width={24}
                    className=" invert"
                  />
                </Link>
                
                <Link className="p-2 hover:bg-neutral-800 rounded-full duration-200" href="mailto:luisfelipegalleguillos@hotmail.com">
                <Mail/>
                </Link>
                
        </div>
      </div>
    </footer>
  )
}