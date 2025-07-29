import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      label: "Email",
      value: "hello@freelancer.com",
      href: "mailto:hello@freelancer.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5 text-accent" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Discussion" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      className="min-h-[120px]" 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary shadow-glow hover:shadow-elegant transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                      >
                        {info.icon}
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium text-foreground">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-6">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="flex items-center justify-center w-12 h-12 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary text-white shadow-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Available for New Projects</h3>
                  <p className="text-white/90 mb-4">
                    I'm currently accepting new freelance projects and would love to hear about yours.
                  </p>
                  <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;