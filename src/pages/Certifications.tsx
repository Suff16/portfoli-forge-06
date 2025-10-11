import { Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CertificationsPage = () => {
  const certifications = [
    {
      name: "Pemograman Dart",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "src/assets/certification/dart.png", 
      verifyUrl: "https://www.dicoding.com/certificates/07Z6JL8VJXQR", 
    },
    {
      name: "Membuat Aplikasi Fluter",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "src/assets/certification/flutter pemula.png",
      verifyUrl: "https://www.dicoding.com/certificates/GRX5JK2LKX0M", 
    },
    {
      name: "Fundamental Flutter",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "src/assets/certification/fundamental-flutter.png",
      verifyUrl: "https://www.h=300&fit=cropdicoding.com/certificates/GRX5J9RNYX0M",
    },
    {
      name: "Machine Learning dengan Flutter",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "src/assets/certification/machine-learning.png",
      verifyUrl: "https://www.dicoding.com/certificates/GRX5J2W2KX0M", 
    },
    {
      name: "Fundamental Express js",
      issuer: "Codepolitan",
      date: "2024",
      image: "src/assets/certification/express.png",
      verifyUrl: "https://codepolitan.com/c/VBX8IG2",
    },
    {
      name: "Fundamental Mongo Db",
      issuer: "Codepolitan",
      date: "2024",
      image: "src/assets/certification/mongodb.png",
      verifyUrl: "https://codepolitan.com/c/NPX8KZH",
    },
    {
      name: "Belajar Git dan Github",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "src/assets/certification/git-github.png",
      verifyUrl: "https://www.dicoding.com/certificates/L4PQ8NRRVZO1",
    },
    {
      name: "Structured Query Language (SQL)",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "src/assets/certification/sql.png",
      verifyUrl: "https://www.dicoding.com/certificates/0LZ0RVYNNP65",
    },
    {
      name: "Fundamental JavaScript",
      issuer: "Dicoding Indonesia",
      date: "2024",
      image: "src/assets/certification/dasar-js.png",
      verifyUrl: "https://www.dicoding.com/certificates/4EXG7G389PRL",
    },
    {
      name: "Belajar Membuat Front-End Web",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "src/assets/certification/frontend-pemula.png",
      verifyUrl: "https://www.dicoding.com/certificates/0LZ0RJ4RQP65",
    },
    {
      name: "Fundamental Front-End Web",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "src/assets/certification/fundamental-frontend.png",
      verifyUrl: "https://www.dicoding.com/certificates/KEXL7DV00XG2",
    }
    
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sertifikasi & Prestasi
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sertifikasi profesional dan pencapaian pembelajaran berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              // Seluruh kartu sekarang dibungkus dengan link <a>
              <a 
                key={index}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-46 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-primary/90 rounded-full">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CertificationsPage;