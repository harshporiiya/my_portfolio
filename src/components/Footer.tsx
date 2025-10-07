import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border grid-pattern">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold glow-text mb-4">Harsh Poriya</h3>
            <p className="text-muted-foreground">
              AI/ML Engineer passionate about building intelligent solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:harshporiya2506@gmail.com"
                className="p-3 glass-effect rounded-full hover:glow-border transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a
                href="http://www.linkedin.com/in/harsh-poriya-347a62346"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full hover:glow-border transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://github.com/harshporiiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full hover:glow-border transition-all hover:scale-110"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Harsh Poriya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
