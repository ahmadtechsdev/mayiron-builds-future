import { ReactNode } from "react";
import SocialBanner from "./SocialBanner";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SocialBanner />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;