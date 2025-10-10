import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
         
          <div className="flex gap-4">
            <a
              href="https://github.com/Suff16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary/20 transition-colors border border-border hover:border-primary group"
            >
              <Github className="h-5 w-5 text-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/yusufsaputrah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary/20 transition-colors border border-border hover:border-primary group"
            >
              <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary" />
            </a>
            <a
              href="mailto:yusufsaputrah06@gmail.com"
              className="p-3 rounded-full bg-background hover:bg-primary/20 transition-colors border border-border hover:border-primary group"
            >
              <Mail className="h-5 w-5 text-foreground group-hover:text-primary" />
            </a>
          </div>

         
          <div className="flex items-center gap-2 text-muted-foreground">
            
            <span> Yusuf Saputrah</span>
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
