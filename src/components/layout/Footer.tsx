import { Youtube } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "simple" | "full";
}

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.43l1.4-5.96s-.36-.72-.36-1.78c0-1.67.96-2.92 2.16-2.92 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.57-.99 4-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.76-2.24 3.76-5.48 0-2.87-2.06-4.87-5-4.87-3.4 0-5.4 2.55-5.4 5.18 0 1.03.4 2.13.89 2.73.1.12.11.22.08.34l-.33 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.26 7.93-7.26 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.22 7.46-1.21 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z"/>
  </svg>
);

const SocialIcons = () => (
  <div className="flex items-center justify-center space-x-6 sm:space-x-4 mt-4">
    <a 
      href="https://www.tiktok.com/@afrikas_finest?_r=1&_t=ZM-92Uxm1JvGrj" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="text-primary hover:text-primary/80 transition-colors p-2 -m-2 touch-manipulation"
    >
      <TikTokIcon className="h-6 w-6 sm:h-5 sm:w-5" />
    </a>
    <a 
      href="https://youtube.com/@afrikas_finest?si=aijSQpTg-rTLvSWZ" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="text-primary hover:text-primary/80 transition-colors p-2 -m-2 touch-manipulation"
    >
      <Youtube className="h-6 w-6 sm:h-5 sm:w-5" />
    </a>
    <a 
      href="https://pin.it/1aXqUGjlo" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Pinterest"
      className="text-primary hover:text-primary/80 transition-colors p-2 -m-2 touch-manipulation"
    >
      <PinterestIcon className="h-6 w-6 sm:h-5 sm:w-5" />
    </a>
  </div>
);

export const Footer = ({ variant = "simple" }: FooterProps) => {
  if (variant === "full") {
    return (
      <footer className="bg-black text-white py-10 sm:py-12 md:py-16" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {/* Shop Links */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 tracking-wide">SHOP</h3>
              <ul className="space-y-2 sm:space-y-2">
                <li><Link to="/men" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">Men</Link></li>
                <li><Link to="/women" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">Women</Link></li>
                <li><Link to="/lookbook" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">Lookbook</Link></li>
                <li><Link to="/favorites" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">Favorites</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 tracking-wide">COMPANY</h3>
              <ul className="space-y-2 sm:space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">About Us</Link></li>
                <li><Link to="/culture" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">Culture</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">Contact</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 tracking-wide">SUPPORT</h3>
              <ul className="space-y-2 sm:space-y-2">
                <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">FAQ</Link></li>
                <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">Shipping Info</Link></li>
                <li><Link to="/returns" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">Returns</Link></li>
                <li><Link to="/size-guide" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 inline-block touch-manipulation">Size Guide</Link></li>
              </ul>
            </div>

            {/* Brand */}
            <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 tracking-wide">AFRICA'S FINEST</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Authentic streetwear celebrating East African culture and heritage.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <SocialIcons />
            <p className="text-gray-400 text-xs sm:text-sm mt-4">
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
