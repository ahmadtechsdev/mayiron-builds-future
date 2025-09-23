import { CheckCircle, Clock, Users, Award, Lightbulb, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description: "Over a decade and a half of proven expertise in metal fabrication industry with countless successful projects and satisfied clients."
    },
    {
      icon: Lightbulb,
      title: "Innovative Technology",
      description: "State-of-the-art CNC machines and laser cutting technology ensuring precision, efficiency, and superior quality in every project."
    },
    {
      icon: Shield,
      title: "Maximum Security",
      description: "Our steel security doors are engineered for maximum protection while maintaining aesthetic appeal and architectural compatibility."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated team of skilled engineers, designers, and craftsmen committed to delivering exceptional results and customer satisfaction."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and consistently deliver projects on time without compromising on quality or precision."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control processes and industry-standard testing ensure every product meets the highest benchmarks of excellence."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose MAY-IRON?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We stand apart through our unwavering commitment to excellence, advanced technology, and customer-focused approach to metal fabrication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={reason.title}
                className="group p-6 rounded-xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 p-8 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;