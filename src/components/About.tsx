import { Briefcase, Code, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>

          <div className="bg-card/50 border border-border rounded-xl p-8 text-left backdrop-blur-sm animate-fade-in-up">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Saya adalah mahasiswa Teknik Informatika semester 5 yang berdedikasi dengan keseimbangan antara pengalaman kerja dan akademik. Terampil dalam pengembangan aplikasi mobile menggunakan <SkillTag>Flutter & Dart</SkillTag>, serta memiliki kemampuan kuat dalam problem solving, manajemen waktu, dan kolaborasi tim. Berpengalaman bekerja di lingkungan industri dan layanan teknis, saya terus mengasah kemampuan di bidang front-end development untuk menciptakan solusi digital yang efisien dan user-friendly.
          </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard 
              icon={<GraduationCap className="h-8 w-8 text-primary" />}
              title="Status Akademis"
              description="Mahasiswa Teknik Informatika, Semester 5."
              delay="0.2s"
            />
            <StatCard 
              icon={<Briefcase className="h-8 w-8 text-primary" />}
              title="Pengalaman Profesional"
              description="Freelance Developer, fokus pada proyek web dan mobile."
              delay="0.4s"
            />
            <StatCard 
              icon={<Code className="h-8 w-8 text-primary" />}
              title="Keahlian Inti"
              description="Cross-Platform Dev, Frontend Web, UI/UX."
              delay="0.6s"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

// Sub-component untuk Skill Tags (tetap sama, sangat berguna)
const SkillTag = ({ children }) => (
  <span className="font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
    {children}
  </span>
);

// Sub-component untuk Stat Cards (didesain ulang untuk tampilan lebih clean)
const StatCard = ({ icon, title, description, delay }) => (
  <div 
    className="bg-card/50 border border-border p-6 rounded-xl text-center space-y-4 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <div className="inline-flex p-3 bg-muted rounded-lg">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default About;