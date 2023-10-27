import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { GapView, MainButton, MyInput, MyText } from "../../components";

export default function PForm({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 0.2 }} />
      <View style={{ alignItems: "center", flex: 0.15 }}>
        <MyText text="Select Wi-Fi network" style={{ opacity: 0.6 }} />
      </View>
      <View
        style={{
          flex: 0.6,
          alignItems: "center",
        }}
      >
        <MyText text="Connecting to : Wifi name" style={{ opacity: 0.6 }} />
        <GapView length={40} />
        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            padding: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
            borderColor: "#00000088",
            width: 200,
          }}
        />
        <GapView length={40} />
        <MainButton
          title="Connect"
          onPress={() => {
            setStep(5);
          }}
          btnSytle={{ paddingHorizontal: 15, paddingVertical: 6 }}
        />
      </View>
      <View style={{ flex: 0.5 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
