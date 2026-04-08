/**
 * Global Configuration Settings
 * You can easily turn features on or off, or adjust their speeds here.
 */

// --------- SMOOTH SCROLLING ---------
// Set this to true to enable smooth scrolling on the website.
// Set this to false to disable it entirely.
export const ENABLE_SMOOTH_SCROLLING = true;

// Detailed settings for smooth scrolling (Lenis)
export const SMOOTH_SCROLL_CONFIG = {
  // How long the smooth scroll effect lasts (in seconds). Lower number = snappier/faster.
  duration: 1.2,
  
  // Speed multiplier for mouse wheel scrolling
  wheelMultiplier: 1,
  
  // Speed multiplier for touch scrolling
  touchMultiplier: 1,
  
  // Whether to apply smooth scrolling on touch devices (often false for native mobile feel)
  smoothTouch: false,
  
  // Enable smooth scrolling for mouse wheels
  smoothWheel: true,
};

// --------- ANIMATED LIST SETTINGS ---------
// Set this to true to enable the animated list animation.
// Set this to false to disable the animation (it will remain static).
export const ENABLE_ANIMATED_LIST = true;

// Controls how fast the items in the animated list scroll.
// The value is in milliseconds (e.g., 5000(neutral) = 5 seconds between each scroll, you can set values between 1000(1 sec fastest) to 10000(10 sec slowest)).
// Lower number = faster scrolling. Higher number = slower scrolling.
export const ANIMATED_LIST_DELAY_MS = 1500;

// The duration of the slide animation itself (how long it takes to move from one item to the next).
// This is in seconds.
export const ANIMATED_LIST_TRANSITION_DURATION = 1;

// The easing style of the animation.
// Options: "linear", "easeIn", "easeOut", "easeInOut", "circIn", "circOut", "circInOut", "backIn", "backOut", "backInOut", "anticipate"
export const ANIMATED_LIST_EASING = "backInOut";
