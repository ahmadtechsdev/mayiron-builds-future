import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Map = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/EacWTfrtHY9zKv7u8?g_st=ipc";
  const address = "Plot 1019, opp. Gudu Electrical Parts Market, Gudu, FCT Abuja, Nigeria.";

  return (
    <section className="py-20 bg-muted/30">
      <div className="page-container">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Visit Our Workshop
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Come and see our state-of-the-art facilities and meet our expert team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {address}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Workshop Hours</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.855088895952!2d7.4183!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba13b16a4e1%3A0x1a2b3c4d5e6f7890!2sGudu%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MAY-IRON Workshop Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;