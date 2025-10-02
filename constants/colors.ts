/**
 * App Color Constants
 * Central place for all color values used throughout the app
 */

export const appColors = {
  // Primary Brand Colors
  primary: '#E8505B',
  primaryLight: '#F97794',
  
  // Grayscale
  white: '#fff',
  black: '#000',
  darkText: '#333',
  mediumGray: '#666',
  gray: '#999',
  lightGray: '#E5E5E5',
  lightBackground: '#F5F5F5',
  
  // Shadow
  shadow: '#000',
  
  // Gradient colors for buttons
  gradient: {
    start: '#FF8248',
    end: '#E64683',
  },
} as const;

// Export type for TypeScript support
export type AppColors = typeof appColors;
