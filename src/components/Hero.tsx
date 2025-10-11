import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/formal.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden pt-28 pb-16 sm:pt-32">
      
      {/* Latar Belakang */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background via-background to-background/90"></div>
        {/* PERBAIKAN 1: Opacity dihilangkan dari container dan dipindahkan ke dalam style gradasi */}
        <div 
          className="absolute inset-0" 
          style={{
            // Warna titik sekarang menggunakan --border dengan alpha channel agar kontrasnya pas di light/dark mode
            backgroundImage: 'radial-gradient(hsl(var(--border) / 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      {/* Konten */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-16 lg:gap-8 items-center">
          
          {/* Konten Teks (tidak ada perubahan) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground animate-fade-in-up [animation-delay:0.2s]">
              Yusuf Saputrah
            </h1>
            <div className="mt-4 mb-6 h-10 sm:h-12">
              <span className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary pr-2">
                Pengembang Web & Mobile App
              </span>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up [animation-delay:0.4s]">
              Membangun aplikasi web dan mobile lintas platform yang modern dan fungsional dengan fokus pada pengalaman pengguna yang luar biasa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up [animation-delay:0.6s]">
              <a href="src/assets/cv/CV Yusuf Saputrah.pdf" download="CV Yusuf Saputrah.pdf">
                <Button size="lg" className="w-full sm:w-auto text-base px-6 py-5 sm:text-lg sm:px-8 sm:py-6 group">
                  Unduh CV <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-6 py-5 sm:text-lg sm:px-8 sm:py-6">
                  Hubungi Saya
                </Button>
              </a>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up [animation-delay:0.8s]">
              <SocialLink href="https://github.com" icon={<Github />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              <SocialLink href="mailto:yusufsaputrah003@gmail.com" icon={<Mail />} />
            </div>
          </div>

          {/* Gambar Profil (tidak ada perubahan) */}
          <div className="lg:col-span-2 flex justify-center items-center animate-fade-in [animation-delay:0.5s]">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-[60%_40%_30%_70%/50%_30%_70%%_50%] animate-pulse-slow blur-2xl"></div>
              <div className="relative w-full h-full overflow-hidden rounded-[60%_40%_30%_70%/50%_30%_70%_50%] border-2 border-primary/20 shadow-xl">
                <img
                  src={profileImage}
                  alt="Yusuf Saputrah"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component SocialLink
const SocialLink = ({ href, icon }: { href: string, icon: React.ReactElement }) => (
  // PERBAIKAN 2: Border di dark mode dibuat sedikit lebih cerah
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border dark:border-white/10 hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
  >
    {React.cloneElement(icon, { className: "h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" })}
  </a>
);

export default Hero;