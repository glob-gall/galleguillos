import { Github } from "@/components/icon/github";
import { Linkedin } from "@/components/icon/linkedin";
import { Whatsapp } from "@/components/icon/whatsapp";
import { StarParticle } from "@/components/StarParticle";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="container flex mx-auto not-md: px-4">

      <div className="flex flex-1 gap-12 flex-col md:flex-row">

        <div className="md:w-1/2 lg:w-1/3 gap-4 flex flex-col">

          <div className="flex items-center gap-4">
            <Image
              alt="Luis Felipe Galleguillos Campos"
              src="/profile.jpg"
              height={84}
              width={84}
              className="rounded-full"
            />

            <div className="flex flex-col">
              <h4 className="text-3xl font-bold">
              Luis Galleguillos
              </h4>
              <p className="text-neutral-400 text-xl">
              Desenvolvedor Full-Stack
              </p>
            </div>

          </div>


          <div>
            <p className="text-zinc-400 text-justify">
              Desenvolvedor Full-Stack com foco em TypeScript, React, Next.js e NestJS. 
              Formação em Ciência da Computação na UTFPR. 
              Experiência em aplicações web, APIs, Testes de Sotware e metodologias ágeis
            </p>


            <div className="flex gap-2 mt-3 items-center">
              
              <Link className=" relative flex  gap-3 py-2 px-5 hover:bg-neutral-300 bg-neutral-100 rounded-full duration-200" href="https://wa.me/+5549991075283">
                <StarParticle className="top-0 -left-3 scale-75 [animation-delay:0s]"/>
                <StarParticle className="-top-3 right-1 scale-[40%] [animation-delay:1s]"/>
                <StarParticle className="-top-2 right-10 scale-50 [animation-delay:2s]"/>
                <StarParticle className="top-7 rigt-0 scale-[35%] [animation-delay:6s]"/>
                <StarParticle className="top-3 -right-2 scale-50 [animation-delay:3s]"/>
                <Whatsapp className="text-neutral-900" fontSize={22}/>
                <span className="text-neutral-900" >
                  WhatsApp
                </span>
              </Link>
                
              <Link className="p-2 hover:bg-secondary rounded-full" href="https://www.linkedin.com/in/luis-felipe-galleguillos/">
                <Linkedin fontSize={24} />
              </Link>

              <Link className="p-2 hover:bg-secondary rounded-full" href="https://github.com/glob-gall">
                <Github fontSize={24}/>
              </Link>

              <Link className="p-2 hover:bg-secondary rounded-full" href="mailto:luisfelipegalleguillos@hotmail.com">
                <Mail className="text-3xl"/>
              </Link>
              
            </div>
          </div>

        </div>

        <div className="bg-zinc-100 flex-1 rounded-3xl overflow-hidden relative flex items-center justify-center flex-col min-h-[120px]">

              <Image
                alt="Luis Felipe Galleguillos linkedin"
                src="/colorful.svg"
                height={256}
                width={256}
                className="absolute top-0 left-0 w-[86px] sm:w-[124px] lg:w-[256px]"
              />
              <Image
                alt="Luis Felipe Galleguillos linkedin"
                src="/colorful-2.svg"
                height={256}
                width={256}
                className="absolute bottom-0 right-0 w-[86px] sm:w-[124px] lg:w-[256px]"
              />
              <h3 className="text-neutral-900 font-bold text-xl z-20 ">
                Vamos trabalhar juntos?
              </h3>
              <span className="text-neutral-700 z-20 font-bold">
                Freelas | Parcerias | Projetos
              </span>
        </div>
      
      </div>

    </section>
  )
}