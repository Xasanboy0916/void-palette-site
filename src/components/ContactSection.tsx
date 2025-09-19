import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "muxtorov.hasanboy@example.com",
      link: "mailto:muxtorov.hasanboy@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+998 (90) 123-4567",
      link: "tel:+998901234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Tashkent, Uzbekistan",
      link: null
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
            <p className="text-foreground/70 leading-relaxed mb-8">
              I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
              Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-foreground/70 hover:text-primary transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-foreground/70">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 glass-effect rounded-lg border border-border/30">
              <h4 className="font-semibold text-foreground mb-3">Quick Response Time</h4>
              <p className="text-foreground/70 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to reach out directly via phone or email.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      required
                      className="glass-effect border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      required
                      className="glass-effect border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    className="glass-effect border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Discussion"
                    required
                    className="glass-effect border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="glass-effect border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;