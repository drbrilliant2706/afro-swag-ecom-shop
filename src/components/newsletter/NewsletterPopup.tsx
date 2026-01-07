import { useState, useEffect } from "react";
import { X, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Welcome to our family! 🎉",
      description: "You've successfully subscribed to our newsletter.",
    });

    setIsSubmitting(false);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-xs bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Close newsletter popup"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        {/* Green header section */}
        <div className="bg-primary px-4 py-5 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full mb-2">
            <Mail className="h-5 w-5 text-primary-foreground" />
          </div>
          <h2 className="text-lg font-bold text-primary-foreground mb-1">
            Stay in the Loop
          </h2>
          <p className="text-primary-foreground/90 text-xs">
            Get exclusive drops & special offers
          </p>
        </div>

        {/* Form section */}
        <div className="px-4 py-5">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full h-9 text-sm border-gray-300 focus:border-primary focus:ring-primary"
                aria-label="Email address"
              />
              {error && (
                <p className="text-destructive text-xs mt-1">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-9 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Subscribing...
                </span>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-[10px] text-gray-500 text-center mt-3">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
