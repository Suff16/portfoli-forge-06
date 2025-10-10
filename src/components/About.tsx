const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Mahasiswa Teknik Informatika semester 5 dengan fokus pada pengembangan aplikasi cross-platform menggunakan Flutter & Dart,
              serta memiliki keahlian dalam pengembangan web dengan tumpukan teknologi Vue & React
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Memiliki pengalaman praktis sebagai Freelance Developer dalam membangun dan memelihara aplikasi.
              Terampil dalam kolaborasi tim menggunakan tools seperti Git dan mampu beradaptasi cepat untuk memecahkan masalah teknis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
