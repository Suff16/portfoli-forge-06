import { Briefcase, GraduationCap } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      type: "work",
      title: "Senior Full-Stack Developer",
      organization: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading development of microservices architecture and mentoring junior developers. Built scalable applications serving 100K+ users.",
    },
    {
      type: "work",
      title: "Mobile App Developer",
      organization: "StartUp Digital",
      period: "2020 - 2022",
      description: "Developed cross-platform mobile applications using Flutter. Implemented CI/CD pipelines and improved app performance by 40%.",
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      organization: "University of Technology",
      period: "2016 - 2020",
      description: "Graduated with honors. Specialized in Software Engineering and Mobile Development.",
    },
    {
      type: "work",
      title: "Junior Web Developer",
      organization: "Digital Agency",
      period: "2019 - 2020",
      description: "Built responsive websites for clients using React and Node.js. Collaborated with design team on UX improvements.",
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Career Timeline
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My professional journey and educational background
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 md:gap-8">
                  {/* Timeline Icon */}
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

                  {/* Content Card */}
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
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
