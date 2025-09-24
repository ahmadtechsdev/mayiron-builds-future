import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react";

const SocialBanner = () => {
  return (
    <div className="social-banner py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+234 916 854 4137</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>mayirondeco@gmail.com</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">Follow us:</span>
          <div className="flex space-x-3">
            <a 
              href="#" 
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;