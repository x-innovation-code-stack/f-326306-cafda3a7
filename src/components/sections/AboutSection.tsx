
import React from "react";
import { Motion, MotionSection } from "@/components/ui/motion";
import AnimatedButton from "@/components/common/AnimatedButton";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <MotionSection id="about" className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* About image */}
          <div className="flex-1 w-full max-w-xl">
            <Motion animation="fade-right" delay={0.2} duration={0.8}>
              <div className="relative aspect-square">
                <div className="absolute inset-0 -rotate-6 bg-primary/5 rounded-3xl" />
                <div className="absolute inset-0 rotate-3 border border-primary/20 rounded-3xl" />
                <div className="relative h-full w-full glass-effect rounded-3xl border border-white/20 shadow-xl overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5" />
                  
                  <div className="relative z-10 w-full aspect-square rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur-md shadow-xl flex flex-col items-center justify-center p-8 border border-white/40 dark:border-white/10">
                    <div className="w-16 h-16 mb-6 rounded-full glass-effect border border-white/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
                    </div>
                    <div className="text-center">
                      <div className="h-3 w-20 rounded-full bg-foreground/20 animate-pulse mb-2 mx-auto" />
                      <div className="h-3 w-32 rounded-full bg-foreground/20 animate-pulse mb-6 mx-auto" style={{ animationDelay: '0.2s' }} />
                      <div className="h-3 w-16 rounded-full bg-primary/30 animate-pulse mx-auto" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </Motion>
          </div>

          {/* About content */}
          <div className="flex-1 max-w-2xl">
            <Motion animation="fade-left" delay={0.3} duration={0.8}>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Philosophy
              </div>
            </Motion>
            
            <Motion animation="fade-left" delay={0.4} duration={0.8}>
              <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">
                We believe in the power of <span className="text-gradient">simplicity</span>
              </h2>
            </Motion>
            
            <Motion animation="fade-left" delay={0.5} duration={0.8}>
              <p className="text-lg text-muted-foreground mb-5">
                Our design approach is guided by the principle that true elegance lies in 
                reduction rather than addition. We focus on creating meaningful experiences 
                that respect both form and function.
              </p>
            </Motion>
            
            <Motion animation="fade-left" delay={0.6} duration={0.8}>
              <p className="text-lg text-muted-foreground mb-8">
                Every element has a purpose, every interaction is intentional, and every detail 
                is considered with careful attention. We believe that good design should feel 
                intuitive and enhance the user's life without demanding attention.
              </p>
            </Motion>
            
            <Motion animation="fade-left" delay={0.7} duration={0.8}>
              <AnimatedButton 
                variant="outline" 
                className="group"
                hoverEffect="scale" 
                icon={<ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />} 
                iconPosition="right"
              >
                Learn More About Us
              </AnimatedButton>
            </Motion>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default AboutSection;
