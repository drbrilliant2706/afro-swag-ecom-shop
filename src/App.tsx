
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import Index from "./pages/Index";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Culture from "./pages/Culture";
import Lookbook from "./pages/Lookbook";
import Admin from "./pages/Admin";
import SizeGuide from "./pages/SizeGuide";
import ShippingInfo from "./pages/ShippingInfo";
import Returns from "./pages/Returns";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/about" element={<About />} />
                <Route path="/culture" element={<Culture />} />
                <Route path="/lookbook" element={<Lookbook />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/size-guide" element={<SizeGuide />} />
                <Route path="/shipping-info" element={<ShippingInfo />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<Product />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
