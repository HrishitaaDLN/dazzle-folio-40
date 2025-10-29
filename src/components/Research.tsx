import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical } from "lucide-react";

const Research = () => {
  const researchProjects = [
  {
    title: "AI for Sustainability",
    under: "Research Project under Prof. Selva Nadarajah, University of Illinois Chicago",
    overview:
      "This project explores how AI and large language models can help cities design better sustainability strategies. Our system analyzes over 100 municipal climate-action reports to identify key actions in energy, waste, and transportation, then evaluates how effectively each city is progressing toward global climate goals using the C40 framework.",
    whatIDo: [
      "Built an end-to-end pipeline that uses Gemini to read complex policy documents and extract meaningful sustainability actions across multiple sectors.",
      "Designed a structured evaluation process that converts unstructured text into measurable performance scores aligned with C40 climate leadership principles.",
      "Developed a framework that compares city performance, highlights gaps, and recommends targeted improvements based on identified action patterns."
    ],
    impact:
      "This research creates a data-driven foundation for understanding how cities are tackling climate change. By combining AI and policy analytics, it enables governments to track sustainability efforts more transparently, benchmark against peers, and discover actionable pathways toward a cleaner future."
  }
];


  return (
    <section id="research" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Research <span className="text-gradient">Work</span>
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {researchProjects.map((research, index) => (
            <Card
              key={index}
              className="card-glass border-border hover:border-primary/50 transition-all hover:scale-[1.02] animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-gradient transition-all flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  {research.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground/70 mt-1 italic">
                  {research.under}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Overview</h3>
                  <p className="text-base leading-relaxed text-foreground/90">{research.overview}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">What I Do</h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    {research.whatIDo.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Impact</h3>
                  <p className="text-base leading-relaxed text-foreground/90">{research.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
