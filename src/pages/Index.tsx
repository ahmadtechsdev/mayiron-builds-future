import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import QuickGallery from "@/components/home/QuickGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <QuickGallery />
      <WhyChooseUs />
      <CallToAction />
    </Layout>
  );
};

export default Index;
