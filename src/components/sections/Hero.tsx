
import React from "react";
import { Motion } from "@/components/ui/motion";
import AnimatedButton from "@/components/common/AnimatedButton";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <Motion animation="fade-up" delay={0.1} duration={0.8}>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
                <span className="animate-pulse bg-primary rounded-full w-2 h-2 mr-2"></span>
                Minimalist Design System
              </div>
            </Motion>

            <Motion animation="fade-up" delay={0.3} duration={0.8}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-tight tracking-tight text-balance mb-6">
                Elegant simplicity for the modern{" "}
                <span className="text-gradient">digital experience</span>
              </h1>
            </Motion>
            
            <Motion animation="fade-up" delay={0.5} duration={0.8}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                Discover the perfect balance of form and function with our minimalist approach
                to design that elevates your digital presence.
              </p>
            </Motion>

            <Motion animation="fade-up" delay={0.7} duration={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <AnimatedButton 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  hoverEffect="glow"
                  icon={<ChevronRight size={16} />}
                  iconPosition="right"
                >
                  Get Started
                </AnimatedButton>
                <AnimatedButton 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  hoverEffect="scale"
                >
                  Learn More
                </AnimatedButton>
              </div>
            </Motion>
          </div>

          {/* Hero image */}
          <div className="flex-1 w-full max-w-xl">
            <Motion animation="blur-in" delay={0.5} duration={1.2}>
              <div className="relative aspect-square p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative h-full w-full glass-effect rounded-3xl border border-white/20 shadow-xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-14 flex items-center px-4 border-b border-border/40">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                      <div className="w-3 h-3 rounded-full bg-green-400/70" />
                    </div>
                  </div>
                  
                  <div className="pt-14 p-6 h-full flex flex-col">
                    <div className="flex-1 flex flex-col space-y-3">
                      <div className="h-8 w-full rounded-md bg-foreground/5 animate-pulse" />
                      <div className="h-8 w-2/3 rounded-md bg-foreground/5 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="h-8 w-1/2 rounded-md bg-foreground/5 animate-pulse" style={{ animationDelay: '0.4s' }} />
                      
                      <div className="flex-1 mt-4 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-primary/20 animate-float flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary/40" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
