import { FileText, Brain, BarChart3, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Simple Cognitive Tests",
      description: "Take easy-to-understand tests from your mobile device or computer. Our assessments are designed to be accessible for all ages and technical skill levels.",
      details: ["Memory recall exercises", "Pattern recognition tasks", "Language comprehension tests", "Attention and focus assessments"]
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced machine learning algorithms analyze your responses, comparing them against extensive clinical datasets to identify potential cognitive changes.",
      details: ["Pattern recognition analysis", "Response time evaluation", "Accuracy scoring", "Trend identification over time"]
    },
    {
      icon: BarChart3,
      title: "Clear Reports",
      description: "Receive easy-to-understand reports that highlight key findings without overwhelming medical jargon. Perfect for sharing with family or healthcare providers.",
      details: ["Visual progress tracking", "Risk level indicators", "Personalized recommendations", "Printable summary reports"]
    },
    {
      icon: FileText,
      title: "Early Action",
      description: "Use insights to have informed conversations with healthcare professionals and take proactive steps for cognitive health management.",
      details: ["Healthcare provider sharing", "Family discussion guides", "Resource recommendations", "Follow-up scheduling"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-brain">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            How <span className="text-gradient">Cog.ai</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Four simple steps to better understand your cognitive health and take proactive action.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-full text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="p-3 bg-gradient-hero rounded-lg">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="bg-card rounded-2xl p-8 shadow-card">
                    <div className="bg-gradient-brain rounded-xl p-12 text-center">
                      <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                        <step.icon className="h-12 w-12 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Step {index + 1}</h4>
                      <p className="text-muted-foreground">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why This Process Works</h2>
            <p className="text-lg text-muted-foreground">
              Our approach combines scientific rigor with human-centered design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Evidence-Based",
                description: "Every test and algorithm is validated through clinical studies and peer-reviewed research."
              },
              {
                title: "Privacy-First",
                description: "Your data stays secure with end-to-end encryption and HIPAA-compliant storage."
              },
              {
                title: "Accessible Design",
                description: "Designed for users of all ages and technical abilities, with clear instructions and support."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Try our demo to see how simple and effective cognitive screening can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="btn-hero">Try Demo</a>
            <a href="/contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;