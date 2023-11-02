import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { OwlSvg } from "../../assets";
import { MyText } from "../../components";
import AccountList from "../../components/Account/deviceNameList";

const index = () => {
  const flatListData = [
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-1",
      title: "Name",
      subTitle: "Ebuu",
      iconName: "mobile-friendly",
      action: "edit",
    },
    {
      id: "bd7acbea-c1b1-46c2-4aed5-3ad53abb28ba-2",
      title: "Battery",
      subTitle: "85%",
      iconName: "battery-charging-full",
    },
    {
      id: "bd7acbea-c1b1-46c2-4aed5-3ad53abb28ba-3",
      title: "Remaining Questions",
      subTitle: "5 Questions Left",
      iconName: "frequently-asked-questions",
    },
    {
      id: "bd7acbea-c1b1-46c2-4aed5-3ad53abb28ba-4",
      title: "Language",
      subTitle: "English",
      iconName: "language",
      action: "edit",
    },
    {
      id: "bd7acbea-c1b1-46c2-4aed5-3ad53abb28ba-5",
      title: "Kid's name",
      subTitle: "Mia",
      iconName: "smile",
      action: "edit",
    },
    {
      id: "bd7acbea-c1b1-46c2-4aed5-3ad53abb28ba-6",
      title: "Age",
      subTitle: "5 year old",
      iconName: "birthday-cake",
      action: "edit",
    },
  ];
  const listComponent = (item: any) => {
    return (
      <AccountList
        title={item.title}
        subtitle={item.subTitle}
        iconName={item.iconName}
        action={item.action}
      />
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <OwlSvg />
        <MyText style={styles.ebuText} text="Ebuu" type="subTitle" />
      </View>
      <View style={styles.accountListWrapper}>
        <FlatList
          data={flatListData}
          renderItem={({ item }) => listComponent(item)}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.textWrapper}>
        <MyText
          style={{ opacity: 0.6 }}
          text="For personalized and age-approperiate responses, please enter the user's name and age."
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  ebuText: {
    marginTop: 15,
    color: "#000000",
  },
  textWrapper: {
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 25,
  },
  accountListWrapper: {
    paddingHorizontal: 20,
  },
});
