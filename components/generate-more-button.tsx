import { appColors } from "@/constants/colors";
import { FontFamily, theme } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export type GenerateMoreButtonProps = {
  onPress?: () => void;
};

export function GenerateMoreButton({ onPress }: GenerateMoreButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.buttonWrapper}
      >
        <LinearGradient
          colors={[appColors.gradient.start, appColors.gradient.end]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Generate more</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: theme.spacing[1],
  },
  buttonWrapper: {
    borderRadius: 30,
    overflow: "hidden",
    shadowColor: appColors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  gradient: {
    // paddingHorizontal: theme.spacing[8],
    paddingVertical: theme.spacing[2],
    borderRadius: 30,
    minWidth: 130,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: appColors.white,
    fontSize: 15,
    fontFamily: FontFamily.Bold,
    textAlign: "center",
  },
});
