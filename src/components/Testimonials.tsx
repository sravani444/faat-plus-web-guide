import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO",
      content: "FAAT Plus transformed our financial operations. Their expertise in international accounting standards gave us the confidence to expand globally. The team's responsiveness and professionalism are truly exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      role: "Founder",
      content: "Outstanding service! Their deep knowledge of GST compliance and tax optimization strategies saved us lakhs in operational costs. Manchala and Sainath's insights are world-class. Highly recommended for any business aiming to scale.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ritu Agarwal",
      company: "EduGrow India Pvt. Ltd.",
      role: "Finance Head",
      content: "We've partnered with several consultants over the years, but none have matched FAAT Plus in dedication and accuracy. Their team helped us align with MCA regulations and streamline vendor payments.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Arjun Mehta",
      company: "HealthKart Labs",
      role: "Co-Founder",
      content: "FAAT Plus has been instrumental in keeping our fast-paced startup financially sound. Their startup-specific accounting and funding compliance knowledge is invaluable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      company: "Real Estate Ventures",
      role: "CFO",
      content: "Their audit services are meticulous and reliable. FAAT Plus helped us automate processes, stay compliant, and improve reporting accuracy. Truly dependable professionals.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Martinez",
      company: "Global Consulting",
      role: "Director",
      content: "Working with FAAT Plus has been a game-changer. Their financial consulting helped us optimize working capital and improve profitability. They've become a trusted extension of our leadership team.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Anil Deshmukh",
      company: "Mahatech Systems",
      role: "Managing Director",
      content: "FAAT Plus guided us through a complex merger with full financial due diligence. Their understanding of cross-border accounting is top-notch and their integrity shines through.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Anita Patel",
      company: "IT Solutions Hub",
      role: "Managing Partner",
      content: "Their team understands the complexities of IT business accounting like few others. With their help, our quarterly reporting has become more transparent and investor-ready.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Karthik Reddy",
      company: "Innovista Mobility",
      role: "CEO",
      content: "FAAT Plus is a go-to for any startup serious about compliance and financial hygiene. They supported our transition from seed to Series A seamlessly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Neha Kulkarni",
      company: "Bharat Retail Networks",
      role: "VP Finance",
      content: "We've seen excellent results in internal financial health and audit readiness since working with FAAT Plus. Their personal attention and tech-driven approach stand out.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
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