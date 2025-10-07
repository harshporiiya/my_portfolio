import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Mic, ScanFace } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Leo Personal Assistant",
      description: "An intelligent AI-powered voice assistant that understands and processes natural language commands, providing seamless human-computer interaction through advanced NLP capabilities.",
      icon: Mic,
      techStack: ["Python", "ML", "NLP"],
      features: [
        "Natural language understanding and processing",
        "Voice recognition and speech synthesis",
        "Context-aware conversation handling",
        "Multi-language support capabilities"
      ],
      githubUrl: "https://github.com/harshporiiya",
      image: "https://via.placeholder.com/800x600/0a0e27/00d9ff?text=Leo+AI+Assistant"
    },
    {
      title: "Face Attendance System",
      description: "Advanced facial recognition system that automates attendance tracking using deep learning and computer vision, ensuring accurate and efficient identity verification.",
      icon: ScanFace,
      techStack: ["Python", "OpenCV", "Deep Learning"],
      features: [
        "Real-time face detection and recognition",
        "Automated attendance logging system",
        "High accuracy facial matching algorithm",
        "Anti-spoofing security measures"
      ],
      githubUrl: "https://github.com/harshporiiya",
      image: "https://via.placeholder.com/800x600/0a0e27/0066ff?text=Face+Recognition"
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI/ML solutions solving real-world problems
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-effect rounded-3xl overflow-hidden hover:scale-[1.02] transition-all hover:glow-border ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
