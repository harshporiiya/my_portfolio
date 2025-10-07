import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`${isVisible ? "animate-slide-in" : "opacity-0"}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative glass-effect rounded-2xl p-8 hover:scale-105 transition-transform">
                <img
                  src={aboutImage}
                  alt="About Harsh Poriya"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Computer Engineering Student
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm pursuing my Bachelor's degree in Computer Engineering with a deep passion for{" "}
              <span className="text-primary font-semibold">Artificial Intelligence</span> and{" "}
              <span className="text-primary font-semibold">Machine Learning</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech is driven by curiosity and a problem-solving mindset. I specialize in building{" "}
              <span className="text-primary font-semibold">intelligent systems</span> that leverage{" "}
              <span className="text-primary font-semibold">Computer Vision</span>,{" "}
              <span className="text-primary font-semibold">Natural Language Processing</span>, and{" "}
              <span className="text-primary font-semibold">Deep Learning</span> to solve real-world challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of innovation and continuous learning. Whether it's developing voice assistants 
              or facial recognition systems, I'm always excited to push the boundaries of what's possible with AI.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="glass-effect rounded-lg p-6 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-effect rounded-lg p-6 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
