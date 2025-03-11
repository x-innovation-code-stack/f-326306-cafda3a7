
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fade-in" | "fade-up" | "fade-down" | "blur-in" | "slide-up" | "slide-down";
  once?: boolean;
};

export const Motion = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  animation = "fade-in",
  once = true,
}: MotionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
      if (once) setHasAnimated(true);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay, once]);

  // Map animation types to Tailwind classes
  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "fade-up":
        return "animate-slide-up";
      case "fade-down":
        return "animate-slide-down";
      case "blur-in":
        return "animate-blur-in";
      case "slide-up":
        return "animate-slide-up";
      case "slide-down":
        return "animate-slide-down";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      className={cn(
        "opacity-0",
        isVisible && !hasAnimated && getAnimationClass(),
        hasAnimated && "opacity-100",
        className
      )}
      style={{ 
        animationDuration: `${duration}s`,
        animationFillMode: "forwards" 
      }}
    >
      {children}
    </div>
  );
};

export function MotionSection({ 
  children, 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <section
      ref={setRef}
      className={cn(
        "transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
