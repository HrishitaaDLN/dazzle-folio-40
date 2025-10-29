import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
const Contact = () => {
  const socials = [{
    icon: Github,
    label: "GitHub",
    href: "https://github.com"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com"
  }, {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com"
  }, {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@example.com"
  }];
  return <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="card-glass rounded-2xl p-12 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socials.map(social => <Button key={social.label} variant="outline" size="lg" className="group hover:border-primary/50" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                  {social.label}
                </a>
              </Button>)}
          </div>
          
          <p className="text-muted-foreground">Always ready to turn coffee, code, and collaboration into innovation.</p>
        </div>
      </div>
    </section>;
};
export default Contact;