import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MyText from "../MyText";
import GapView from "../GapView";

export type InputProps = {
  label?: string;
  placeholder?: string;
  icon?: string;
  password?: boolean;
  signIn?: boolean;
  text?: string;
  onChange?: (val: string) => void;
};

export default function MyInput({
  label,
  placeholder,
  icon,
  password = false,
  onChange,
  text,
  signIn,
}: InputProps) {
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={{ marginBottom: password ? 0 : 16 }}>
      {label && <MyText text={label} style={{ marginBottom: 6 }} />}
      <View style={styles.inputContainerStyle}>
        {icon && <Ionicons name={icon as any} size={20} color="black" />}
        <TextInput
          secureTextEntry={password ? (showPass ? false : true) : false}
          placeholder={placeholder}
          style={styles.inputStyle}
          value={text!}
          onChangeText={(val): void => onChange?.(val)}
        />
        {password && (
          <Ionicons
            name={showPass ? "eye-outline" : "md-eye-off-outline"}
            size={24}
            color="black"
            onPress={() => setShowPass(!showPass)}
          />
        )}
      </View>
      {signIn && (
        <MyText
          text="Forgot password?"
          style={{ alignSelf: "flex-end" }}
          textColor="#d0d4dd"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: "#f3f4f6",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 4,
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    height: "100%",
    padding: 10,
  },
});
