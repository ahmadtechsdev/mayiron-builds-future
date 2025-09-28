import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import mayironLogo from "@/assets/mayiron-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work/Gallery", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={mayironLogo} 
              alt="MAY-IRON" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-[-4px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${
                  isActive(item.href) ? "after:scale-x-100" : "hover:after:scale-x-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              asChild 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-medium px-4 py-2 rounded-lg transition-all duration-300"
            >
              <a 
                href="https://drive.google.com/uc?export=download&id=1054PKXo2KuLeL1wvpNGtpGKsdTYA4CF1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Company Profile
              </a>
            </Button>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 bg-background z-[9999] h-screen w-screen">
            <div className="h-full overflow-y-auto">
              {/* Mobile Header */}
              <div className="flex items-center justify-between h-16 px-4 border-b border-border">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                  <img 
                    src={mayironLogo} 
                    alt="MAY-IRON" 
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col p-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-lg font-medium py-4 px-4 rounded-lg transition-colors border ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 border-primary/20"
                        : "text-foreground hover:text-primary hover:bg-muted border-border"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground mt-4 py-4 text-lg"
                >
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1054PKXo2KuLeL1wvpNGtpGKsdTYA4CF1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Company Profile
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground mt-4 py-4 text-lg"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;