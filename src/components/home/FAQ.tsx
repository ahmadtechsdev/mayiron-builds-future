import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of metal fabrication services do you offer?",
      answer: "We specialize in CNC design & engineering, laser cutting services, steel security doors, custom metal fabrication, iron-related solutions, and comprehensive quality assurance. Our services cover both residential and commercial projects."
    },
    {
      question: "How long does it take to complete a typical project?",
      answer: "Project timelines vary depending on complexity and scope. Simple security doors typically take 7-14 days, while custom fabrication projects may take 2-6 weeks. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide professional installation services for all our products. Our skilled technicians ensure proper fitting and optimal performance. We also offer post-installation support and maintenance services."
    },
    {
      question: "What materials do you work with?",
      answer: "We work with various grades of steel, stainless steel, aluminum, and other metal alloys. We source high-quality materials that meet industry standards and are suitable for Nigerian climate conditions."
    },
    {
      question: "Can you create custom designs based on my specifications?",
      answer: "Absolutely! We specialize in custom fabrication. Our design team works closely with clients to create bespoke solutions that meet specific requirements, aesthetic preferences, and functional needs."
    },
    {
      question: "What is your quality assurance process?",
      answer: "We follow rigorous quality control processes including material inspection, precision testing, finish quality checks, and final product verification. Every project undergoes multiple quality checkpoints before delivery."
    },
    {
      question: "Do you offer warranties on your products?",
      answer: "Yes, we provide comprehensive warranties on all our products and services. Warranty terms vary by product type and are discussed during the consultation phase. We also offer maintenance services to extend product lifespan."
    },
    {
      question: "How can I get a quote for my project?",
      answer: "You can get a free quote by contacting us through our website, calling our office, or visiting our workshop. We provide detailed quotations after understanding your project requirements and conducting site assessments if needed."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="page-container">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our metal fabrication services and processes
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;