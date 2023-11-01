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

const payment = () => {
  const paymentOpts = [
    {
      details: "*****2344",
      icon: <VisaSvg width={60} height={60} />,
      selected: true,
    },
    {
      details: "******3774",
      icon: <MasterCardSvg width={60} height={60} />,
      selected: false,
    },
    {
      details: "abc@gmail.com",
      icon: <PayPalSvg width={60} height={60} />,
      selected: false,
    },
  ];

  const renderPaymentOpts = ({
    item,
    index,
  }: {
    item: { details: string; icon: ReactElement; selected?: boolean };
    index: number;
  }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.outlineRadioBtn,
          borderColor: item.selected ? "#7731F4" : "#00000022",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {item.icon}
          <MyText style={{ marginLeft: 5 }} text={item.details} />
        </View>
        <RadioButton
          disabled
          selected={item.selected!}
          onPress={() => {}}
          color="#632be8"
          rounded
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <OwlSvg />
        <MyText style={styles.ebuText} text="Payment" type="subTitle" />
      </View>

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
          text="Free, 300 questions first month, then 7 free question"
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
          text="$9.99/month, unlimited question"
        />
      </View>
      <GapView length={30} />
      <View style={{ alignItems: "center" }}>
        <MyText style={{ opacity: 0.6 }} text="TOTAL" type="default" />
        <MyText textColor="#000" text="$9,99/month" type="subTitle" />
      </View>
      <GapView length={30} />
      <View>
        <FlatList
          data={paymentOpts}
          renderItem={renderPaymentOpts}
          ItemSeparatorComponent={() => <GapView />}
        />
      </View>
      <GapView length={30} />
      <MainButton
        icon={<MaterialIcons name="payment" size={20} color={"#fff"} />}
        onPress={() => console.log("Pay Now")}
        title="Pay Now"
        btnSytle={{ backgroundColor: "#7731F4" }}
      />
      <GapView />
      <TouchableOpacity style={{ alignItems: "center" }}>
        <MyText textColor="#7731F4" text="+ Add new card" />
      </TouchableOpacity>
    </View>
  );
};

export default payment;

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
  outlineRadioBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#7731F4",
    borderRadius: 5,
    // paddingVertical: 15,
    height: 60,
    paddingHorizontal: 10,
  },
});
