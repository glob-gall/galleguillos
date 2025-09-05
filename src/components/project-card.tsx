import Image from "next/image"
import Link from "next/link"
import { Github } from "./icon/github"
import { ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { Tech, TechIcon } from "./icon/tech-icons"

type ProjectCardProps = {
  siteUrl?: string
  githubUrl?: string
  techs: Tech[]

  imgSrc:string
  imgAlt:string
}

export function ProjectCard({imgAlt,imgSrc,techs,githubUrl,siteUrl}:ProjectCardProps) {
  return (
    <div className="bg-neutral-700/20 rounded-lg relative group overflow-hidden border">
      <div className="overflow-hidden">
        <Image
          alt={imgAlt}
          src={imgSrc}
          height={198}
          width={390}
          className="group-hover:scale-105 duration-300"
        />
      </div>

      <div className=" flex items-center justify-between p-2 border-t">
        <div className="flex gap-2">
          {techs.map(t => <TechIcon tech={t} key={t}/>)}
        </div>

        <div className="flex gap-2">

          {githubUrl && (
            <Button className="rounded-full cursor-pointer" size={'icon'}>
              <Link href={githubUrl} >
                <Github/> 
              </Link>
            </Button>
          )}
          {siteUrl && (
            <Link href={siteUrl} className=""> 
              <Button className="rounded-full cursor-pointer" size={'icon'}>
                <ExternalLink size={18}/> 
              </Button>
            </Link>
          )}

        </div>
      </div>
      
  </div>

  )
}