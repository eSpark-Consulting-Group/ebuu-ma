import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { GapView, MyText } from "../../components";
import {
  ESPDevice,
  ESPWifiList,
} from "@orbital-systems/react-native-esp-idf-provisioning";

export default function WList({
  setStep,
  selectedDev,
  setSelectedWiFi,
}: {
  setStep: (step: number) => void;
  selectedDev?: ESPDevice;
  setSelectedWiFi: (wifi: ESPWifiList) => void;
}) {
  const [wifiList, setWifiList] = useState<ESPWifiList[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedDev) {
      getWifiList();
    }
  }, [selectedDev]);

  const getWifiList = async () => {
    try {
      setLoading(true);
      const wifiList = await selectedDev?.scanWifiList();
      console.log("react native wifilists", wifiList);
      setWifiList(wifiList!);
      // setLoading(true);
      // const device = new ESPDevice({
      //   ...connectedDevice,
      // });
      // const wifiList = await selectedDev.scanWifiList();
      // console.log("react native wifilists", wifiList);
      setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.error(error);
    }
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: ESPWifiList;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: index % 2 == 0 ? "transparent" : "#fafafa",
          padding: 18,
          justifyContent: "space-between",
        }}
        onPress={() => {
          setSelectedWiFi(item);
          setStep(4);
        }}
      >
        <MyText text={item.ssid} />
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
      {loading && <ActivityIndicator size={"large"} />}
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
            data={wifiList}
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
