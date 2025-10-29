const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="card-glass rounded-2xl p-8 md:p-12 space-y-6 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate developer with a keen eye for design and a love for creating 
            exceptional digital experiences. With expertise in modern web technologies, 
            I transform ideas into elegant, functional solutions.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines technical excellence with creative problem-solving, 
            ensuring every project not only meets but exceeds expectations. I thrive on 
            challenges and continuously push the boundaries of what's possible.
          </p>
          
          <div className="pt-6">
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-3">
              {[
                "Full-stack web development",
                "UI/UX design and implementation",
                "Performance optimization",
                "Responsive and accessible interfaces",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
