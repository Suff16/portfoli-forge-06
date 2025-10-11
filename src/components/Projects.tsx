import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "LokaPandu",
      description: "Full-stack aplikasi memberikan referensi destinasi wisata hidden gems terintegrasi dengan AI Chatbot.",
      image: "src/assets/project/Loka.png",
      technologies: ["Flutter", "Supabase", "LLM Gemini Chat", "Provider Bloc"],
      liveUrl: "#",
      githubUrl: "https://github.com/Suff16",
    },
    {
      title: "Food Recognizer App",
      description: "Aplikasi Flutter dengan model ML untuk mengenali suatu makanan. Melalui pemberian gambar, aplikasi mampu mengidentifikasi jenis makanan tersebut dengan akurasi yang tinggi.",
      image: "src/assets/project/recognizer_food.png",
      technologies: ["Flutter", "Firebase", "Gemini Api","ML Kit","Image Picker","Provider"],
      liveUrl: "#",
      githubUrl: "https://github.com/Suff16",
    },
    {
      title: "Restaurants App",
      description: "Aplikasi Flutter yang menyediakan informasi lengkap tentang restoran, termasuk menu, ulasan, dan lokasi. Pengguna dapat menemukan restoran favorit mereka dan memesan makanan dengan mudah.",
      image: "src/assets/project/restaurant app.png",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Provider"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Chatbot Platform",
      description: "Platform chatbot cerdas dengan pemrosesan bahasa alami dan integrasi multi-kanal.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "OpenAI", "WebSocket"],
      liveUrl: "#",
      githubUrl: "https://github.com/Suff16",
    },
    {
      title: "Vegeta Store",
      description: "Platform e-commerce lengkap untuk menjual sayuran dengan integrasi pembayaran yang aman.",
      image: "src/assets/project/vegeta store.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/Suff16",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Proyek Unggulan
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Pameran karya terbaru dan proyek pribadi saya
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="default"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
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
