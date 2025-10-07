import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.png";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "AI/ML Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Profile Picture */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-full blur-xl animate-glow-pulse" />
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img
                  src={profilePicture}
                  alt="Harsh Poriya"
                  className="w-full h-full object-cover object+[center_10%]"
             />
            </div>
          </div>

          {/* Animated Text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in-up">
              Hi, I'm <span className="glow-text">Harsh Poriya</span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-primary">
                {displayedText}
                <span className="animate-blink border-r-4 border-primary ml-1" />
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Building Intelligent Solutions
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="mt-8 px-8 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-border animate-glow-pulse transition-all hover:scale-105"
            style={{ animationDelay: "1s" }}
          >
            View My Work
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
