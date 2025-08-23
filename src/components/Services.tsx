import { Calculator, FileBarChart, Globe, Shield, TrendingUp } from "lucide-react";

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
    },
    {
      icon: Globe,
      title: "Digital Marketing & Outsourcing Services",
      description: "At FAAT Plus, the \"Plus\" means more than Finance, Accounts, Audit & Tax—we empower your business with digital growth and cost-effective outsourcing solutions.",
      features: ["Lower Costs, Higher Profits - Up to 50% cost reduction", "Skilled Professionals - Digital marketers, IT experts, support staff", "End-to-End Services - Marketing campaigns, voice processes, back-office support", "Scalable & Reliable - Flexible staffing that adapts to your needs"]
    }
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
      </div>
    </section>
  );
};

export default Services;