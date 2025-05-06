
import InfiniteSlider from "./infinite-slider";

export default function TechsSection() {
  return (
    <div className="bg-neutral-800 p-4 flex border-y border-y-zinc-600">
      <div className="container flex items-center justify-center gap-4 mx-auto relative w-full overflow-hidden">
      <div className="w-[15px] md:w-[250px] h-[100px] absolute left-0 z-10 bg-linear-to-r from-neutral-800 to-0"/>
      <InfiniteSlider/>
      <div className="w-[15px] md:w-[250px] h-[100px] absolute right-0 z-10 bg-linear-to-r from-0 to-neutral-800"/>

  
      </div>
    </div>
  )
}