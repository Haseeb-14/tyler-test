/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

/**
 * Celebes font family - Custom fonts loaded in the app
 * Usage: fontFamily: FontFamily.Regular
 */
export const FontFamily = {
  Thin: 'Celebes-Thin',
  ThinItalic: 'Celebes-ThinItalic',
  Light: 'Celebes-Light',
  LightItalic: 'Celebes-LightItalic',
  Regular: 'Celebes-Regular',
  Italic: 'Celebes-Italic',
  SemiBold: 'Celebes-SemiBold',
  SemiBoldItalic: 'Celebes-SemiBoldItalic',
  Bold: 'Celebes-Bold',
  BoldItalic: 'Celebes-BoldItalic',
  ExtraBold: 'Celebes-ExtraBold',
  ExtraBoldItalic: 'Celebes-ExtraBoldItalic',
  Black: 'Celebes-Black',
  BlackItalic: 'Celebes-BlackItalic',
} as const;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

/**
 * Spacing scale based on 4px base unit
 * Usage: theme.spacing[10] = 40px, theme.spacing[5] = 20px
 */
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
} as const;

/**
 * Complete theme object with all design tokens
 */
export const theme = {
  spacing,
  colors: Colors,
  fonts: Fonts,
  fontFamily: FontFamily,
};
