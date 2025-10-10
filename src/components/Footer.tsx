import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary/20 transition-colors border border-border hover:border-primary group"
            >
              <Github className="h-5 w-5 text-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary/20 transition-colors border border-border hover:border-primary group"
            >
              <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-background hover:bg-primary/20 transition-colors border border-border hover:border-primary group"
            >
              <Mail className="h-5 w-5 text-foreground group-hover:text-primary" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            <span>by Developer</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
