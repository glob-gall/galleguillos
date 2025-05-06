import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container flex mx-auto not-md: px-4">

      <div className="flex flex-1 gap-4 flex-col md:flex-row">

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


            <div className="flex gap-2 mt-3">
            <Link className="flex  gap-3 py-2 px-5 hover:bg-neutral-300 bg-neutral-100 rounded-full duration-200" href="https://wa.me/+5549991075283">
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

        </div>

        <div className="bg-zinc-100 flex-1 rounded-3xl overflow-hidden relative flex items-center justify-center flex-col min-h-[120px]">

              <Image
                alt="Luis Felipe Galleguillos linkedin"
                src="/colorful.svg"
                height={256}
                width={256}
                className="absolute top-0 left-0"
              />
              <Image
                alt="Luis Felipe Galleguillos linkedin"
                src="/colorful-2.svg"
                height={256}
                width={256}
                className="absolute bottom-0 right-0"
              />
              <h3 className="text-neutral-900 font-bold text-xl z-20">
                Vamos trabalhar juntos?
              </h3>
              <span className="text-neutral-700 z-20">
                Freelas | Parcerias | Projetos
              </span>
        </div>
      
      </div>

    </section>
  )
}