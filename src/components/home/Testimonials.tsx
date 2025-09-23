import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mr. Adebayo Johnson",
      role: "Residential Client",
      rating: 5,
      comment: "Outstanding quality and professional service! MAY-IRON delivered exactly what we needed for our home security. The steel door exceeded our expectations.",
      project: "Residential Security Door Installation"
    },
    {
      name: "Engr. Sarah Okafor", 
      role: "Commercial Project Manager",
      rating: 5,
      comment: "Their precision CNC cutting services are exceptional. We've worked with MAY-IRON on multiple commercial projects and they consistently deliver on time.",
      project: "Commercial Building Fabrication"
    },
    {
      name: "Chief Emmanuel Eze",
      role: "Property Developer",
      rating: 5,
      comment: "Reliable, professional, and skilled. The custom iron gates they fabricated for our estate are both beautiful and functional. Highly recommended!",
      project: "Estate Gate Installation"
    },
    {
      name: "Mrs. Fatima Abdullahi",
      role: "Homeowner",
      rating: 5,
      comment: "From design to installation, the entire process was smooth. The team was professional and the end result speaks for itself. Great value for money!",
      project: "Custom Security Solution"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="page-container">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experience with MAY-IRON
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="steel-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Quote className="h-8 w-8 text-primary/50" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <p className="text-foreground italic leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-primary font-medium mt-1">{testimonial.project}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;