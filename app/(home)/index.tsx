import React from "react";
import { Image, StyleSheet, View, ImageStyle } from "react-native";

import { OwlSvg } from "../../assets";
import { GapView, MainButton, MyText } from "../../components";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <GapView length={50} />
      <MyText text="Ebuu" type="title" />
      <View
        style={{
          backgroundColor: "#dee1e6",
          borderRadius: 100,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          width: 200,
          height: 200,
          padding: 35,
          marginTop: 30,
          marginBottom: 200,
        }}
      >
        <OwlSvg />
        {/* <Image
          source={require("../../assets/images/owl_icon.png")}
          style={{
            height: 100,
            width: 100,
          }}
        /> */}
      </View>
      <MainButton
        title="Add a new device"
        onPress={() => {
          console.log("sad");
        }}
        btnSytle={{ paddingHorizontal: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
