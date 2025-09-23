import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-steel-dark to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-lg fabrication-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full fabrication-rotate"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-lg fabrication-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Start Your Next Project?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Let our experts help you design and fabricate precision metal solutions that exceed your expectations. Get your free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              asChild 
              size="lg"
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group text-lg"
            >
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg"
            >
              <a href="tel:+234-802-345-6789">
                <Phone className="mr-2 h-6 w-6" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Professional Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;