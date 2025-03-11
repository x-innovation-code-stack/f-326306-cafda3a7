
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Motion } from "@/components/ui/motion";
import AnimatedButton from "@/components/common/AnimatedButton";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-3 glass-effect border-b border-border/40 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Motion animation="fade-down" delay={0.2} duration={0.7}>
            <a href="#" className="text-2xl font-display font-medium">
              <span className="text-gradient">Essence</span>
            </a>
          </Motion>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Motion key={item.href} animation="fade-down" delay={0.2 + index * 0.1} duration={0.7}>
                <a
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </Motion>
            ))}
          </nav>

          {/* CTA Button */}
          <Motion animation="fade-down" delay={0.6} duration={0.7}>
            <AnimatedButton 
              variant="primary" 
              size="sm" 
              className="hidden md:flex"
              hoverEffect="glow"
            >
              Get Started
            </AnimatedButton>
          </Motion>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-2 relative w-6 h-5">
              <span
                className={cn(
                  "block w-6 h-0.5 bg-foreground transition-all duration-300",
                  mobileMenuOpen && "absolute rotate-45 top-1/2 -translate-y-1/2"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-foreground transition-all duration-300",
                  mobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-foreground transition-all duration-300",
                  mobileMenuOpen && "absolute -rotate-45 top-1/2 -translate-y-1/2"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed inset-x-0 top-[57px] glass-effect border-b border-border/40 transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0 overflow-hidden"
          )}
        >
          <nav className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium py-2 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <AnimatedButton 
              variant="primary" 
              className="mt-2 w-full"
              hoverEffect="glow"
            >
              Get Started
            </AnimatedButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
