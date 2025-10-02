import { spacing } from '@/constants/theme';
import React from 'react';
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

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

export interface AnimatedMessageWrapperProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  duration?: number;
  delay?: number;
}
