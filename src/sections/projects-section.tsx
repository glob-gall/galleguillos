import Image from "next/image";


export default function ProjectsSection() {
  return (
    <section className="container flex mx-auto not-md: px-4 mb-28">
      <div className="flex flex-1 flex-col items-center">
        <h3 className="text-3xl font-bold">
        Projetos em Destaque
        </h3>
        <p className="text-neutral-400">
        Esses são alguns dos trabalhos que desenvolvi e que posso divulgar.
        </p>

      <div className="flex flex-wrap gap-4 mt-8">


        <Image
          alt="qrcaes"
          src="/pages/qrcaes.jpg"
          height={198}
          width={390}
          className=" rounded-lg border-neutral-600 border-2"
        />
        <Image
          alt="solar norte"
          src="/pages/solar.jpg"
          height={198}
          width={390}
          className=" rounded-lg border-neutral-600 border-2"
        />
        <Image
          alt="taco"
          src="/pages/taco.jpg"
          height={198}
          width={390}
          className=" rounded-lg border-neutral-600 border-2"
        />

      </div>

      </div>
    </section>
  )
}