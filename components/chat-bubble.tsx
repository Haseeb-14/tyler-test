import { appColors } from "@/constants/colors";
import { FontFamily, theme } from "@/constants/theme";
import { ChatBubbleProps } from "@/types/ui";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { AnimatedMessageWrapper } from "./animated-message-wrapper";
import { ThemedText } from "./themed-text";

export function ChatBubble({
  message,
  isUser = false,
  isSuggestion = false,
  onCopy,
}: ChatBubbleProps) {
  return (
    <AnimatedMessageWrapper
      style={[
        styles.container,
        isUser ? styles.userContainer : styles.assistantContainer,
        isSuggestion && styles.suggestionContainer,
      ]}
    >
      {isSuggestion ? (
        <LinearGradient
          colors={["#FFF0E6", "#FFD6E8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.bubble, styles.suggestionBubble]}
        >
          <ThemedText style={[styles.messageText, styles.assistantText]}>
            {message}
          </ThemedText>
          {onCopy && message && (
            <TouchableOpacity onPress={onCopy} style={styles.copyButton}>
              <Image
                source={require("@/assets/icons/copy.png")}
                style={styles.copyIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.bubble,
            isUser ? styles.userBubble : styles.assistantBubble,
          ]}
        >
          <ThemedText
            style={[
              styles.messageText,
              isUser ? styles.userText : styles.assistantText,
            ]}
          >
            {message}
          </ThemedText>
        </View>
      )}
    </AnimatedMessageWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing[2],
  },
  userContainer: {
    alignItems: "flex-end",
  },
  assistantContainer: {
    alignItems: "flex-start",
  },
  suggestionContainer: {
    alignItems: "flex-start",
  },
  bubble: {
    maxWidth: "100%",
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    borderRadius: 20,
    shadowColor: appColors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userBubble: {
    backgroundColor: appColors.white,
    borderWidth: 1,
    borderColor: "#FFD6E8",
  },
  assistantBubble: {
    backgroundColor: appColors.white,
    borderWidth: 1,
    borderColor: appColors.lightGray,
  },
  suggestionBubble: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  copyButton: {
     right: 4,
  },
  copyIcon: {
    width: 16,
    height: 16,
  },
  messageText: {
    lineHeight: 22,
    fontFamily: FontFamily.Light,
    color: appColors.black,
    fontSize: 14,
    flexShrink: 1,  // Changed from width:'95%' to flexShrink: 1
  },
  userText: {
    color: appColors.black,
  },
  assistantText: {
    color: appColors.black,
    fontFamily: FontFamily.Light,
    fontSize: 14,
  },
});
