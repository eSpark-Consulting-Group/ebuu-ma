import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Formik } from "formik";

import { MyInput, MyText, MainButton, GapView } from "../../components";
import { validationSchema } from "../../constants";

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
                icon="lock-closed-outline"
                text={values.password}
                onChange={handleChange("password")}
                password
                signIn
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
              <GapView length={40} />
              <MainButton
                title="Sign In"
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
            <FontAwesome5 name="google" size={30} style={{ opacity: 0.15 }} />
            <FontAwesome5 name="facebook" size={30} style={{ opacity: 0.15 }} />
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
