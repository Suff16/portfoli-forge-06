import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
import BackgroundGlow from "@/components/BackgroundGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BackgroundGlow />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
