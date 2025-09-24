import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import decorativePanel from "@/assets/decorative-panel.jpg";
import securityDoors from "@/assets/security-doors.jpg";
import decorativeGate from "@/assets/decorative-gate.jpg";
import decorativePlanters from "@/assets/decorative-planters.jpg";
import teamWorkshop from "@/assets/team-workshop.jpg";

const QuickGallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: decorativePanel,
      title: "Decorative Metal Panel",
      category: "Custom Fabrication",
      description: "Intricate laser-cut decorative panel with geometric patterns"
    },
    {
      id: 2,
      image: securityDoors,
      title: "Premium Security Doors",
      category: "Security Doors",
      description: "White steel security doors with diamond pattern design"
    },
    {
      id: 3,
      image: decorativeGate,
      title: "Ornate Metal Gate",
      category: "Custom Gates",
      description: "Elegant residential gate with artistic patterns"
    },
    {
      id: 4,
      image: decorativePlanters,
      title: "Decorative Planters",
      category: "Garden Accessories",
      description: "White decorative metal planters with Islamic patterns"
    },
    {
      id: 5,
      image: teamWorkshop,
      title: "Workshop Team",
      category: "Our Team",
      description: "Our professional team at work in the fabrication workshop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="page-container">
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
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
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