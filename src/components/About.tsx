const About = () => {
  return <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="card-glass rounded-2xl p-8 md:p-12 space-y-6 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed">I teach data to tell stories — and build machines that listen.

I’m a Data Scientist & Machine Learning Engineer who loves turning messy data into elegant, intelligent systems. From NLP pipelines that read policy documents to predictive models that drive strategy, I design solutions that learn fast and deliver faster.

Currently pursuing my Master’s in Computer Science (Data Science) at UIC, I blend the scientist’s curiosity with the engineer’s precision — because great models don’t just predict; they create impact.

My world revolves around code, curiosity, and the thrill of making ideas work at scale — guided by a deep respect for AI ethics, transparency, and fairness.</p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">Because the future of AI isn’t just about intelligence — it’s about responsibility.</p>
          
          <div className="pt-6">
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-3">
              {["Full-stack web development", "UI/UX design and implementation", "Performance optimization", "Responsive and accessible interfaces"].map((item, index) => <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  {item}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default About;