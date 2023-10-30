import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

import { MyText } from "../../components";

export default function DLoad({ success }: { success: boolean }) {
  useEffect(() => {
    setTimeout(() => {
      router.push({ pathname: "/(home)", params: { hasDevice: true } });
    }, 2000);
  }, []);

  return (
    <View style={styles.wrapper}>
      <View>
        <MyText
          text={
            success ? "Device connected successfully" : "Device Setup Failed"
          }
          style={{ opacity: 0.6 }}
        />
      </View>
      <View style={styles.gifImage}>
        <AntDesign
          name="check"
          size={150}
          color="#ffffff"
          style={{ fontWeight: "100" }}
        />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  gifImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    backgroundColor: "#dee1e6",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
