import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { OwlSvg } from "../../assets";
import { MyText } from "../../components";
import AccountList from "../../components/Account/deviceNameList";
import HistoryList from "../../components/Account/historyList";

const History = () => {
  const flatListData = [
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-1",
      question: "Question:",
      answer: "Answer:",
    },
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-2",
      question: "Question:",
      answer: "Answer:",
    },
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-3",
      question: "Question:",
      answer: "Answer:",
    },
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-4",
      question: "Question:",
      answer: "Answer:",
    },
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-5",
      question: "Question:",
      answer: "Answer:",
    },
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-6",
      question: "Question:",
      answer: "Answer:",
    },
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-7",
      question: "Question:",
      answer: "Answer:",
    },
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-9",
      question: "Question:",
      answer: "Answer:",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <OwlSvg />
        <MyText style={styles.ebuText} text="Ebuu's History" type="subTitle" />
      </View>
      <FlatList
        data={flatListData}
        renderItem={({ item }) => (
          <HistoryList question={item.question} answer={item.answer} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.historyWrapper}
      />
    </View>
  );
};

export default History;

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
  historyWrapper: {
    backgroundColor: "#dee1e6",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    scrollbarThumbVertical: "red",
  },
});
