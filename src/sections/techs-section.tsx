import { DictionaryTechs } from "@/i18n/types";
import Image from "next/image";

const techs = [
  {
    id: 0,
    name: "figma",
    title: "Figma",
    height: 80,
    width: 54,
  },
  {
    id: 1,
    name: "git",
    title: "Git & Github",
    height: 80,
    width: 80,
  },
  {
    id: 2,
    name: "linux",
    title: "Linux",
    height: 80,
    width: 66,
  },
  {
    id: 4,
    name: "nestjs",
    title: "NestJS",
    height: 80,
    width: 80,
  },
  {
    id: 5,
    name: "nextjs",
    title: "Next.js",
    height: 80,
    width: 132,
  },
  {
    id: 6,
    name: "nodejs",
    title: "Node.js",
    height: 80,
    width: 198,
  },

  {
    id: 8,
    name: "react",
    title: "React",
    height: 80,
    width: 90,
  },
  {
    id: 85,
    name: "react",
    title: "React Native",
    height: 80,
    width: 90,
  },
  {
    id: 9,
    name: "tailwind",
    title: "Tailwind",
    height: 80,
    width: 132,
  },
  {
    id: 10,
    name: "typescript",
    title: "Typescript",
    height: 80,
    width: 81,
  },
  {
    id: 11,
    name: "python",
    title: "Python",
    height: 80,
    width: 81,
  },
  {
    id: 12,
    name: "jest",
    title: "Jest",
    height: 80,
    width: 80,
  },
  {
    id: 13,
    name: "vitest",
    title: "Vitest",
    height: 80,
    width: 80,
  },
  {
    id: 14,
    name: "supabase",
    title: "Supabase",
    height: 80,
    width: 80,
  },
  {
    id: 3,
    name: "mongo",
    title: "MongoDB",
    height: 80,
    width: 82,
  },
  {
    id: 7,
    name: "postgres",
    title: "Postgres",
    height: 80,
    width: 77,
  },
  {
    id: 15,
    name: "docker",
    title: "Docker",
    height: 78,
    width: 108,
  },
  {
    id: 16,
    name: "svelte",
    title: "Svelte",
    height: 71,
    width: 62,
  },
];

type TechsSectionProps = {
  dict: DictionaryTechs;
};
export default function TechsSection({ dict }: TechsSectionProps) {
  return (
    <div className="container mx-auto relative ">
      <div className="mx-10 flex items-center justify-center pb-6">
        <h3 className="text-3xl font-bold">{dict.title}</h3>
      </div>
      <Image
        alt="blur background"
        src="/blur.svg"
        height={1080}
        width={1223}
        // height={572}
        // width={648}
        className="absolute w-full -top-1/3 -z-10"
      />
      <div className="z-50 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 mx-10 border rounded-xl overflow-hidden bg-neutral-700/20">
        {techs.map((tech) => (
          <div
            key={`${tech.id}`}
            className="z-50 flex flex-col items-center gap-1 border-r border-b border py-3 hover:bg-neutral-700/30 transition"
          >
            <Image
              src={`/logos/${tech.name}.png`}
              alt={`${tech.name} logo`}
              height={tech.height}
              width={tech.width}
              className="object-contain w-8 h-8 "
            />
            <p className="text-zinc-400">{tech.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
