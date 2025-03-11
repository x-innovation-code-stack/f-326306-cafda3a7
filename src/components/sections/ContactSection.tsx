
import React from "react";
import { Motion, MotionSection } from "@/components/ui/motion";
import AnimatedButton from "@/components/common/AnimatedButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <MotionSection id="contact" className="py-24 bg-secondary/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact content */}
          <div className="max-w-xl">
            <Motion animation="fade-up" delay={0.1} duration={0.8}>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                Get in Touch
              </div>
            </Motion>

            <Motion animation="fade-up" delay={0.3} duration={0.8}>
              <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">
                Ready to create something <span className="text-gradient">beautiful</span>?
              </h2>
            </Motion>
            
            <Motion animation="fade-up" delay={0.5} duration={0.8}>
              <p className="text-lg text-muted-foreground mb-8">
                We'd love to hear from you. Reach out to discuss how we can help 
                bring your vision to life with our minimalist approach.
              </p>
            </Motion>
            
            <Motion animation="fade-up" delay={0.6} duration={0.8}>
              <div className="grid gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">hello@essence.design</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">123 Design Avenue, Creative City</span>
                </div>
              </div>
            </Motion>
          </div>
          
          {/* Contact form */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <Motion animation="fade-up" delay={0.3} duration={0.8}>
              <div className="glass-effect rounded-2xl border border-border p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          className="h-11 glass-effect"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="h-11 glass-effect"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        className="h-11 glass-effect"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[150px] glass-effect"
                      />
                    </div>
                  </div>
                  
                  <AnimatedButton 
                    variant="primary" 
                    className="w-full"
                    hoverEffect="glow" 
                    icon={<Send size={16} />} 
                    iconPosition="right"
                  >
                    Send Message
                  </AnimatedButton>
                </form>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ContactSection;
