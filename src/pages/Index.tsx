import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import QuickGallery from "@/components/home/QuickGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <QuickGallery />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </Layout>
  );
};

export default Index;
