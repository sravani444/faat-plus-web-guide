import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Accounting Services",
    "Finance & Consulting",
    "Auditing Services", 
    "Taxation Services",
    "GST Compliance",
    "Business Consulting"
  ];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">FAAT Plus</h3>
                <p className="text-xs text-primary-foreground/80 leading-none">Global Solutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Expert Finance, Accounts, Audit & Tax solutions delivered by 
              certified professionals with global expertise and local understanding.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:faatplus@gmail.com" className="text-sm hover:text-accent transition-colors">
                  faatplus@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+918500442696" className="text-sm hover:text-accent transition-colors">
                  +91 85004 42696
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/80">Follow Us:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/faat-plus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-primary-foreground/80">
                © 2024 FAAT Plus Global Solutions. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                ACCA, CA, CMA and CPA Certified Professionals | Global Standards | Trusted Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-strong"
        >
          <ArrowUp className="w-5 h-5 text-accent-foreground" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary-foreground/10 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;