import { appColors } from "@/constants/colors";
import { FontFamily, theme } from "@/constants/theme";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type SuggestionChipsProps = {
  suggestions: string[];
  onChipPress?: (suggestion: string) => void;
};

export function SuggestionChips({
  suggestions,
  onChipPress,
}: SuggestionChipsProps) {
  const formatText = (text: string) => {
    const words = text.split(' ');
    if (words.length <= 2) return text;
    
    const firstLine = words.slice(0, 2).join(' ');
    const secondLine = words.slice(2).join(' ');
    return `${firstLine}\n${secondLine}`;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {suggestions.map((suggestion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.chip}
            onPress={() => onChipPress?.(suggestion)}
            activeOpacity={0.7}
          >
            <Text style={styles.chipText}>{formatText(suggestion)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing[3],
  },
  scrollContent: {
    paddingHorizontal: theme.spacing[4],
    gap: theme.spacing[2],
  },
  chip: {
    backgroundColor: appColors.white,
    borderRadius: 20,
    paddingHorizontal: theme.spacing[5],
    paddingVertical: theme.spacing[3],
    borderWidth: 1.5,
    borderColor: appColors.lightGray,
    shadowColor: appColors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  chipText: {
    color: appColors.darkText,
    fontSize: 14,
    fontFamily: FontFamily.SemiBold,
  },
});
