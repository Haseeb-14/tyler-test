import { appColors } from "@/constants/colors";
import { FontFamily, theme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "./themed-text";

interface ChatInputProps {
  onSend?: (text: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [inputText, setInputText] = useState("");
  const [selectedMode, setSelectedMode] = useState("😉 Flirt");

  const handleSend = () => {
    if (inputText.trim() && onSend) {
      onSend(inputText);
      setInputText("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* Left Section - Search and Actions */}
        <View style={styles.leftSection}>
          {/* Search Input Row */}
          <View style={styles.searchRow}>
            <Image
              source={require("@/assets/icons/search.png")}
              style={styles.searchIcon}
              resizeMode="contain"
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Type more details..."
              placeholderTextColor={appColors.gray}
              value={inputText}
              onChangeText={setInputText}
              multiline
              onSubmitEditing={handleSend}
            />
          </View>

          {/* Action Buttons Row (below input) */}
          <View style={styles.actionsRow}>
            {/* Plus Button */}
            <TouchableOpacity style={styles.iconButton}>
              <View style={styles.plusButton}>
                <Ionicons name="add" size={24} color={appColors.primary} />
              </View>
            </TouchableOpacity>

            {/* Mode Selector Dropdown */}
            <TouchableOpacity style={styles.modeSelector}>
              <ThemedText style={styles.modeText}>{selectedMode}</ThemedText>
              <Ionicons name="chevron-down" size={16} color={appColors.mediumGray} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Right Section - Microphone and Send */}
        <View style={styles.rightSection}>
          {/* Microphone Button */}
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.micButton}>
              <Image
                source={require("@/assets/icons/microphone.png")}
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          {/* Send Button with Gradient */}
          <TouchableOpacity 
            style={styles.sendButton}
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <LinearGradient
              colors={
                inputText.trim() 
                  ? [appColors.gradient.start, appColors.gradient.end]
                  : [appColors.lightGray, appColors.lightGray]
              }
              style={styles.sendGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Image
                source={require("@/assets/icons/send.png")}
                style={[
                  styles.sendIcon,
                  { tintColor: inputText.trim() ? appColors.white : appColors.gray }
                ]}
                resizeMode="contain"
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0, 
    backgroundColor: "transparent",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: appColors.white,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    paddingHorizontal: theme.spacing[4],
    paddingTop: theme.spacing[5],
    paddingBottom: theme.spacing[3],
    shadowColor: appColors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    gap: theme.spacing[2],
  },
  leftSection: {
    flex: 1,
    gap: theme.spacing[2],
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    bottom:5
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: theme.spacing[2],
    tintColor: appColors.primary,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: appColors.darkText,
    paddingVertical: 0,
    fontFamily: FontFamily.Regular,
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[2],
    marginBottom: theme.spacing[3],
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[2],
  },
  iconButton: {
    padding: theme.spacing[1],
  },
  plusButton: {
    borderWidth: 1.5,
    borderColor: appColors.lightGray,
    borderRadius: 25,
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  micButton: {
    borderWidth: 1.5,
    borderColor: appColors.lightGray,
    borderRadius: 25,
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 20,
    height: 20,
    tintColor: appColors.gray,
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
  modeSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: appColors.lightBackground,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[2],
    borderRadius: 20,
    gap: theme.spacing[1],
  },
  modeText: {
    fontSize: 14,
    fontFamily: FontFamily.SemiBold,
  },
  sendButton: {
    borderRadius: 25,
    overflow: "hidden",
  },
  sendGradient: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});
