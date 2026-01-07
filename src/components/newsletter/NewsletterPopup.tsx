import { useState, useEffect } from "react";
import { X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const hasSeenNewsletter = localStorage.getItem("newsletter_dismissed");
    
    if (!hasSeenNewsletter) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: email.trim(), source: 'popup' });

      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation - already subscribed
          toast({
            title: "Already subscribed!",
            description: "This email is already on our list.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Welcome to our family! 🎉",
          description: "You've successfully subscribed to our newsletter.",
        });
      }
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal - slides up on mobile, centered on desktop */}
      <div className="relative w-full sm:max-w-xs bg-white rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom sm:zoom-in-95 fade-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors touch-manipulation"
          aria-label="Close newsletter popup"
        >
          <X className="h-5 w-5 sm:h-4 sm:w-4 text-gray-600" />
        </button>

        {/* Green header section */}
        <div className="bg-primary px-5 py-6 sm:px-4 sm:py-5 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 bg-white/20 rounded-full mb-3 sm:mb-2">
            <Mail className="h-6 w-6 sm:h-5 sm:w-5 text-primary-foreground" />
          </div>
          <h2 className="text-xl sm:text-lg font-bold text-primary-foreground mb-1">
            Stay in the Loop
          </h2>
          <p className="text-primary-foreground/90 text-sm sm:text-xs">
            Get exclusive drops & special offers
          </p>
        </div>

        {/* Form section */}
        <div className="px-5 py-6 sm:px-4 sm:py-5 pb-8 sm:pb-5">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-3">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full h-12 sm:h-9 text-base sm:text-sm border-gray-300 focus:border-primary focus:ring-primary"
                aria-label="Email address"
              />
              {error && (
                <p className="text-destructive text-sm sm:text-xs mt-1">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 sm:h-9 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-sm transition-all touch-manipulation"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 sm:h-3 sm:w-3 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Subscribing...
                </span>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4 sm:mt-3">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
