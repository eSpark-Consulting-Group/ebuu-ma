import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import * as Font from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";

import { MyTheme, colors } from "../theme";

let customFonts = {
  "Gothic-Bold": require("../assets/fonts/GothicA1-Bold.ttf"),
  "Gothic-SemiBold": require("../assets/fonts/GothicA1-SemiBold.ttf"),
  "Gothic-Regular": require("../assets/fonts/GothicA1-Regular.ttf"),
};

export default function Layout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync(customFonts);
    setLoaded(true);
  };

  return loaded ? (
    <ThemeProvider value={MyTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, padding: 10, backgroundColor: colors.background }}
        >
          <Slot />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  ) : null;
}
