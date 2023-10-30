import React from "react";
import { Image, StyleSheet, View, ImageStyle, FlatList } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

import { OwlSvg } from "../../assets";
import { GapView, MainButton, MyText, RadioButton } from "../../components";

interface Item {
  id: number;
  name: string;
  isConnected?: boolean;
}

export default function App() {
  const { hasDevice } = useLocalSearchParams();
  const data: Item[] = [
    { id: 1, name: "dev1", isConnected: true },
    { id: 2, name: "dev2", isConnected: false },
  ];
  const devAttach: Item[] = [...data, { id: 10, name: "addDevice" }];

  const renderItem = ({
    item,
    index,
  }: {
    item: { id: number; name: string; isConnected?: boolean };
    index: number;
  }) => {
    if (item.name == "addDevice") return <AddDevice />;
    else
      return (
        <View
          style={{
            alignItems: "center",
            width: "50%",
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../../assets/images/connD.png")}
            style={{ marginLeft: 20, height: 75, width: 75 }}
            resizeMode="contain"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <RadioButton
              disabled
              selected={item?.isConnected!}
              onPress={() => {}}
              color="#632be8"
              rounded
            />
            <GapView mode="horizontal" />
            <MyText
              text={item?.isConnected ? "Connected" : "Not Connected"}
              style={{ fontSize: 14 }}
            />
          </View>
        </View>
      );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <GapView length={20} />
      {!hasDevice && <MyText text="Ebuu" type="title" />}
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
          marginTop: 20,
          marginBottom: hasDevice ? 30 : 200,
        }}
      >
        <OwlSvg />
      </View>
      {hasDevice ? (
        <FlatList
          data={devAttach as Item[]}
          style={{ width: "80%" }}
          contentContainerStyle={{
            width: "100%",
            justifyContent: "space-between",
          }}
          ListHeaderComponent={() => (
            <MyText text="My devices" type="title" style={{ fontSize: 36 }} />
          )}
          ListHeaderComponentStyle={{ alignSelf: "center", marginBottom: 50 }}
          renderItem={renderItem}
          keyExtractor={(item) => item?.id.toString()}
          numColumns={2}
        />
      ) : (
        <Link href={"/(addDevice)"} asChild>
          <MainButton
            title="Add a new device"
            onPress={() => {
              console.log("sad");
            }}
            btnSytle={{ paddingHorizontal: 15 }}
          />
        </Link>
      )}
    </View>
  );
}

const AddDevice = () => {
  return (
    <View style={{ alignItems: "center", width: "50%" }}>
      <Image
        source={require("../../assets/images/addD.png")}
        style={{ marginLeft: 20, height: 75, width: 75 }}
        resizeMode="contain"
      />
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        <GapView mode="horizontal" />
        <MyText text="Add device" style={{ fontSize: 14 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
