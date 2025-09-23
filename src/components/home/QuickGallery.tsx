import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import securityDoor from "@/assets/security-door-1.jpg";
import cncCutting from "@/assets/cnc-cutting.jpg";
import ironGate from "@/assets/iron-gate.jpg";
import workshopTools from "@/assets/workshop-tools.jpg";
import doorInstallation from "@/assets/door-installation.jpg";

const QuickGallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: securityDoor,
      title: "Premium Security Door",
      category: "Security Doors",
      description: "Custom steel security door with geometric patterns"
    },
    {
      id: 2,
      image: cncCutting,
      title: "CNC Laser Cutting",
      category: "Manufacturing",
      description: "Precision laser cutting in action"
    },
    {
      id: 3,
      image: ironGate,
      title: "Decorative Iron Gate",
      category: "Custom Fabrication",
      description: "Elegant custom iron gate with intricate patterns"
    },
    {
      id: 4,
      image: workshopTools,
      title: "Professional Equipment",
      category: "Workshop",
      description: "State-of-the-art metalworking tools and equipment"
    },
    {
      id: 5,
      image: doorInstallation,
      title: "Door Installation",
      category: "Installation",
      description: "Professional security door installation service"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Craftsmanship
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of precision-engineered metal fabrication projects showcasing quality, innovation, and attention to detail
          </p>
        </div>

        <div className="gallery-grid mb-12">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="text-white">
                  <div className="text-sm font-medium text-secondary mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            <Link to="/work">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickGallery;