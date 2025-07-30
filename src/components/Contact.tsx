import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      label: "Email",
      value: "jesterbyte337@gmail.com",
      href: "mailto:jesterbyte337@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      label: "Phone",
      value: "+8801945467764",
      href: "tel:+8801945467764"
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
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
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

              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-primary mb-6">Follow Me</h3>
                    <div className="flex gap-4 justify-center">
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