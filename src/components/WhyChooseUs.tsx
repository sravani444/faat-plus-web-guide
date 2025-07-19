import { Clock, Globe, Award, Users, Shield, Zap, CheckCircle, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "ACCA, CA, CMA and CPA qualified experts with international certifications ensuring world-class service delivery.",
      stat: "100%",
      statLabel: "Certified Team"
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "Expertise in international accounting standards and regulations across multiple jurisdictions.",
      stat: "15+",
      statLabel: "Countries Served"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to meeting deadlines with efficient processes and dedicated project management.",
      stat: "99%",
      statLabel: "On-Time Delivery"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Bank-level security protocols to protect your sensitive financial information and maintain confidentiality.",
      stat: "256-bit",
      statLabel: "Encryption"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated account managers providing customized solutions tailored to your specific business needs.",
      stat: "24/7",
      statLabel: "Support Available"
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused",
      description: "Strategic insights and recommendations to optimize your financial performance and business growth.",
      stat: "3x",
      statLabel: "Average ROI Improvement"
    }
  ];

  const benefits = [
    "Cost-effective solutions compared to in-house teams",
    "Access to latest accounting software and technologies",
    "Scalable services that grow with your business",
    "Risk mitigation through expert compliance management",
    "Strategic financial insights for better decision making",
    "Global best practices implementation"
  ];

  return (
    <section id="why-choose" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Why Choose <span className="text-gradient-primary">FAAT Plus</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the difference of working with certified professionals who 
            understand global standards and deliver exceptional results.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="card-professional group hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-accent">{reason.stat}</div>
                    <div className="text-sm text-muted-foreground">{reason.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary/5 via-background to-accent/5 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                Additional <span className="text-gradient-primary">Benefits</span>
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <p className="text-foreground group-hover:text-primary transition-colors duration-200">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-center shadow-strong">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-primary-foreground mb-4">
                  Ready to Get Started?
                </h4>
                <p className="text-primary-foreground/80 mb-6">
                  Join 50+ satisfied clients who trust us with their financial operations.
                </p>
                <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors duration-200">
                  Schedule Consultation
                </button>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-2xl blur-sm opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-2xl blur-sm opacity-40 animate-float delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;