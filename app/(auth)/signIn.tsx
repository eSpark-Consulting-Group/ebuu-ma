import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

import { MyInput, MyText, MainButton, GapView } from "../../components";

export default function signIn() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MyText text="Hello." type={"title"} style={{ fontWeight: "bold" }} />
        <MyText
          text="Welcome back"
          type={"subTitle"}
          style={{ fontWeight: "700" }}
        />
        <GapView length={40} />
        <MyInput label="Email" placeholder="Enter email" icon="mail-outline" />
        <MyInput
          label="Password"
          placeholder="Enter password"
          password
          signIn
          icon="lock-closed-outline"
        />
        <GapView length={40} />
        <MainButton
          title="Sign In"
          onPress={() => {
            console.log("test");
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <MyText
            text="OR CONTINUE WITH"
            style={{ fontSize: 14, opacity: 0.6, fontWeight: "bold" }}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-between",
              width: Platform.OS == "ios" ? "50%" : "30%",
            }}
          >
            <Ionicons name="logo-google" size={32} style={{ opacity: 0.15 }} />
            <MaterialIcons
              name="facebook"
              size={36}
              style={{ opacity: 0.15 }}
            />
            {Platform.OS == "ios" && (
              <AntDesign name="apple-o" size={32} style={{ opacity: 0.15 }} />
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyText
          text="Don't have an account? "
          style={{ fontSize: 16, opacity: 0.8, fontWeight: "700" }}
        />
        <Link
          href={"/(auth)/signUp"}
          style={{ fontSize: 16, opacity: 0.2, fontWeight: "bold" }}
        >
          <MyText text="Sign up" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperRadionButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 15,
  },
  ms5: {
    marginStart: 5,
  },
});
