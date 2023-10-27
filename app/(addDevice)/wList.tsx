import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { GapView, MyText } from "../../components";

export default function WList({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: index % 2 == 0 ? "transparent" : "#fafafa",
          padding: 18,
          justifyContent: "space-between",
        }}
        onPress={() => setStep(4)}
      >
        <MyText text={item} />
        <FontAwesome5 name="wifi" size={18} color="black" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 0.2 }} />
      <View style={{ alignItems: "center", flex: 0.2 }}>
        <MyText text="Select Wi-Fi network" style={{ opacity: 0.6 }} />
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 300,
            height: 182,
            borderWidth: 1.2,
            borderColor: "#00000055",
            borderRadius: 10,
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <FlatList
            data={["Wifi name 1", "Wifi name 2", "Wifi name 3"]}
            renderItem={renderItem}
            keyExtractor={(item, index) => Math.random() + index.toString()}
          />
        </View>
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
  gifImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
});
