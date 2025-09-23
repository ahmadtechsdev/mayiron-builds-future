import { Cog, Zap, Shield, Wrench, Settings, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "CNC Design & Engineering",
      description: "Advanced Computer Numerical Control design and engineering services for precision metal fabrication with cutting-edge technology.",
      features: ["Precision Engineering", "Custom Designs", "CAD/CAM Integration"]
    },
    {
      icon: Zap,
      title: "Laser Cutting Services",
      description: "High-precision laser cutting services for various metals with exceptional accuracy and clean finish for complex geometries.",
      features: ["High Precision", "Multiple Materials", "Complex Patterns"]
    },
    {
      icon: Shield,
      title: "Steel Security Doors",
      description: "Premium quality steel security doors engineered for maximum protection while maintaining aesthetic appeal and durability.",
      features: ["Maximum Security", "Custom Designs", "Weather Resistant"]
    },
    {
      icon: Wrench,
      title: "Custom Metal Fabrication",
      description: "Comprehensive custom metal fabrication services tailored to meet specific client requirements with superior craftsmanship.",
      features: ["Tailored Solutions", "Quality Materials", "Expert Craftsmanship"]
    },
    {
      icon: Settings,
      title: "Iron Related Solutions",
      description: "Complete iron and steel solutions including gates, railings, structural components, and decorative metalwork.",
      features: ["Structural Work", "Decorative Elements", "Maintenance Services"]
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every project meets the highest industry standards and client expectations.",
      features: ["Industry Standards", "Quality Testing", "Client Satisfaction"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive metal fabrication services powered by cutting-edge technology and decades of expertise in precision engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="steel-card animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground text-center">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;