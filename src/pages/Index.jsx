import { Link } from "react-router-dom";
import { ArrowRight, Play, Shield, Users, Brain, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-brain-network.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              <span className="text-gradient">Cog.ai</span>
              <br />
              <span className="text-3xl sm:text-4xl">Early Detection, Better Care</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              AI-powered early dementia detection app. Helping families and doctors detect cognitive issues early through simple tests and easy-to-understand reports.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link 
                to="/demo" 
                className="btn-hero inline-flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/how-it-works" 
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Learn More</span>
                <Play className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cog Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Cog.ai?</h2>
            <p className="text-lg text-muted-foreground">
              Transforming cognitive health through accessible AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Early Detection",
                description: "Identify cognitive changes before symptoms become severe"
              },
              {
                icon: CheckCircle,
                title: "Accuracy",
                description: "AI-powered analysis backed by clinical research"
              },
              {
                icon: Users,
                title: "Accessibility",
                description: "Simple tests that anyone can take from home"
              },
              {
                icon: Shield,
                title: "Peace of Mind",
                description: "Clear reports for families and healthcare providers"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft card-hover">
                <div className="p-3 bg-gradient-hero rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">See How It Works</h2>
          
          <div className="relative bg-gradient-brain rounded-2xl p-8 shadow-card">
            <div className="bg-card rounded-xl p-12 text-center">
              <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 animate-float cursor-pointer hover:scale-110 transition-transform duration-300">
                <Play className="h-12 w-12 text-white ml-1" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Watch Our Explainer Video
              </h3>
              <p className="text-muted-foreground">
                Learn how Cog.ai helps detect cognitive changes through simple, accessible testing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Powered by Advanced AI</h2>
            <p className="text-lg text-muted-foreground">
              Built on cutting-edge machine learning and healthcare expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary rounded-lg">
                  <Brain className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI/ML Powered</h3>
              </div>
              <p className="text-muted-foreground">
                Our algorithms are trained on extensive clinical datasets and validated through peer-reviewed research, ensuring accurate and reliable cognitive assessments.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-secondary rounded-lg">
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Privacy First</h3>
              </div>
              <p className="text-muted-foreground">
                Your data is encrypted and secure. We follow HIPAA guidelines and never share personal information without your explicit consent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;