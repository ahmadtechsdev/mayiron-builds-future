import { Wrench, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-steel-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">MAY-IRON</span>
                <span className="text-xs text-gray-300">Professional Fabrication</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider in metal fabrication industry, specializing in high-quality steel security doors with cutting-edge CNC metal equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/work" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                Our Work
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>CNC Design & Engineering</li>
              <li>Laser Cutting Services</li>
              <li>Steel Security Doors</li>
              <li>Custom Metal Fabrication</li>
              <li>Iron Related Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+234 802 345 6789</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@mayiron.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} MAY-IRON Limited. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm">
              BN 3120358 | www.mayiron.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;