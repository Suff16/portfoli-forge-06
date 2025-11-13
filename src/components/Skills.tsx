import React from 'react';

// Data disederhanakan tanpa kategori, dengan flag 'invertInDark'
const skillsData = [
  { name: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" },
  { name: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Flutter", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Vue.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Firebase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Supabase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", invertInDark: true },
  { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invertInDark: true },
  { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Postman", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Keahlian & Teknologi
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tumpukan teknologi yang saya gunakan untuk merancang dan membangun aplikasi.
          </p>
        </div>

        {/* Layout diubah menjadi satu grid besar yang rapi */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10 max-w-5xl mx-auto">
          {skillsData.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center gap-3 group animate-fade-in-up">
              <div className="p-4 bg-card border border-border rounded-xl w-24 h-24 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-primary/50">
                <img
                  src={skill.iconUrl}
                  alt={skill.name}
                  // PERBAIKAN: Menambahkan class 'dark:invert' secara kondisional
                  className={`h-12 w-12 transition-transform duration-300 group-hover:scale-110 ${skill.invertInDark ? 'dark:invert' : ''
                    }`}
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;