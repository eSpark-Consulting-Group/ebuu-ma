import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MyText } from "../../components";

export default function addNewDevice() {
  return (
    <View style={styles.wrapper}>
      <View>
        <MyText text="Loading For Ebuu . . ." />
      </View>
      <View>
        <Image
          source={require("../../assets/images/circularAnimation.gif")}
          style={styles.gifImage}
        />
      </View>
      <View>
        <MyText text="Make sure your device is power on" />
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
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
  },
});
