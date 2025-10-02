import { theme } from "@/constants/theme";
import { SpaceProps } from "@/types/ui";
import React from "react";
import { View } from "react-native";

export function Space({ size = 4, style }: SpaceProps) {
  return <View style={[{ marginTop: theme.spacing[size] }, style]} />;
}
