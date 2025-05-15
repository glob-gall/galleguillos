import Image from "next/image";
import Link from "next/link";


export default function ProjectsSection() {
  return (
    <section className="container flex mx-auto not-md: px-4 relative">
      <div className="flex flex-1 flex-col items-center">
      <Image
        alt="blur background"
        src="/blur.svg"
        height={572}
        width={648}
        className="absolute -z-10 -top-64"
      />
        <h3 className="text-3xl font-bold">
        Projetos em Destaque
        </h3>
        <p className="text-neutral-200">
        Esses são alguns dos trabalhos que desenvolvi e que posso divulgar.
        </p>

      <div className="flex flex-wrap gap-4 mt-8 items-center justify-center">

        <Link 
          href="https://www.qrcaes.com.br/"
          className="overflow-hidden rounded-lg border-neutral-600 border"
        >
          <Image
            alt="qrcaes"
            src="/pages/qrcaes.jpg"
            height={198}
            width={390}
            className="hover:scale-105 duration-200"
          />
        </Link>
        <Link 
          href="https://www.solarenergianorte.com.br/"
          className="overflow-hidden rounded-lg border-neutral-600 border"
        >
          <Image
            alt="solar norte"
            src="/pages/solar.jpg"
            height={198}
            width={390}
            className="hover:scale-105 duration-200"
          />
        </Link>
        <Link 
          href="https://taco.galleguillos.com.br/"
          className="overflow-hidden rounded-lg border-neutral-600 border"
        >
          <Image
            alt="taco"
            src="/pages/taco.jpg"
            height={198}
            width={390}
            className="hover:scale-105 duration-200"
          />
        </Link>
        <Link 
          href="https://github.com/glob-gall/investimentos" 
          className="overflow-hidden rounded-lg border-neutral-600 border"
        >
          <Image
            alt="invest"
            src="/pages/invest.jpg"
            height={198}
            width={390}
            className="hover:scale-105 duration-200"
          />
        </Link>
        <Link 
          href="https://github.com/glob-gall/daily-tasks" 
          className="overflow-hidden rounded-lg border-neutral-600 border"
        >
          <Image
            alt="daily tasks"
            src="/pages/dailytasks.jpg"
            height={198}
            width={390}
            className="hover:scale-105 duration-200"
          />
        </Link>
        <Link 
          href="https://github.com/glob-gall/utfpr" 
          className="overflow-hidden rounded-lg border-neutral-600 border"
        >
          <Image
            alt="trabalhos academicos"
            src="/pages/utfpr.jpg"
            height={198}
            width={390}
            className="hover:scale-105 duration-200"
          />
        </Link>

      </div>

      </div>
    </section>
  )
}