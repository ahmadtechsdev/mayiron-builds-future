import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

const ImageModal = ({ src, alt, children }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer relative">
          {children}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-2">
              <ZoomIn className="h-6 w-6 text-gray-800" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl w-full h-auto p-0 bg-transparent border-0">
        <div className="relative">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;