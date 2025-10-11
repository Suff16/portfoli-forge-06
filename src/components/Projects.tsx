import React from 'react';
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import lokaPandu from "../assets/Loka.png";
import recognizerFood from "../assets/recognizer_food.png";
import restaurantApp from "../assets/restaurant-app.png";
import vegetaStore from "../assets/Vegeta-store.png";

const projects = [
    {
      title: "LokaPandu",
      description: "Aplikasi full-stack yang memberikan referensi destinasi wisata hidden gems, terintegrasi dengan AI Chatbot.",
      image: lokaPandu, 
      technologies: ["Flutter", "Supabase", "Gemini LLM", "Provider Bloc"],
      liveUrl: "#",
      githubUrl: "https://github.com/Suff16",
    },
    {
      title: "Food Recognizer App",
      description: "Aplikasi Flutter dengan model ML untuk mengenali makanan dari gambar dengan akurasi tinggi.",
      image: recognizerFood, 
      technologies: ["Flutter", "Firebase", "Gemini API","ML Kit"],
      liveUrl: "#",
      githubUrl: "https://github.com/Suff16",
    },
    {
      title: "Restaurants App",
      description: "Aplikasi Flutter yang menyediakan informasi lengkap tentang restoran, dari menu, ulasan, hingga lokasi.",
      image: restaurantApp, 
      technologies: ["Flutter", "Firebase", "Google Maps API", "Provider"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Vegeta Store",
      description: "Platform e-commerce lengkap untuk menjual sayuran dengan integrasi pembayaran yang aman.",
      image: vegetaStore, 
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/Suff16",
    }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Proyek Unggulan
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Pameran karya terbaru dan proyek-proyek yang telah saya kembangkan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sub-Components untuk Kode yang Lebih Bersih ---

const ProjectCard = ({ project, index }) => (
  <div
    className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 ease-out animate-fade-in-up hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/5"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Ukuran gambar diperkecil agar kartu lebih ringkas */}
    <div className="relative overflow-hidden h-52">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* Gradasi hitam halus untuk menjaga kejelasan gambar */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>

    {/* Padding & ukuran teks dikurangi untuk tampilan lebih rapi */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <TechPill key={tech}>{tech}</TechPill>
        ))}
      </div>
      
      <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
    </div>
  </div>
);

const TechPill = ({ children }) => (
  <span className="px-2.5 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
    {children}
  </span>
);

const ProjectLinks = ({ liveUrl, githubUrl }) => (
  <div className="flex gap-3 mt-auto">
    <Button asChild size="sm" className="flex-1">
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="mr-2 h-4 w-4" />
        Live Demo
      </a>
    </Button>
    <Button asChild size="sm" variant="secondary" className="flex-1">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <Github className="mr-2 h-4 w-4" />
        Kode
      </a>
    </Button>
  </div>
);

export default Projects;