const About = () => {
  return <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="card-glass rounded-2xl p-8 md:p-12 space-y-6 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed">I’m a Data Scientist and Machine Learning Engineer driven by one simple question — what story is the data trying to tell?

My journey began with curiosity: understanding how numbers, text, and patterns can explain human behavior and power intelligent decisions. That curiosity evolved into a passion for building systems that think — and learn.

Today, I combine research, engineering, and analytics to craft machine learning solutions that move beyond experimentation and into real-world impact. Whether it’s teaching a model to read policy documents, designing scalable pipelines, or finding the signal in noisy datasets, I live for that moment when insight turns into action.

Currently, I’m pursuing my Master’s in Computer Science (Data Science) at the University of Illinois Chicago, where I research and build models that combine statistical depth with engineering precision. Previously, at OpenText Technologies, I designed and optimized data systems that processed thousands of documents daily, reducing latency, improving accuracy, and empowering smarter decisions across teams.</p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">To me, data science isn’t just about algorithms — it’s about creating intelligence with purpose. Every dataset is a puzzle, every model a hypothesis, and every result a story waiting to be told. I believe in building AI that not only performs but also explains, scales, and makes a difference.

When I’m not coding or tuning models, you’ll probably find me exploring AI ethics, writing about explainable ML, or experimenting with creative uses of NLP — anything that blurs the line between human insight and machine intelligence.</p>
          
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