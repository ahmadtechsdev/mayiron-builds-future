import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const whatsappNumber = "+2347064155911"; // Replace with actual WhatsApp number
  const defaultMessage = "Hi! I'm interested in your metal fabrication services. Could you please provide more information?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded chat preview */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 w-80 bg-background border border-border rounded-lg shadow-xl animate-fade-in-up">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">MAY-IRON Support</h4>
                <p className="text-sm opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="bg-muted rounded-lg p-3">
              <p className="text-sm text-foreground">
                Hi there! 👋 Need help with metal fabrication, security doors, or CNC services? 
                I'm here to assist you!
              </p>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Chat on WhatsApp
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Click to chat with us on WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* Main WhatsApp button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        size="lg"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;