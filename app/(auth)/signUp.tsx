import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { MyText } from "../../components";

export default function signUp() {
  return (
    <View>
      <Text>signUp</Text>
      <Link href={"/(auth)/signIn"}>to signIn</Link>
      <MyText text="Already have an account?" type={"default"} />
      <MyText text="Welcome." type={"title"} />
      <MyText text="Create and account" type={"subTitle"} />
    </View>
  );
}

const styles = StyleSheet.create({});
