import { spacing } from '@/constants/theme';
import React from 'react';

export type ContainerProps = {
  children?: React.ReactNode;
  headerTitle?: string;
  gradientColors?: readonly string[];
  showHeader?: boolean;
  headerStyle?: object;
};

export type SpaceProps = {
  size?: keyof typeof spacing;
  style?: object;
};

export type ChatBubbleProps = {
  message: string;
  isUser?: boolean;
  isSuggestion?: boolean;
  onCopy?: () => void;
};
