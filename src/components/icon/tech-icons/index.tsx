import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

export type Tech = "nestjs" | "react" | "tailwind" | "nextjs" | "supabase" | "shadcn" | "typescript" | "expo" | "python" | 'vitest' | 'postgres' | 'jest' | 'react-testing-library'

type TechIconProps = {
 tech: Tech
 height?: number
 width?: number
}

export function TechIcon({tech,height,width}:TechIconProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="flex items-center justify-center hover:bg-neutral-700 rounded p-0.5">
          <Image
            src={`/logos/${tech}.png`}
            alt={`${tech} logo`}
            height={height ?? 24}
            width={width ?? 24}
            className="object-contain"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        {tech}
      </TooltipContent>
    </Tooltip>
  )
}