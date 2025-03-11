
import React from "react";
import { Motion, MotionSection } from "@/components/ui/motion";
import { Eye, Zap, Heart, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const Feature = ({ icon, title, description, delay, className }: FeatureProps) => (
  <Motion animation="fade-up" delay={delay} duration={0.8}>
    <div className={cn(
      "flex flex-col p-6 rounded-2xl transition-all duration-300 hover:shadow-lg bg-card border border-border/50",
      className
    )}>
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-display font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </Motion>
);

const Features = () => {
  const features = [
    {
      icon: <Eye size={22} />,
      title: "Minimalist Design",
      description: "Clean aesthetics focusing on essential elements, creating uncluttered spaces that breathe elegance.",
    },
    {
      icon: <Zap size={22} />,
      title: "Intuitive Interaction",
      description: "Thoughtfully crafted user experiences that feel natural and effortless, enhancing engagement.",
    },
    {
      icon: <Heart size={22} />,
      title: "Beautiful Details",
      description: "Subtle animations and transitions that delight users and create memorable experiences.",
    },
    {
      icon: <Shield size={22} />,
      title: "Functional Simplicity",
      description: "Solving complex problems with graceful simplicity, making technology feel more human.",
    },
  ];

  return (
    <MotionSection id="features" className="py-24 bg-secondary/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Motion animation="fade-up" delay={0.1} duration={0.8}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
              Features
            </div>
          </Motion>
          
          <Motion animation="fade-up" delay={0.3} duration={0.8}>
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">
              Crafted with attention to every detail
            </h2>
          </Motion>
          
          <Motion animation="fade-up" delay={0.5} duration={0.8}>
            <p className="text-lg text-muted-foreground">
              Our design principles focus on delivering exceptional experiences through 
              simplicity and thoughtful interactions.
            </p>
          </Motion>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.3 + index * 0.1}
              className="hover:translate-y-[-5px]"
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Features;
