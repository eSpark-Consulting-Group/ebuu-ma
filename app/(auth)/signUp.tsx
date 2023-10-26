import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

import {
  GapView,
  MainButton,
  MyInput,
  MyText,
  RadioButton,
} from "../../components";
import { Link } from "expo-router";

export default function signUp() {
  const [selectedOption, setSelectedOption] = useState(true);
  const handleSelect = (option: boolean) => {
    option == true ? setSelectedOption(false) : setSelectedOption(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MyText text="Welcome." type={"title"} />
        <MyText text="Create an account" type={"subTitle"} />
        <GapView length={40} />
        <MyInput label="Email" placeholder="Enter email" icon="mail-outline" />
        <MyInput
          label="Password"
          placeholder="Enter password"
          password
          icon="lock-closed-outline"
        />
        <GapView />

        <View style={styles.wrapperRadionButton}>
          <RadioButton
            selected={selectedOption}
            onPress={() => handleSelect(selectedOption)}
          />
          <MyText style={styles.ms5} text="I agree with " />
          <MyText
            text="Terms & Conditions"
            textColor="#d0d4da"
            style={{ fontSize: 14 }}
          />
        </View>
        <MainButton
          title="Sign Up"
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
            text="OR SIGN UP WITH"
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
          text="Already have an account? "
          style={{ fontSize: 16, opacity: 0.8, fontWeight: "700" }}
        />
        <Link
          href={"/(auth)/signIn"}
          style={{ fontSize: 16, opacity: 0.2, fontWeight: "bold" }}
        >
          <MyText text="Sign in" />
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
    fontSize: 14,
  },
});
