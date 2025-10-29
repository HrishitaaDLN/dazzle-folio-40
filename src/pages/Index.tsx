import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Research from "@/components/Research";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
      <footer className="bg-muted/30 py-8 text-center text-muted-foreground">
        <p>Driven with passion and code.</p>
      </footer>
    </div>
  );
};

export default Index;
