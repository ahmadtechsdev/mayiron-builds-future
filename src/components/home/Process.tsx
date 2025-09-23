import { MessageSquare, FileText, Cog, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Consultation & Requirements",
      description: "We start with a detailed consultation to understand your specific needs, project requirements, and design preferences."
    },
    {
      number: "02", 
      icon: FileText,
      title: "Design & Engineering",
      description: "Our expert team creates detailed technical drawings and engineering plans using advanced CAD/CAM software."
    },
    {
      number: "03",
      icon: Cog,
      title: "Fabrication & Manufacturing",
      description: "Precision manufacturing using state-of-the-art CNC machines and laser cutting technology for superior quality."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Installation & Support", 
      description: "Professional installation by our skilled technicians followed by comprehensive after-sales support and maintenance."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="page-container">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to final installation, we follow a proven process to ensure exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="relative">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border"></div>
                  )}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;