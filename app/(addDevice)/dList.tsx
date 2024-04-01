import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { GapView, MainButton, MyText } from "../../components";
import WifiManager from "react-native-wifi-reborn";
import { ESPDevice } from "@orbital-systems/react-native-esp-idf-provisioning";

export default function DList({
  setStep,
  devices,
  setSelectedDev,
}: {
  setStep: (step: number) => void;
  devices: any;
  setSelectedDev: (dev: ESPDevice) => void;
}) {
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <MainButton
        title={"Ebuu - Curiosity's best friend"}
        onPress={() => {
          console.log("sad 😢");
          connectDev(item);
          // setStep(3);
        }}
      />
    );
  };

  const connectDev = async (device: any) => {
    try {
      console.log("dev", device);

      WifiManager.connectToProtectedSSID(device.name, "", false, false).then(
        async (a) => {
          console.log("Connected successfully!", a);
          const dev = new ESPDevice({
            ...device,
            security: 1,
          });
          const connectedDev: any = await dev.connect("abcd1234");
          if (connectedDev?.status == "connected") {
            setSelectedDev(dev);
            setStep(3);
          } else {
            console.log("Unable to connect");
          }
        },
        (e) => {
          console.log("Connection failed!", e);
        }
      );

      // setLoading(true);
      // const device = new ESPDevice({
      //   ...item,
      //   security: 1,
      // });
      // console.log("device", device);
      // const connectedDev = await device.connect("abcd1234");
      // console.log("connectedDev", connectedDev);
      // setConnectedDevice(device);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
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
          data={devices}
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
