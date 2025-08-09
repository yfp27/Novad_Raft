import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      label: "Email",
      value: "jesterbyte337@gmail.com",
      href: "mailto:jesterbyte337@gmail.com"
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-accent" />,
      label: "WhatsApp",
      value: "+8801992214010",
      href: "https://wa.me/8801992214010"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 animate-pulse">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground">Ready to bring your vision to life? Let's create something amazing together!</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in delay-300">
              <Card className="group shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-white/10 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-6 relative z-10 group-hover:text-accent transition-colors duration-300">Contact Information</h3>
                  <div className="space-y-4 relative z-10">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-300 group/item hover:scale-105 hover:shadow-lg"
                      >
                        <div className="p-2 rounded-full bg-accent/20 group-hover/item:bg-accent/40 transition-colors duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{info.label}</p>
                          <p className="font-medium text-foreground group-hover/item:text-accent transition-colors duration-300">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="group shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-white/10 backdrop-blur-sm border-accent/20">
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-6 relative z-10 group-hover:text-accent transition-colors duration-300">Follow Me</h3>
                    <div className="flex gap-4 justify-center relative z-10">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="flex items-center justify-center w-12 h-12 bg-accent/20 hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-xl"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-gradient-to-br from-primary via-accent to-primary text-white shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  <CardContent className="p-6 relative overflow-hidden">
                    {/* Animated sparkles */}
                    <div className="absolute inset-0 opacity-30">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${1 + Math.random() * 1}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 relative z-10">Available for New Projects ✨</h3>
                    <p className="text-white/90 mb-4 relative z-10">
                      I'm currently accepting new freelance projects and would love to hear about yours.
                    </p>
                    <Button 
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 relative z-10"
                    >
                      Start Your Project 🚀
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;