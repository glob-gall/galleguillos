import Image from "next/image";
import Link from "next/link";


export default function ProjectsSection() {
  return (
    <section className="container flex mx-auto not-md: px-4 ">
      <div className="flex flex-1 flex-col items-center">
        <h3 className="text-3xl font-bold">
        Projetos em Destaque
        </h3>
        <p className="text-neutral-400">
        Esses são alguns dos trabalhos que desenvolvi e que posso divulgar.
        </p>

      <div className="flex flex-wrap gap-4 mt-8 items-center justify-center">

        <Link href="https://www.qrcaes.com.br/">
          <Image
            alt="qrcaes"
            src="/pages/qrcaes.jpg"
            height={198}
            width={390}
            className=" rounded-lg border-neutral-600 border"
          />
        </Link>
        <Link href="https://www.solarenergianorte.com.br/">
          <Image
            alt="solar norte"
            src="/pages/solar.jpg"
            height={198}
            width={390}
            className=" rounded-lg border-neutral-600 border"
          />
        </Link>
        <Link href="https://taco.galleguillos.com.br/">
          <Image
            alt="taco"
            src="/pages/taco.jpg"
            height={198}
            width={390}
            className=" rounded-lg border-neutral-600 border"
          />
        </Link>

      </div>

      </div>
    </section>
  )
}