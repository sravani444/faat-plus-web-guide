import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is your response time for queries?",
      answer: "We typically respond to all queries within 24 hours during business days. For urgent matters, you can reach us via WhatsApp for immediate assistance."
    },
    {
      question: "Do you offer free consultation?",
      answer: "Yes, we offer a free 30-minute consultation call to understand your requirements and suggest the best solutions for your business."
    },
    {
      question: "What are your service charges?",
      answer: "Our charges vary based on the complexity and scope of services required. We provide transparent pricing after understanding your specific needs during the consultation."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we have experience working with international clients and provide services compliant with global accounting standards including IFRS."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services and how we can help your business.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover:border-primary/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left flex items-center justify-between group"
              >
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="mt-6 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 p-8">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team is here to help. Contact us for a free consultation and personalized advice for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-xl font-semibold transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
              </button>
              <button 
                className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-xl font-semibold transition-colors"
                onClick={() => window.open('tel:+918500442696', '_blank')}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;