import { Award, BookOpen, Globe, Target, Users, Zap } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [showMoreTools, setShowMoreTools] = useState(false);
  const founders = [{
    name: "Manchala Gowtham",
    qualification: "Global Consultant",
    title: "CEO, Co-Founder",
    specialization: "Accounting, Finance, Audit",
    image: "/lovable-uploads/5dc392c4-f182-432a-895c-4ac498b609fa.png"
  }, {
    name: "Sainath Ailneni",
    qualification: "GST Practitioner",
    title: "Co-Founder",
    specialization: "Finance & Taxation",
    image: "/lovable-uploads/161b9124-5322-4b28-a7c5-36c2a56fa8cb.png"
  }, {
    name: "Revanth",
    qualification: "Digital Marketing Specialist",
    title: "Digital Marketing Lead & Video Editor",
    specialization: "Digital Marketing & Video Production",
    image: "/lovable-uploads/revanth.jpeg"
  }, {
    name: "+ 30 more professionals",
    qualification: "Expert team members worldwide",
    title: "",
    specialization: "",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
    isTeamIndicator: true
  }];
  const values = [{
    icon: Target,
    title: "Mission",
    description: "Deliver smart, ethical, and scalable financial solutions that turn complexity into clarity and drive long-term business growth."
  }, {
    icon: Globe,
    title: "Vision",
    description: "To be the trusted global partner for finance, accounting, audit, and tax—empowering businesses with clarity, compliance, and confidence."
  }, {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of professional excellence through continuous learning and adherence to international best practices."
  }];
  const tools = ["QuickBooks", "Xero", "SAP", "Tally", "Excel Advanced", "Power BI", "GST Portal", "Income Tax Portal", "MCA Portal", "IFRS Standards", "Oracle Financials", "NetSuite"];
  const additionalTools = ["Sage", "FreshBooks", "Wave Accounting", "Zoho Books", "MYOB", "Peachtree", "TurboTax", "TaxAct", "Bloomberg Terminal", "Reuters Eikon", "FactSet", "Morningstar Direct", "Crystal Reports", "Tableau", "QlikView", "SQL Server", "Oracle Database", "Python", "R Programming", "VBA", "Alteryx", "SPSS", "Audit Command Language (ACL)", "IDEA Data Analysis", "TeamMate", "CaseWare", "MindBridge", "AppZen", "DataSnipper"];
  return <section id="about" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            About <span className="text-gradient-primary">FAAT Plus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded by qualified professionals with global expertise, we deliver 
            customized financial solutions compliant with international standards.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => <div key={value.title} className="text-center p-8 rounded-2xl bg-card border border-border hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover:border-primary/20 transition-all duration-300 group" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>)}
        </div>

        {/* Founders Section */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Meet Our <span className="text-gradient-primary">Expert Team</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Led by qualified professionals with international certifications 
              and extensive experience in global financial standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => <div key={founder.name} className="card-professional text-center group" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className={`w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 ${
                      founder.name === "Manchala Gowtham" || founder.name === "Sainath Ailneni" || founder.name === "Revanth" ? "object-[center_20%]" : "object-top"
                    }`}
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>

                <h4 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {founder.name}
                </h4>
                <div className="space-y-1 mb-4">
                  {founder.title && <p className="text-primary font-bold text-lg">{founder.title}</p>}
                  <p className="text-accent font-medium">{founder.qualification}</p>
                  <p className="text-muted-foreground">{founder.specialization}</p>
                </div>
                
                {founder.isTeamIndicator}
              </div>)}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">
            Tools & <span className="text-gradient-primary">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => <div key={tool} className="trust-badge hover:bg-primary/10 hover:border-primary/30 transition-all duration-300" style={{
            animationDelay: `${index * 50}ms`
          }}>
                <Zap className="w-4 h-4 text-accent" />
                <span>{tool}</span>
              </div>)}
            
            {showMoreTools && additionalTools.map((tool, index) => <div key={tool} className="trust-badge hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${(tools.length + index) * 50}ms`
          }}>
                <Zap className="w-4 h-4 text-accent" />
                <span>{tool}</span>
              </div>)}
              
            <div 
              className="trust-badge bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setShowMoreTools(!showMoreTools)}
            >
              <span className="font-semibold">
                {showMoreTools ? "- Show Less" : "+ Many More"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;