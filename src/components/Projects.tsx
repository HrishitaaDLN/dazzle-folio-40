import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "FinGptPro",
      description: "Developed a full-stack financial documentation analyzer using LLMs and retrieval-augmented generation. It parses SEC filings, extracts key sentiment and performance drivers, and surfaces actionable insights for decision-makers.",
      tech: ["Python", "PyTorch", "FastAPI", "Streamlit", "Embeddings", "RAG"],
      impact: "Enables rapid evaluation of financial documents, reducing manual effort and increasing analytical depth.",
      demo: "https://fingptpro-ldhar.streamlit.app/",
      github: "https://github.com/HrishitaaDLN/FinGptPro",
    },
    {
      title: "Customer Churn Survival Analysis",
      description: "Built a survival-analysis framework to model customer churn lifetimes. Leveraged Kaplan-Meier and Cox regression models to predict churn probability and lifetime value, deployed via a live Streamlit dashboard.",
      tech: ["Python", "Scikit-learn", "Lifelines", "Streamlit", "SQL"],
      impact: "Helps businesses anticipate churn, optimize retention efforts, and maximize customer lifetime value.",
      demo: "https://customer-churn-survival-analysis-ldhar.streamlit.app/",
      github: "https://github.com/HrishitaaDLN/Customer-Churn-Survival-Analysis",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-glass border-border hover:border-primary/50 transition-all hover:scale-[1.02] animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-gradient transition-all">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <p className="text-sm text-foreground/90">
                    <span className="font-semibold text-accent">Impact:</span> {project.impact}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="default" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
