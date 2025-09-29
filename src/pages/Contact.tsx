import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@cog.ai",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9 AM to 6 PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Healthcare Blvd, Suite 100",
      description: "San Francisco, CA 94105"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Online Support",
      description: "Our team is here to help around the clock"
    }
  ];

  const faqs = [
    {
      question: "Is Cog.ai a medical device?",
      answer: "No, Cog.ai is a research prototype and not a medical device. Our assessments are designed to provide insights but should not replace professional medical diagnosis."
    },
    {
      question: "How is my data protected?",
      answer: "We use enterprise-grade encryption and follow HIPAA guidelines to protect your sensitive health information. Your data is never shared without your explicit consent."
    },
    {
      question: "Can I share results with my doctor?",
      answer: "Yes! Our reports are designed to be easily shared with healthcare providers to support informed discussions about cognitive health."
    },
    {
      question: "How often should I take assessments?",
      answer: "We recommend taking assessments every 3-6 months for ongoing monitoring, but your healthcare provider may suggest a different schedule based on your individual needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-brain">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Contact <span className="text-gradient">Cog.ai</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Have questions about cognitive health screening? Our team of experts is here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft text-center card-hover">
                <CardContent className="pt-6">
                  <div className="p-3 bg-gradient-hero rounded-lg w-fit mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-2">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="demo">Demo Request</option>
                        <option value="healthcare">Healthcare Partnership</option>
                        <option value="technical">Technical Support</option>
                        <option value="research">Research Collaboration</option>
                        <option value="press">Press & Media</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Please describe how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full btn-hero">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Support */}
              <Card className="mt-8 shadow-soft bg-gradient-brain">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Need Immediate Support?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For urgent questions or technical issues, our support team is available 24/7 through our online chat system.
                  </p>
                  <Button variant="outline" className="hover:bg-card">
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-800">
            <strong>Important:</strong> If you're experiencing a medical emergency or having thoughts of self-harm, 
            please contact emergency services immediately at 911 or your local emergency number. 
            Cog.ai is not intended for emergency medical situations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;