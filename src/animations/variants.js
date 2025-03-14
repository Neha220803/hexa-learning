import { useRef } from "react";
import { useInView } from "framer-motion";

// Left column animation
export const leftColumnVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Right column animation
export const rightColumnVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2, // Slight delay for staggered effect
    },
  },
};

// From top animation with staggered delay
export const fromTopVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: (index = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: index * 0.3, // Staggered delay based on index
    },
  }),
};

// Additional common variants
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const scaleInVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// src/animations/variants.js (update the existing file)

// Vision section heading animation
export const visionHeadingVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Vision cards coming from left with bounce
export const visionCardVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (index = 0) => ({
    x: 0,
    opacity: 1,
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3 + index * 0.2, // Staggered delay
    },
  }),
};
// Add this to your src/animations/variants.js file

// Card fade-in staggered animation
export const cardFadeInVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.8 + index * 0.5, // Staggered delay based on index
    },
  }),
};

// Bottom to up animation for images
export const bottomToUpVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3, // Delay after columns appear
    },
  },
};

// Custom hook for scroll-triggered animations
// Updated to trigger when 60% of the element is visible
// Add responsive threshold based on screen width
export const useScrollAnimation = (options = { once: true }) => {
  const ref = useRef(null);
  // Use a smaller threshold for mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const threshold = isMobile ? 0.2 : 0.6;
  const isInView = useInView(ref, { ...options, amount: threshold });

  return { ref, animate: isInView };
};
