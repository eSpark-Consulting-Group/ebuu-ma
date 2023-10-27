import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { GapView, MainButton, MyText } from "../../components";

export default function DList({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <MainButton
        title={item}
        onPress={() => {
          console.log("sad 😢");
          setStep(3);
        }}
      />
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 0.2 }} />
      <View style={{ alignItems: "center", flex: 0.2 }}>
        <MyText text="We Founded Ebuu" style={{ opacity: 0.6 }} />
      </View>
      <View style={{ flex: 0.5 }}>
        <MyText
          text="Select the device you want to connect:"
          style={{ opacity: 0.6 }}
        />
        <GapView length={40} />
        <FlatList
          data={["Ebuu - Curiosity's best friend"]}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <GapView />}
          keyExtractor={(item, index) => Math.random() + index.toString()}
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
  gifImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
});
