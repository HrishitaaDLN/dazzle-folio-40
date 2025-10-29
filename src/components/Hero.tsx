import { Button } from "@/components/ui/button";
import { ArrowDown, FlaskConical } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Hero content */}
      <div className="relative z-10 text-center space-y-6 animate-fade-in-up px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
          <span className="text-gradient my-[80px] mx-0 px-[200px] text-5xl">
            Hrishitaa Dharmavarapu
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Data Scientist & Machine Learning Engineer — Designing intelligent
          systems that extract insight, optimize operations, and scale with data.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          {/* View Projects */}
          <Button
            size="lg"
            variant="default"
            className="group"
            onClick={() => scrollToSection("projects")}
          >
            View My Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>

          {/* View Research */}
          <Button
            size="lg"
            variant="secondary"
            className="group"
            onClick={() => scrollToSection("research")}
          >
            View My Research
            <FlaskConical className="ml-2 h-4 w-4 group-hover:rotate-6 transition-transform" />
          </Button>

          {/* Contact */}
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll-down icon */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
