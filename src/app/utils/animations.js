// This file contains utility functions for animations

/**
 * Creates a staggered animation effect for multiple elements
 * @param {NodeList} elements - DOM elements to animate
 * @param {number} delayIncrement - Delay increment between each element animation
 */
export const staggerAnimation = (elements, delayIncrement = 0.1) => {
    elements.forEach((element, index) => {
      element.style.transitionDelay = `${index * delayIncrement}s`;
    });
  };
  
  /**
  */