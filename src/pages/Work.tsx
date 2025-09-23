import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import securityDoor from "@/assets/security-door-1.jpg";
import cncCutting from "@/assets/cnc-cutting.jpg";
import ironGate from "@/assets/iron-gate.jpg";
import workshopTools from "@/assets/workshop-tools.jpg";
import doorInstallation from "@/assets/door-installation.jpg";
import heroImage from "@/assets/hero-fabrication.jpg";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Security Doors", "CNC Cutting", "Custom Gates", "Workshop", "Installation"];

  const projects = [
    {
      id: 1,
      image: securityDoor,
      title: "Premium Steel Security Door",
      category: "Security Doors",
      description: "Custom-designed steel security door with intricate geometric patterns and maximum protection features.",
      features: ["High-grade steel construction", "Multi-point locking system", "Weather-resistant coating"]
    },
    {
      id: 2,
      image: cncCutting,
      title: "Precision CNC Laser Cutting",
      category: "CNC Cutting",
      description: "Advanced CNC laser cutting services for complex metal components with exceptional precision.",
      features: ["±0.1mm precision", "Multiple material compatibility", "Complex pattern capability"]
    },
    {
      id: 3,
      image: ironGate,
      title: "Decorative Iron Gate",
      category: "Custom Gates",
      description: "Elegant custom iron gate featuring decorative patterns and professional finishing.",
      features: ["Custom design patterns", "Corrosion-resistant finish", "Automated opening system"]
    },
    {
      id: 4,
      image: workshopTools,
      title: "Professional Workshop Setup",
      category: "Workshop",
      description: "State-of-the-art metalworking tools and equipment for precision fabrication processes.",
      features: ["Advanced CNC machines", "Quality control systems", "Safety compliance"]
    },
    {
      id: 5,
      image: doorInstallation,
      title: "Security Door Installation",
      category: "Installation",
      description: "Professional installation services ensuring perfect fit and optimal security performance.",
      features: ["Expert installation team", "Quality assurance check", "Post-installation support"]
    },
    {
      id: 6,
      image: heroImage,
      title: "Industrial Fabrication Workshop",
      category: "Workshop",
      description: "Complete metal fabrication facility equipped with modern machinery and skilled technicians.",
      features: ["Full fabrication capability", "Quality control processes", "Timely project delivery"]
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Our Work Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Showcasing Excellence in Metal Fabrication and Engineering
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up animate-delay-100">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="animate-fade-in-up animate-delay-300">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="gallery-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="steel-card animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let us help you bring your metal fabrication vision to life with our expertise and advanced technology.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <a href="/contact">Get Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;