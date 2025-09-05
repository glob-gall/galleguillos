import Image from 'next/image';

const techs = [
  {
    id:0,
    name: "figma",
    height:80,
    width:54,
  },
  {
    id:1,
    name: "git",
    height:80,
    width:80,
  },
  {
    id:2,
    name: "linux",
    height:80,
    width:66,
  },
  {
    id:3,
    name: "mongo",
    height:80,
    width:82,
  },
  {
    id:4,
    name: "nestjs",
    height:80,
    width:80,
  },
  {
    id:5,
    name: "nextjs",
    height:80,
    width:132,
  },
  {
    id:6,
    name: "nodejs",
    height:80,
    width:198,
  },
  {
    id:7,
    name: "postgres",
    height:80,
    width:77,
  },
  {
    id:8,
    name: "react",
    height:80,
    width:90,
  },
  {
    id:9,
    name: "tailwind",
    height:80,
    width:132,
  },
  {
    id:10,
    name: "typescript",
    height:80,
    width:81,
  }
]

const all = [...techs, ...techs.map(t => ({
  id: t.id + 100,
  name: t.name,
  width: t.width,
  height: t.height
})) ]

export default function InfiniteSlider() {
  return (
    <section className="w-full overflow-hidden">
    <div className="container px-4 mx-auto">

      <div className="relative w-full">
        <div className="flex items-center logo-carousel">
          {all.map((company, index) => (
            <div key={`${company.id}-${index}`} className="flex-shrink-0 mx-4 w-[140px] relative">
              <Image
                src={`/logos/${company.name}.png`}
                alt={`${company.name} logo`}
                height={company.height}
                width={company.width}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  </section>
  );
};