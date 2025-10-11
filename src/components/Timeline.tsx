import { useState } from "react"; // Ditambahkan
import { Briefcase, GraduationCap } from "lucide-react";

const Timeline = () => {
  // State untuk melacak deskripsi yang terbuka
  const [expandedItems, setExpandedItems] = useState({});

  const timelineItems = [
    {
      type: "work",
      title: "Flutter Developer",
      organization: "BEKUP EKRAF - Dicoding",
      period: "JUli 2025 - November 2025",
      description: [
        "Mengikuti program intensif 8 jam/hari yang fokus pada pengembangan aplikasi mobile menggunakan Flutter & Dart.",
        "Menguasai konsep dasar pemrograman hingga implementasi fitur kompleks, termasuk penggunaan database SQLite, integrasi API, dan Firebase.",
        "Menerapkan best practices seperti clean code, error handling, dan pengujian multi-platform (unit, widget, dan integration testing).",
        "Mampu membuat fitur notifikasi canggih dengan Workmanager yang mengambil data dinamis dari API, menunjukkan kemampuan problem-solving dan inovasi.",
      ]
    },
    {
      type: "work",
      title: "IT Support",
      organization: "Hotel Luminor Sidoarjo",
      period: "Juli 2021 - Desember 2022",
      description: [
          "Melayani keluhan Teknik tamu terkait AC, pencahayaan, dan Wi-Fi, berhasil menjaga tingkat kepuasan tamu diatas 90%.",
          "Melakukan perawatan rutin dan perbaikan AC indoor/outdoor memastikan operasional peralatan berfungsi optimal hingga 95%.",
          "Menginstal dan men-setup sound system untuk berbagai acara dan event hotel.",
          "Melaksanakan pengecekan rutin fasilitas, termasuk pengecekan kualitas air PDAM, untuk memastikan kelancaran operasional.",
          "Berkolaborasi dengan tim teknis untuk menyelesaikan permasalahan dengan cepat, mengasah kemampuan technical troubleshooting, problem solving, teamwork dan time management."
      ]
    },
    {
      type: "education",
      title: "Coding Camp 2025 Powered by DBS Foundation",
      organization: "DBS Foundation",
      period: "2025",
      description: [
        "Mengembangkan aplikasi web front-end dengan JavaScript, HTML, dan CSS.",
        "Mengimplementasikan penyimpanan data pada sisi klien menggunakan Web Storage (localStorage dan sessionStorage).",
        "Memanipulasi DOM (Document Object Model) dan BOM (Browser Object Model) untuk menciptakan pengalaman pengguna yang dinamis.",
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
  ];

  
  const toggleDescription = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Linimasa Karier
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         Perjalanan Karir dan Pembelajaran saya
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {timelineItems.map((item, index) => {
              const isExpanded = !!expandedItems[index];

              return (
                <div
                  key={index}

                  className={`relative mb-12 animate-fade-in ${
                    index % 2 === 0 ? "md:pr-1/2 md:ml-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4 md:gap-8">
                    <div
                      className={`absolute left-8 md:left-1/2 -ml-6 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background z-10 ${
                        item.type === "work" ? "bg-primary" : "bg-accent"
                      }`}
                    >
                      {item.type === "work" ? (
                        <Briefcase className="h-6 w-6 text-primary-foreground" />
                      ) : (
                        <GraduationCap className="h-6 w-6 text-accent-foreground" />
                      )}
                    </div>

                    <div
                      className={`flex-1 ml-20 md:ml-0 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                        index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-primary/90 font-medium mb-3">{item.organization}</p>
                      
                      {Array.isArray(item.description) ? (
                        <div>
                          {isExpanded ? (
                            <ul className="list-disc list-inside space-y-1 text-left">
                              {item.description.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                          ) : (
                            <p className="text-foreground/80">{`${item.description[0].substring(0, 100)}...`}</p>
                          )}
                          <button 
                            onClick={() => toggleDescription(index)}
                            className="text-primary font-semibold mt-2 text-sm hover:underline"
                          >
                            {isExpanded ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
                          </button>
                        </div>
                      ) : (
                        <p className="text-foreground/80">{item.description}</p>
                      )}
                      {/* === AKHIR BLOK LOGIKA === */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;