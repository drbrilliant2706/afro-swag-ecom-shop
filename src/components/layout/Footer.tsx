import { Mail, MessageCircle, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "simple" | "full";
}

const SocialIcons = () => (
  <div className="flex items-center justify-center space-x-4 mt-4">
    <a 
      href="mailto:africasfinest2@gmail.com" 
      aria-label="Email us"
      className="text-primary hover:text-primary/80 transition-colors"
    >
      <Mail className="h-5 w-5" />
    </a>
    <a 
      href="https://wa.me/255123456789" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="text-primary hover:text-primary/80 transition-colors"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
    <a 
      href="https://instagram.com/africasfinest" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-primary hover:text-primary/80 transition-colors"
    >
      <Instagram className="h-5 w-5" />
    </a>
    <a 
      href="https://twitter.com/africasfinest" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-primary hover:text-primary/80 transition-colors"
    >
      <Twitter className="h-5 w-5" />
    </a>
  </div>
);

export const Footer = ({ variant = "simple" }: FooterProps) => {
  if (variant === "full") {
    return (
      <footer className="bg-black text-white py-12 sm:py-16" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Shop Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 tracking-wide">SHOP</h3>
              <ul className="space-y-2">
                <li><Link to="/men" className="text-gray-300 hover:text-white transition-colors">Men</Link></li>
                <li><Link to="/women" className="text-gray-300 hover:text-white transition-colors">Women</Link></li>
                <li><Link to="/lookbook" className="text-gray-300 hover:text-white transition-colors">Lookbook</Link></li>
                <li><Link to="/favorites" className="text-gray-300 hover:text-white transition-colors">Favorites</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 tracking-wide">COMPANY</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/culture" className="text-gray-300 hover:text-white transition-colors">Culture</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 tracking-wide">SUPPORT</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link to="/returns" className="text-gray-300 hover:text-white transition-colors">Returns</Link></li>
                <li><Link to="/size-guide" className="text-gray-300 hover:text-white transition-colors">Size Guide</Link></li>
              </ul>
            </div>

            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold mb-4 tracking-wide">AFRICA'S FINEST</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Authentic streetwear celebrating East African culture and heritage.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <SocialIcons />
            <p className="text-gray-400 text-sm mt-4">
              © {new Date().getFullYear()} Africa's Finest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-black border-t border-gray-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <SocialIcons />
        <p className="text-sm sm:text-base text-gray-400 mt-4">
          © {new Date().getFullYear()} Africa's Finest. Proudly representing Tanzania.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
