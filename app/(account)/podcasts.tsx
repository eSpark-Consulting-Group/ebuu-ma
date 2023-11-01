import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { ReactElement } from "react";
import { MasterCardSvg, OwlSvg, PayPalSvg, VisaSvg } from "../../assets";
import { GapView, MainButton, MyText, RadioButton } from "../../components";
import AccountList from "../../components/Account/deviceNameList";
import { MaterialIcons } from "@expo/vector-icons";

const podcasts = () => {
  const paymentOpts = [
    {
      name: "Custom feed name 1",
    },
    {
      name: "Custom feed name 2",
    },
  ];

  const renderPaymentOpts = ({
    item,
    index,
  }: {
    item: { name: string };
    index: number;
  }) => {
    return (
      <View style={styles.feeds}>
        <View style={styles.feedDetails}>
          <MyText textColor="#fff" text={item.name} />
        </View>
        <GapView mode="horizontal" />
        <TouchableOpacity style={styles.feedRemoveBtn}>
          <MyText textColor="#fff" text={"X"} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <OwlSvg />
        <MyText style={styles.ebuText} text="Payment" type="subTitle" />
      </View>

      <View style={styles.radioBtnWrapper}>
        <MyText
          style={{ opacity: 0.6, marginLeft: 10 }}
          text="Kids, tune in! Add vour favorite kid-friendly RSS feed and listen to fun stories, updates, or news tailored just for you!"
        />
      </View>

      <GapView length={30} />

      <View style={styles.radioBtnWrapper}>
        <RadioButton
          disabled
          selected={true}
          onPress={() => {}}
          color="#632be8"
          rounded
        />
        <MyText
          style={{ opacity: 0.6, marginLeft: 10 }}
          text="Les Odyssées - France Inter"
        />
      </View>
      <View style={styles.radioBtnWrapper}>
        <RadioButton
          disabled
          selected={false}
          onPress={() => {}}
          color="#632be8"
          rounded
        />
        <MyText
          style={{ opacity: 0.6, marginLeft: 10 }}
          text="Toudou - France Inter"
        />
      </View>
      <GapView length={15} />
      <View>
        <FlatList
          data={paymentOpts}
          renderItem={renderPaymentOpts}
          ItemSeparatorComponent={() => <GapView />}
        />
      </View>
    </View>
  );
};

export default podcasts;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  ebuText: {
    marginTop: 15,
    color: "#000000",
  },

  radioBtnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 25,
  },
  feeds: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
  },
  feedDetails: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7731F4",
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 40,
  },
  feedRemoveBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7731F4",
    padding: 10,
    borderRadius: 40,
    height: 40,
    width: 40,
  },
});
