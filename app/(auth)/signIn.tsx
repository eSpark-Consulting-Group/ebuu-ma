import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MyText } from "../../components";

export default function signIn() {
  return (
    <View>
      <MyText text="Welcome." type={"title"} />
      <MyText text="Create an account" type={"subTitle"} />
    </View>
  );
}

const styles = StyleSheet.create({});
