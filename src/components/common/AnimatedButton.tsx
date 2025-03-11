
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  hoverEffect?: "scale" | "expand" | "glow" | "none";
}

const AnimatedButton = ({
  children,
  variant = "default",
  size = "default",
  className,
  icon,
  iconPosition = "left",
  hoverEffect = "scale",
  ...props
}: AnimatedButtonProps) => {
  // Map our variants to shadcn button variants
  const buttonVariant = variant === "primary" ? "default" : variant;
  
  // Handle hover effects
  const getHoverClass = () => {
    switch (hoverEffect) {
      case "scale":
        return "transition-transform duration-300 hover:scale-105 active:scale-95";
      case "expand":
        return "transition-all duration-300 hover:px-6";
      case "glow":
        return "transition-all duration-300 hover:shadow-lg hover:shadow-primary/20";
      case "none":
      default:
        return "";
    }
  };

  return (
    <Button
      variant={buttonVariant}
      size={size}
      className={cn(
        "relative overflow-hidden",
        variant === "primary" && "bg-primary hover:bg-primary/90",
        getHoverClass(),
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </span>
    </Button>
  );
};

export default AnimatedButton;
