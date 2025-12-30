import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { usePrefetchProducts } from "@/hooks/useProductsQuery";
import ProfileModal from "@/components/profile/ProfileModal";
import CartModal from "@/components/cart/CartModal";
import SearchModal from "@/components/search/SearchModal";

interface NavbarProps {
  variant?: "default" | "transparent";
  showNewDrop?: boolean;
}

const Navbar = ({ variant = "default", showNewDrop = true }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const { getTotalItems } = useCart();
  const { prefetchProducts } = usePrefetchProducts();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Prefetch products on hover
  const handleMenHover = () => prefetchProducts({ gender: 'MEN' });
  const handleWomenHover = () => prefetchProducts({ gender: 'WOMEN' });
  const handleAllProductsHover = () => prefetchProducts({});

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/men", label: "MEN", onHover: handleMenHover },
    { path: "/women", label: "WOMEN", onHover: handleWomenHover },
    { path: "/lookbook", label: "LOOKBOOK" },
    { path: "/about", label: "ABOUT" },
    { path: "/culture", label: "CULTURE" },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50" role="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-xl md:text-2xl font-bold text-black">
                  AFRICAN'S <span className="text-brand-green">FINEST</span>
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onMouseEnter={link.onHover}
                    className={`text-sm lg:text-base transition-colors ${
                      isActive(link.path)
                        ? "text-brand-green border-b-2 border-brand-green pb-1"
                        : "text-black hover:text-brand-green"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {showNewDrop && (
                  <Button 
                    asChild 
                    size="sm" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onMouseEnter={handleAllProductsHover}
                  >
                    <Link to="/men">NEW DROP</Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <Search 
                className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              />
              <User 
                className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                onClick={() => setIsProfileOpen(true)}
                aria-label="Profile"
              />
              <Link to="/favorites" aria-label="Favorites">
                <Heart className={`h-4 w-4 md:h-5 md:w-5 cursor-pointer transition-colors ${
                  isActive("/favorites") ? "text-primary fill-primary" : "text-black hover:text-red-600"
                }`} />
              </Link>
              <div className="relative">
                <ShoppingCart 
                  className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors" 
                  onClick={() => setIsCartOpen(true)}
                  aria-label="Cart"
                />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              </div>
              <Menu 
                className="h-4 w-4 md:h-5 md:w-5 text-black hover:text-red-600 cursor-pointer transition-colors md:hidden" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 bg-white">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2 transition-colors ${
                      isActive(link.path) ? "text-brand-green" : "text-black hover:text-brand-green"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {showNewDrop && (
                  <Button asChild size="sm" className="bg-primary text-primary-foreground mt-2">
                    <Link to="/men" onClick={() => setIsMenuOpen(false)}>NEW DROP</Link>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
