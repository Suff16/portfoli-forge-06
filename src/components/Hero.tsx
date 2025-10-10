import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/formal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Yusuf Saputrah</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Pengembang Web & Mobile App
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Spesialisasi membangun aplikasi web dan aplikasi mobile multi platform-app dengan Flutter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border hover:border-primary group"
              >
                <Github className="h-6 w-6 text-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border hover:border-primary group"
              >
                <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary" />
              </a>
              <a
                href="mailto:yusufsaputrah003@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border hover:border-primary group"
              >
                <Mail className="h-6 w-6 text-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-glow"></div>
              <img
                src={profileImage}
                alt="Developer profile"
                className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
