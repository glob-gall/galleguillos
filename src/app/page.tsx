import Footer from "@/sections/footer";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
import QrCaesBanner from "@/sections/qrcaes-banner";
import TechsSection from "@/sections/techs-section";

export default function Home() {
  return (
    <main className="h-full w-full">
      <QrCaesBanner/>

      <div className="mt-24">
        <HeroSection/>
      </div>

      <div className="mt-24">
        <TechsSection/>
      </div>
      <div className="my-24">
        <ProjectsSection/>
      </div>

      <Footer/>
    </main>
  );
}
