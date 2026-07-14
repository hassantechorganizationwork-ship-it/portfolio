import Nav from "@/components/Nav";
import GradientBlobs from "@/components/GradientBlobs";
import SectionDivider from "@/components/SectionDivider";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <GradientBlobs />
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Footer />
      </main>
    </div>
  );
}
