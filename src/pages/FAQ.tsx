
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search, User, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is African's Finest?",
      answer: "African's Finest is a premium streetwear brand celebrating East African heritage through contemporary fashion. We represent the finest of African culture with designs that tell our story while meeting international quality standards."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard delivery takes 3-7 business days within East Africa (Tanzania and Kenya). International shipping takes 10-21 business days depending on your location."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we proudly ship worldwide! We want to share African fashion globally and make it accessible to our diaspora and fashion enthusiasts everywhere."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, Airtel Money, Visa, Mastercard, and direct bank transfers. We're committed to making payment convenient for our East African customers."
    },
    {
      question: "Can I return or exchange my order?",
      answer: "Yes, we offer 30-day returns on unworn items with original tags attached. Items must be in original condition for full refund or exchange."
    },
    {
      question: "What sizes do you offer?",
      answer: "We offer sizes from XS to XXL to ensure everyone can represent African excellence. Check our size guide for detailed measurements."
    },
    {
      question: "Are your products authentic?",
      answer: "Absolutely! All our products are 100% authentic African's Finest designs. We take pride in our craftsmanship and quality control."
    },
    {
      question: "How do I care for my African's Finest clothing?",
      answer: "Machine wash cold, tumble dry low. Our premium cotton blends are designed to maintain their quality and vibrant prints with proper care."
    },
    {
      question: "Do you offer bulk orders or wholesale?",
      answer: "Yes, we offer bulk orders for businesses, events, and organizations. Contact us at africasfinest2@gmail.com for wholesale pricing."
    },
    {
      question: "How can I stay updated on new releases?",
      answer: "Follow us on social media and subscribe to our newsletter for exclusive access to new drops, sales, and African fashion inspiration."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">
                AFRICAN'S <span className="text-brand-green">FINEST</span>
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-black hover:text-brand-green transition-colors">HOME</a>
                <a href="/men" className="text-black hover:text-brand-green transition-colors">MEN</a>
                <a href="/women" className="text-black hover:text-brand-green transition-colors">WOMEN</a>
                <a href="/lookbook" className="text-black hover:text-brand-green transition-colors">LOOKBOOK</a>
                <a href="/about" className="text-black hover:text-brand-green transition-colors">ABOUT</a>
                <a href="/culture" className="text-black hover:text-brand-green transition-colors">CULTURE</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-black hover:text-brand-green cursor-pointer transition-colors" />
              <User className="h-5 w-5 text-black hover:text-brand-green cursor-pointer transition-colors" />
              <Heart className="h-5 w-5 text-black hover:text-brand-green cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-black hover:text-brand-green cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-brand-green text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="text-xl text-white">Everything you need to know about African's Finest</p>
          <p className="text-lg text-white mt-2">Fashion at it's ultimate prime</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-black">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-red-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our customer service team is here to help.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              <a href="/contact">CONTACT US</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 African's Finest. Fashion at it's ultimate prime. Proudly representing Tanzania & Kenya.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
