import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Accounting Services",
    "Finance & Consulting", 
    "Auditing Services",
    "Taxation Services",
    "GST Compliance",
    "Business Consulting",
    "Other"
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "faatplus@gmail.com",
      action: "mailto:faatplus@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 85004 42696",
      action: "tel:+918500442696"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      content: "Chat with us instantly",
      action: "https://wa.me/918500442696"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Hyderabad, Telangana, India",
      action: null
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business finances? Contact our expert team for a 
            personalized consultation and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-professional">
            <h3 className="text-2xl font-heading font-semibold mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements and how we can help..."
                  rows={5}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="btn-professional w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 hover:border-primary/20 transition-all duration-300 group cursor-pointer"
                  onClick={() => info.action && window.open(info.action, '_blank')}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="card-professional bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-heading font-semibold">Business Hours</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="btn-accent w-full group">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="btn-outline-professional w-full">
                Download Our Services Brochure
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center bg-gradient-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team is available for urgent consultations. Contact us directly for 
            immediate support with your financial requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => window.open('tel:+918500442696', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open('https://wa.me/918500442696', '_blank')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;