import Layout from "@/components/layout/Layout";
import { Shield, Target, Heart, Users, Award, Cog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "We never compromise on quality and ensure every project meets the highest industry standards."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Our advanced CNC technology and skilled craftsmanship deliver unparalleled precision in every detail."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do, driving us to exceed expectations consistently."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Our dedicated team works collaboratively to deliver innovative solutions and exceptional results."
    }
  ];

  const milestones = [
    { year: "2008", event: "MAY-IRON Company Founded", description: "Started with a vision to revolutionize metal fabrication" },
    { year: "2012", event: "First CNC Machine Installed", description: "Invested in cutting-edge technology for precision manufacturing" },
    { year: "2015", event: "500+ Projects Milestone", description: "Reached a significant milestone in project completion" },
    { year: "2020", event: "Advanced Laser Cutting", description: "Upgraded to state-of-the-art laser cutting systems" },
    { year: "2024", event: "Industry Leadership", description: "Recognized as a leading provider in metal fabrication" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              About MAY-IRON
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Innovative Engineering for the Modern World
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Leading Metal Fabrication Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MAY-IRON Company is a leading provider in the metal fabrication industry, specializing in the production of high-quality steel security doors. With a commitment to innovation, we leverage cutting-edge CNC metal equipment to ensure unparalleled precision and durability in all our fabrication processes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our focus on advanced technology and craftsmanship allows us to meet the highest standards of security and design, making us a trusted partner in delivering reliable, custom-tailored metal solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets MAY-IRON apart is our unwavering dedication to excellence in every project. By integrating the latest advancements in metal fabrication, we consistently deliver products that exceed industry benchmarks.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <div className="text-center p-6 bg-card rounded-lg border border-border shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border shadow-lg">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border shadow-lg">
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="steel-card animate-fade-in-up">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To be the leading metal fabrication company recognized globally for innovative engineering solutions, exceptional quality, and commitment to customer satisfaction while setting new industry standards for precision and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="steel-card animate-fade-in-up animate-delay-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To provide superior metal fabrication services through cutting-edge technology, skilled craftsmanship, and innovative solutions that ensure maximum security, precision, and customer satisfaction in every project we undertake.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="text-center space-y-4 p-6 rounded-lg hover:bg-muted/20 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our path to becoming industry leaders
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="relative flex items-start space-x-8 pb-12 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;