const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Passionate about creating elegant solutions to complex problems, I specialize in 
              building scalable web applications and mobile apps that deliver exceptional user 
              experiences. With expertise spanning from frontend frameworks to backend infrastructure, 
              I bring ideas to life through clean, efficient code.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              My journey in technology is driven by curiosity and a commitment to continuous learning. 
              Whether it's crafting pixel-perfect interfaces with React or architecting robust backends 
              with Node.js, I approach every project with dedication and attention to detail. 
              I thrive in collaborative environments and am always excited to tackle new challenges 
              in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
