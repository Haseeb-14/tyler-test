import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

// Prevent the splash screen from auto-hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load all Celebes font variants
  const [fontsLoaded, fontError] = useFonts({
    "Celebes-Thin": require("../assets/fonts/Celebes-Thin-BF6400137307f80.ttf"),
    "Celebes-ThinItalic": require("../assets/fonts/Celebes-ThinItalic-BF6400137154124.ttf"),
    "Celebes-Light": require("../assets/fonts/Celebes-Light-BF64001372cdbe6.ttf"),
    "Celebes-LightItalic": require("../assets/fonts/Celebes-LightItalic-BF640013717dedd.ttf"),
    "Celebes-Regular": require("../assets/fonts/Celebes-Regular-BF64001370dce31.ttf"),
    "Celebes-Italic": require("../assets/fonts/Celebes-Italic-BF64001372af01e.ttf"),
    "Celebes-SemiBold": require("../assets/fonts/Celebes-SemiBold-BF64001373561ed.ttf"),
    "Celebes-SemiBoldItalic": require("../assets/fonts/Celebes-SemiBoldItalic-BF640013721a593.ttf"),
    "Celebes-Bold": require("../assets/fonts/Celebes-Bold-BF64001371c6dc4.ttf"),
    "Celebes-BoldItalic": require("../assets/fonts/Celebes-BoldItalic-BF640013733d6b2.ttf"),
    "Celebes-ExtraBold": require("../assets/fonts/Celebes-ExtraBold-BF64001372902fb.ttf"),
    "Celebes-ExtraBoldItalic": require("../assets/fonts/Celebes-ExtraBoldItalic-BF64001371c9d18.ttf"),
    "Celebes-Black": require("../assets/fonts/Celebes-Black-BF64001371b9d67.ttf"),
    "Celebes-BlackItalic": require("../assets/fonts/Celebes-BlackItalic-BF6400136ce9a5e.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen once fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Don't render the app until fonts are loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
