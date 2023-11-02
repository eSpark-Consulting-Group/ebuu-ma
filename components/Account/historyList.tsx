import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "../MyText";

interface IHistoryList {
  question: string;
  answer: string;
}
const HistoryList = ({ question, answer }: IHistoryList) => {
  return (
    <View style={styles.mt5}>
      <MyText style={styles.opacitySmall} text="Date, Time" />
      <MyText style={styles.opacitySmall} text={question} />
      <MyText style={styles.opacitySmall} text={answer} />
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  opacitySmall: {
    opacity: 0.6,
  },

  mt5: {
    marginTop: 10,
  },
});
