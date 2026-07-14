import { getDictionary, Locale } from "@/i18n/locales";
import Footer from "@/sections/footer";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
// import QrCaesBanner from "@/sections/qrcaes-banner";
import Header from "@/sections/Header";
import TechsSection from "@/sections/techs-section";
type HomeProps = {
  params: Promise<{ locale: Locale }>;
};
export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  return (
    <main className="h-full w-full overflow-hidden">
      {/* <QrCaesBanner/> */}
      <Header locale={locale} />

      <div className=" md:mt-24">
        <HeroSection dict={dict.hero} />
      </div>

      <div className="my-24">
        <ProjectsSection dict={dict.projects} />
      </div>

      <div className="my-24">
        <TechsSection dict={dict.techs} />
      </div>

      <Footer dict={dict.footer} />
    </main>
  );
}
