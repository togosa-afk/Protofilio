import HeroSection from "@/app/components/hero/Hero";
import Card from '../card/Card'
import AboutSection from "../about/about";
import Features from "../Features/Features";
export default function Main() {
  return (
    <>
      <div className="flex flex-col w-full mt-50">
        <div className="max-w-4xl mx-auto w-full px-margin-mobile md:px-margin py-8 md:py-16 space-y-20 md:space-y-28">
          <HeroSection />
          <Card />
          <AboutSection />
          <Features />
        </div>
      </div>
    </>
  );
}
