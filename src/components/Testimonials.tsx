import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO",
      content: "FAAT Plus transformed our financial operations. Their expertise in international standards helped us expand globally with confidence. The team's responsiveness and professionalism are exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      role: "Founder",
      content: "Outstanding service! Their GST compliance and tax optimization strategies saved us thousands. Manchala and Sainath's expertise is truly world-class. Highly recommend for any growing business.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      company: "Real Estate Ventures",
      role: "CFO",
      content: "Their audit services are thorough and professional. FAAT Plus helped us streamline our accounting processes and ensure full compliance. The personalized attention we receive is remarkable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Martinez",
      company: "Global Consulting",
      role: "Director",
      content: "Working with FAAT Plus has been a game-changer. Their financial consulting helped optimize our cash flow and improve profitability. Professional, reliable, and results-driven.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Anita Patel",
      company: "IT Solutions Hub",
      role: "Managing Partner",
      content: "Exceptional service quality and attention to detail. Their team understands the complexities of IT business accounting. We've seen significant improvements in our financial reporting.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Robert Thompson",
      company: "Startup Accelerator",
      role: "Investment Manager",
      content: "FAAT Plus provides invaluable support to our portfolio companies. Their expertise in startup accounting and compliance is unmatched. A trusted partner for financial success.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about 
            working with FAAT Plus Global Solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-professional group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-accent-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Join Our Satisfied Clients</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Experience Excellence?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you achieve your financial goals with our expert services 
            and personalized approach to business success.
          </p>
          <button className="btn-professional">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;