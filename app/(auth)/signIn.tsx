import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { MyInput, MyText } from "../../components";

export default function signIn() {
  return (
    <View>
      <MyText text="Welcome." type={"title"} />
      <MyText text="Create an account" type={"subTitle"} />
      <MyInput
        label="Email"
        placeholder="Enter email"
        icon={"mail-outline"}
        password
        showPass={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
