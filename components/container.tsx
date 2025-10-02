import { theme } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ContainerProps } from "@/types/ui";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Space } from "./space";

export function Container({
  children,
  gradientColors,
  showHeader = true,
  headerStyle,
}: ContainerProps) {
  const colorScheme = useColorScheme();

  // Default gradient colors based on theme
  const defaultGradientColors =
    colorScheme === "dark" ? ["#2d3a5e", "#3a4f7a"] : ["#FFD6E8", "#FFFFFF"];

  const colors = gradientColors || defaultGradientColors;

  return (
    <LinearGradient
      colors={colors}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.3 }}
    >
      <Space size={14} />
      {showHeader && (
        <TouchableOpacity style={[styles.header, headerStyle]}>
          <Image
            source={require("@/assets/icons/back.png")}
            style={styles.backButton}
          />
        </TouchableOpacity>
      )}

      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.spacing[5],
    paddingBottom: theme.spacing[5],
    alignItems: "flex-start",
  },
  backButton: {
    width: theme.spacing[6],
    height: theme.spacing[6],
  },
  content: {
    flex: 1,
  },
});
