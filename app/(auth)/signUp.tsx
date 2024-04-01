import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Formik } from "formik";

import {
  GapView,
  MainButton,
  MyInput,
  MyText,
  RadioButton,
} from "../../components";
import { validationSchema } from "../../constants";
import { facebookSignIn, googleSignIn } from "./functions";
import { colors } from "../../theme";

export default function signUp() {
  const [selectedOption, setSelectedOption] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleSelect = (option: boolean) => {
    option == true ? setSelectedOption(false) : setSelectedOption(true);
  };

  const signUpWithGoogle = async () => {
    setLoading(true);
    await googleSignIn("signUp");
    setLoading(false);
  };

  const signUpWithFacebook = async () => {
    setLoading(true);
    await facebookSignIn("signUp");
    setLoading(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: "#00000088",
            top: 0,
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={"large"} color={colors.primary} />
        </View>
      )}
      <View style={{ flex: 1 }}>
        <MyText text="Welcome." type={"title"} />
        <MyText text="Create an account" type={"subTitle"} />
        <GapView length={40} />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            router.push("/(home)");
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
            values,
          }) => (
            <>
              <MyInput
                label="Email"
                placeholder="Enter email"
                icon="mail-outline"
                text={values.email}
                onChange={handleChange("email")}
              />
              {touched.email && errors.email ? (
                <MyText
                  text={errors.email}
                  textColor={"red"}
                  style={{ opacity: 0.6, fontSize: 14 }}
                />
              ) : (
                <View />
              )}
              <GapView length={15} />
              <MyInput
                label="Password"
                placeholder="Enter password"
                password
                icon="lock-closed-outline"
                text={values.password}
                onChange={handleChange("password")}
              />
              {touched.password && errors.password ? (
                <MyText
                  text={errors.password}
                  textColor={"red"}
                  style={{ opacity: 0.6, fontSize: 14 }}
                />
              ) : (
                <View />
              )}
              {/* <GapView /> */}
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
                  handleSubmit();
                }}
              />
            </>
          )}
        </Formik>
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
            <TouchableOpacity onPress={signUpWithGoogle}>
              <FontAwesome5 name="google" size={30} style={{ opacity: 0.15 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={signUpWithFacebook}>
              <FontAwesome5
                name="facebook"
                size={30}
                style={{ opacity: 0.15 }}
              />
            </TouchableOpacity>
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
