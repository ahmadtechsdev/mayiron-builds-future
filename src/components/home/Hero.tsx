import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fabrication.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-muted overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg fabrication-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-secondary/20 rounded-full fabrication-rotate"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary/10 rounded-lg fabrication-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-steel/20 rounded-lg fabrication-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="page-container py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="hero-title">
                Forging Precision, Building Security & Empowering Growth
              </h1>
              <p className="hero-subtitle">
                Leading provider in metal fabrication industry, specializing in high-quality steel security doors with cutting-edge CNC metal equipment for unparalleled precision and durability.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-4 py-6">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Security Doors</div>
                  <div className="text-muted-foreground">Maximum Protection</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">CNC Precision</div>
                  <div className="text-muted-foreground">Advanced Technology</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-steel" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Quality Assured</div>
                  <div className="text-muted-foreground">Industry Standards</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              >
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional metal fabrication workshop with CNC machines and security doors"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 fabrication-float">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 fabrication-pulse">
              <div className="text-2xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;