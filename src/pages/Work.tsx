import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ui/ImageModal";
import decorativePanel from "@/assets/decorative-panel.jpg";
import securityDoors from "@/assets/security-doors.jpg";
import decorativeGate from "@/assets/decorative-gate.jpg";
import decorativePlanters from "@/assets/decorative-planters.jpg";
import teamWorkshop from "@/assets/team-workshop.jpg";
import gardenAccessories from "@/assets/garden-accessories.jpg";
import residentialGate from "@/assets/residential-gate.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import plasmaCutting from "@/assets/plasma-cutting.jpg";
import pressBrake from "@/assets/press-brake.jpg";
import laserCuttingMachine from "@/assets/laser-cutting-machine.jpg";
import cncOperation from "@/assets/cnc-operation.jpg";
import designOffice from "@/assets/design-office.jpg";
import workshopExterior from "@/assets/workshop-exterior.jpg";
import workshopFacility from "@/assets/workshop-facility.jpg";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Security Doors", "Custom Fabrication", "Custom Gates", "Garden Accessories", "Our Team", "Our Facilities"];

  const projects = [
    {
      id: 1,
      image: decorativePanel,
      title: "Custom Wood & Metal Frame",
      category: "Custom Fabrication"
    },
    {
      id: 2,
      image: securityDoors,
      title: "Premium Security Doors",
      category: "Security Doors"
    },
    {
      id: 3,
      image: decorativeGate,
      title: "Ornate Decorative Gate", 
      category: "Custom Gates"
    },
    {
      id: 4,
      image: decorativePlanters,
      title: "Decorative Metal Planters",
      category: "Garden Accessories"
    },
    {
      id: 5,
      image: teamWorkshop,
      title: "Professional Workshop Team",
      category: "Our Team"
    },
    {
      id: 6,
      image: gardenAccessories,
      title: "Garden Decorative Accessories",
      category: "Garden Accessories"
    },
    {
      id: 7,
      image: residentialGate,
      title: "Residential Metal Gate",
      category: "Custom Gates"
    },
    {
      id: 8,
      image: decorativePanel,
      title: "Laser Cut Decorative Panel",
      category: "Custom Fabrication"
    },
    {
      id: 9,
      image: securityDoors,
      title: "Heavy Duty Security Doors",
      category: "Security Doors"
    },
    {
      id: 10,
      image: officeWorkspace,
      title: "Modern Office & Design Space",
      category: "Our Facilities"
    },
    {
      id: 11,
      image: plasmaCutting,
      title: "Precision Plasma Cutting",
      category: "Custom Fabrication"
    },
    {
      id: 12,
      image: pressBrake,
      title: "Heavy Duty Press Brake",
      category: "Our Facilities"
    },
    {
      id: 13,
      image: laserCuttingMachine,
      title: "Advanced Laser Cutting System",
      category: "Custom Fabrication"
    },
    {
      id: 14,
      image: cncOperation,
      title: "CNC Plasma Cutting Operation",
      category: "Custom Fabrication"
    },
    {
      id: 15,
      image: designOffice,
      title: "CAD Design & Engineering Office",
      category: "Our Facilities"
    },
    {
      id: 16,
      image: workshopExterior,
      title: "Workshop & Material Storage",
      category: "Our Facilities"
    },
    {
      id: 17,
      image: workshopFacility,
      title: "Production Workshop Facility",
      category: "Our Facilities"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Our Work Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Showcasing Excellence in Metal Fabrication and Engineering
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-12 bg-primary text-white">
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up animate-delay-100">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
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
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ImageModal
                key={project.id}
                src={project.image}
                alt={project.title}
              >
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-white/90">Click to view full size</p>
                  </div>
                </div>
              </ImageModal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="page-container">
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
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
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