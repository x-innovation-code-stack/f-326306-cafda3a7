
export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } }
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } }
};

export const FADE_LEFT_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.8 } }
};

export const FADE_RIGHT_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.8 } }
};

export const STAGGER_ANIMATION_VARIANTS = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const SCALE_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      damping: 15,
      stiffness: 100
    } 
  }
};

export const BLUR_FADE_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.5 } 
  }
};
