import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/20 to-accent/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10 animate-float delay-2000"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="trust-badge w-fit">
              <Award className="w-4 h-4 text-accent" />
              <span>3+ Years of Professional Excellence</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Expert{" "}
                <span className="text-gradient-primary">Finance</span>,{" "}
                <span className="text-gradient-primary">Accounting</span> &{" "}
                <span className="text-gradient-primary">Tax</span> Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                FAAT Plus Global Solutions delivers customized financial services 
                compliant with international standards. Led by ACCA and CMA qualified 
                professionals, we ensure your business growth with precision and trust.
              </p>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance Rate</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-professional group">
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline-professional">
                View Our Services
              </Button>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="trust-badge">
                <span className="font-semibold">ACCA Finalist</span>
              </div>
              <div className="trust-badge">
                <span className="font-semibold">CMA Finalist</span>
              </div>
              <div className="trust-badge">
                <span className="font-semibold">GST Practitioner</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Professional Financial Services"
                className="w-full rounded-2xl shadow-strong"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-2xl blur-sm opacity-60 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-accent rounded-2xl blur-sm opacity-40 animate-float delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;