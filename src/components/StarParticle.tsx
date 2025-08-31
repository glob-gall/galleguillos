import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

type StarParticleProps = {
  className?: string
}

export function StarParticle({
className = ''
}:StarParticleProps) {
 
  return (
    <div className={cn(className, 'absolute star-animation')}>
      <Star fill="#fcbe58" className="text-[#fcbe58]"/>
    </div>
  ) 
}