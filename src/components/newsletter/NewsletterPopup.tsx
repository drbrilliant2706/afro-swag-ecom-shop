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
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Close newsletter popup"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Green header section */}
        <div className="bg-primary px-6 py-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-primary-foreground mb-2">
            Stay in the Loop
          </h2>
          <p className="text-primary-foreground/90 text-sm">
            Get exclusive drops, African fashion news & special offers
          </p>
        </div>

        {/* Form section */}
        <div className="px-6 py-8">
          <div className="flex items-center gap-2 mb-6 text-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm text-gray-600 font-medium">
              Join 10,000+ fashion enthusiasts
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full h-12 text-base border-gray-300 focus:border-primary focus:ring-primary"
                aria-label="Email address"
              />
              {error && (
                <p className="text-destructive text-sm mt-2">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Subscribing...
                </span>
              ) : (
                "Subscribe Now"
              )}
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            No spam, unsubscribe anytime. By subscribing, you agree to our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
