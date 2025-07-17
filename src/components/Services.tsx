import { Calculator, FileBarChart, Shield, TrendingUp, Globe, Users, BookOpen, Building, UtensilsCrossed, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Global Accounting Services",
      description: "Comprehensive bookkeeping, financial reporting, and accounting compliance for businesses of all sizes.",
      features: ["Bookkeeping & Record Maintenance", "Financial Statement Preparation", "Management Reporting", "Cash Flow Analysis"]
    },
    {
      icon: TrendingUp,
      title: "Global Finance & Consulting",
      description: "Strategic financial consulting to optimize your business performance and growth opportunities.",
      features: ["Financial Planning & Analysis", "Budget Preparation", "Investment Advisory", "Business Valuation"]
    },
    {
      icon: Shield,
      title: "Global Auditing Services",
      description: "Independent audit services ensuring compliance with international auditing standards and regulations.",
      features: ["Statutory Audits", "Internal Audits", "Risk Assessment", "Compliance Audits"]
    },
    {
      icon: FileBarChart,
      title: "Global Taxation Services",
      description: "Expert tax planning and compliance services for individuals and businesses across multiple jurisdictions.",
      features: ["Tax Planning & Compliance", "GST Advisory", "International Taxation", "Tax Optimization"]
    }
  ];

  const industries = [
    { icon: Building, name: "Startups & SMEs", description: "Scalable financial solutions for growing businesses" },
    { icon: Globe, name: "E-Commerce", description: "Multi-platform accounting and tax compliance" },
    { icon: Users, name: "IT & Technology", description: "Tech-focused financial consulting and compliance" },
    { icon: BookOpen, name: "Real Estate", description: "Property accounting and investment advisory" },
    { icon: UtensilsCrossed, name: "Food & Beverage Industry", description: "Specialized accounting for restaurants and food businesses" },
    { icon: Home, name: "Mortgage Industry", description: "Financial compliance and reporting for mortgage services" },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        {/* Services Section */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Our <span className="text-gradient-primary">Professional Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your business needs, 
            delivered by certified professionals with global expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-professional group hover:bg-gradient-to-br hover:from-background hover:to-secondary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold">
            Industries We <span className="text-gradient-primary">Serve</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise across diverse industries with customized solutions 
            for each sector's unique requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="text-center p-6 rounded-xl bg-card border border-border hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover:border-primary/20 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h4 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                {industry.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;