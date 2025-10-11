import { Briefcase, GraduationCap } from "lucide-react";

// 1. Diurutkan: Data diurutkan dari yang paling baru ke yang paling lama.
const timelineItems = [
    {
      type: "work",
      title: "Flutter Developer",
      organization: "BEKUP EKRAF - Dicoding",
      period: "Juli 2025 - Nov 2025",
      description: [
        "Mengikuti program intensif (8 jam/hari) berfokus pada pengembangan aplikasi mobile dengan Flutter & Dart.",
        "Menguasai konsep dasar hingga implementasi fitur kompleks (SQLite, API, Firebase).",
        "Menerapkan best practices seperti clean code, error handling, dan multi-platform testing.",
        "Berhasil membuat fitur notifikasi canggih dengan Workmanager yang mengambil data dinamis dari API.",
      ]
    },
    {
      type: "education",
      title: "Coding Camp 2025 Powered by DBS Foundation",
      organization: "DBS Foundation",
      period: "2025",
      description: [
        "Mengembangkan aplikasi web front-end fungsional menggunakan JavaScript, HTML, dan CSS.",
        "Mengimplementasikan penyimpanan data sisi klien dengan Web Storage (localStorage & sessionStorage).",
        "Memanipulasi DOM dan BOM untuk menciptakan pengalaman pengguna yang dinamis.",
      ]
    },
    {
      type: "education",
      title: "Financial Literacy 101",
      organization: "DBS Foundation",
      period: "2025",
      description: [
        "Mempelajari dasar-dasar keuangan, termasuk konsep keuangan, perhitungan sederhana, dan pengelolaan keuangan.",
        "Menguasai prinsip-prinsip keuangan seperti akuntansi, perbankan, dan investasi.",
        "Membuat rencana keuangan personal dan mengelola keuangan secara efektif.",
      ]
    },
     {
      type: "work",
      title: "IT Support",
      organization: "Hotel Luminor Sidoarjo",
      period: "Juli 2021 - Des 2022",
      description: [
          "Menjaga tingkat kepuasan tamu di atas 90% dengan menangani keluhan teknis (AC, Wi-Fi, dll).",
          "Memastikan operasional peralatan berfungsi optimal hingga 95% melalui perawatan rutin.",
          "Berkolaborasi dengan tim teknis untuk menyelesaikan masalah, mengasah skill problem solving & time management."
      ]
    },
    // Contoh: Financial Literacy mungkin bisa dihilangkan untuk menjaga fokus pada skill teknis
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Linimasa Karier
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
             Perjalanan dan pertumbuhan profesional saya dari waktu ke waktu.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Garis vertikal di tengah */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>

          {timelineItems.map((item, index) => (
            <div key={index} className="relative pl-16 py-4 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              
              {/* Ikon di garis */}
              <div className="absolute left-6 top-6 -translate-x-1/2 p-2 bg-background border-2 border-primary rounded-full z-10">
                {item.type === "work" 
                  ? <Briefcase className="h-5 w-5 text-primary" /> 
                  : <GraduationCap className="h-5 w-5 text-primary" />}
              </div>

              {/* Kartu Konten */}
              <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <p className="text-sm font-semibold text-primary mb-1">{item.period}</p>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-md text-muted-foreground mb-4">{item.organization}</p>
                
                {/* 2. Dihapus: Logika "Tampilkan Lebih Banyak". Semua poin langsung ditampilkan. */}
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;