import { ProjectCard } from "@/components/project-card";
import Image from "next/image";


export default function ProjectsSection() {
  return (
    <section className="container flex mx-auto not-md: px-4 relative">
      
      <div className="flex flex-1 flex-col items-center">
      <Image
        alt="blur background"
        src="/blur.svg"
        height={1080}
        width={1223}
        // height={572}
        // width={648}
        className="absolute -z-10 -top-64 h-full w-full"
      />
        <h3 className="text-3xl font-bold">
        ALGUNS PROJETOS
        </h3>
        <p className="text-neutral-200">
        Esses são alguns dos meus trabalhos pessoais.
        </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <ProjectCard
          imgAlt="daily-rosary"
          imgSrc="/pages/dailyrosary.jpg"
          techs={['typescript','react','tailwind',  'jest', 'react-testing-library']}
          githubUrl="https://github.com/glob-gall/daily-rosary"
          siteUrl="https://github.com/glob-gall/daily-rosary/releases/tag/beta-1.1.0"
        />
        <ProjectCard
          imgAlt="qrcaes"
          imgSrc="/pages/qrcaes.jpg"
          techs={['typescript','react','tailwind','shadcn','supabase','nextjs']}
          siteUrl="https://www.qrcaes.com.br/"
        />
        <ProjectCard
          imgAlt="shadtheme"
          imgSrc="/pages/shadtheme.png"
          techs={['typescript','react','tailwind','shadcn']}
          siteUrl="https://shadtheme.galleguillos.com.br/"
          githubUrl="https://github.com/glob-gall/shadcn-theme-creator"
        />
        <ProjectCard
          imgAlt="course platform"
          imgSrc="/pages/course-back.jpg"
          techs={['typescript','nestjs','vitest', 'postgres']}
          githubUrl="https://github.com/glob-gall/course-platform"
        />
        <ProjectCard
          imgAlt="solar norte"
          imgSrc="/pages/solar.jpg"
          techs={['typescript', 'react', 'tailwind', 'nextjs']}
          siteUrl="https://www.solarenergianorte.com.br/"
        />
        <ProjectCard
          imgAlt="tabela taco"
          imgSrc="/pages/taco.jpg"
          techs={['typescript', 'react', 'tailwind', 'nextjs', 'python']}
          siteUrl="https://taco.galleguillos.com.br/"
        />
        <ProjectCard
          imgAlt="invest"
          imgSrc="/pages/invest.jpg"
          techs={['typescript', 'react', 'tailwind', 'nextjs', 'nestjs', 'vitest', 'postgres']}
          githubUrl="https://github.com/glob-gall/investimentos"
        />

        <ProjectCard
          imgAlt="daily tasks"
          imgSrc="/pages/dailytasks.jpg"
          techs={['typescript', 'react', 'expo']}
          githubUrl="https://github.com/glob-gall/daily-tasks"
        />
        <ProjectCard
          imgAlt="trabalhos academicos"
          imgSrc="/pages/utfpr.jpg"
          techs={['typescript', 'react', 'tailwind', 'nextjs', 'nestjs', 'vitest', 'postgres']}
          githubUrl="https://github.com/glob-gall/utfpr"
        />


      </div>

      </div>
    </section>
  )
}