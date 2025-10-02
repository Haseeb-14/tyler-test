import { ChatBubble } from "@/components/chat-bubble";
import { ChatInput } from "@/components/chat-input";
import { Container } from "@/components/container";
import { GenerateMoreButton } from "@/components/generate-more-button";
import { SuggestionChips } from "@/components/suggestion-chips";
import { ThemedText } from "@/components/themed-text";
import { initialMessage, suggestionChips, suggestions } from "@/constants/chat-data";
import { appColors } from "@/constants/colors";
import { FontFamily, theme } from "@/constants/theme";
import * as Clipboard from 'expo-clipboard';
import { useRef, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [newMessages, setNewMessages] = useState<
    Array<{ id: number; text: string; isUser: boolean }>
  >([]);

 

  const handleSendMessage = (text: string) => {
    if (text.trim()) {
      const newMessage = {
        id: Date.now(),
        text: text.trim(),
        isUser: true,
      };
      setNewMessages((prevMessages) => [...prevMessages, newMessage]);

      // Auto-scroll to bottom after sending
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  const handleCopySuggestion = async (message: string) => {
    try {
      await Clipboard.setStringAsync(message);
      Alert.alert("Copied!", "Message copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text:", error);
      Alert.alert("Error", "Failed to copy message");
    }
  };

  const handleChipPress = (suggestion: string) => {
    console.log("Chip pressed:", suggestion);
    // Handle chip press - you can fill the input or navigate
  };
  const handleGenerateMore = () => {
    console.log("Generate more suggestions");
    // Handle generate more functionality - you can call an API here
  };
  return (
    <Container headerTitle="Chat">
      <KeyboardAvoidingView 
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Initial user message at top */}
          <ChatBubble
            key={initialMessage.id}
            message={initialMessage.text}
            isUser={initialMessage.isUser}
          />

          {/* AI response */}
          <ThemedText style={styles.aiResponseText}>
            Seems like there's something special between you two. If you're
            thinking about a second date, here are some ideas to help:
          </ThemedText>

          {/* Suggestion bubbles */}
          {suggestions.map((suggestion) => (
            <ChatBubble
              key={suggestion.id}
              message={suggestion.text}
              isSuggestion={true}
              onCopy={() => handleCopySuggestion(suggestion.text)}
            />
          ))}
          <GenerateMoreButton onPress={handleGenerateMore} />

          {/* New user messages at bottom */}
          {newMessages.map((msg) => (
            <ChatBubble key={msg.id} message={msg.text} isUser={msg.isUser} />
          ))}
        </ScrollView>
        
        <SuggestionChips
          suggestions={suggestionChips}
          onChipPress={handleChipPress}
        />
        <ChatInput onSend={handleSendMessage} />
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  aiResponseText: {
    color: appColors.darkText,
    fontSize: 14,
    fontFamily: FontFamily.Regular,
    textAlign: "left",
    marginVertical: theme.spacing[2],
  },
});
