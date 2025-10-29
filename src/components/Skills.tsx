import { Code2, Brain, Database, Cloud, Palette, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "SQL", "R", "C++"],
      color: "from-primary to-primary-glow",
    },
    {
      title: "ML & AI",
      icon: Brain,
      skills: [
        "Predictive Modeling",
        "NLP",
        "LLMs",
        "RAG",
        "Time-Series Forecasting",
      ],
      color: "from-accent to-primary",
    },
    {
      title: "Data Science",
      icon: Database,
      skills: [
        "Causal Inference",
        "A/B Testing",
        "Regression",
        "Visualization",
      ],
      color: "from-primary-glow to-accent",
    },
    {
      title: "Frameworks",
      icon: Code2,
      skills: [
        "Scikit-learn",
        "Pandas",
        "TensorFlow",
        "PyTorch",
        "FastAPI",
      ],
      color: "from-accent to-primary-glow",
    },
    {
      title: "Cloud & Data",
      icon: Cloud,
      skills: [
        "AWS",
        "GCP",
        "Docker",
        "Airflow",
        "BigQuery",
      ],
      color: "from-primary to-accent",
    },
    {
      title: "Tools",
      icon: Palette,
      skills: ["Tableau", "Power BI", "Jupyter", "Git"],
      color: "from-primary-glow to-primary",
    },
    {
      title: "Ethics",
      icon: Shield,
      skills: [
        "Explainability",
        "Fairness",
        "Responsible AI",
      ],
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive skill set across the full data science and AI lifecycle
        </p>

        <TooltipProvider>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="card-glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Tooltip key={skill}>
                        <TooltipTrigger>
                          <Badge
                            variant="secondary"
                            className="cursor-pointer hover:scale-110 transition-transform"
                          >
                            {skill}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">{skill}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;
