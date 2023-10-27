import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MyText } from "../../components";

export default function DLoad({ scan }: { scan: boolean }) {
  return (
    <View style={styles.wrapper}>
      <View>
        <MyText
          text={scan ? "Loading For Ebuu..." : "Setting up your device"}
          style={{ opacity: 0.6 }}
        />
      </View>
      <View>
        <Image
          source={require("../../assets/images/circularAnimation.gif")}
          style={styles.gifImage}
        />
      </View>
      <View>
        <MyText
          text={
            scan
              ? "Make sure your device is power on."
              : "Do not close the app until setup is completed."
          }
          style={{ opacity: 0.6 }}
        />
      </View>
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
  },
});
