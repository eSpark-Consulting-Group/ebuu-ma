import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MyText from "../MyText";

export type InputProps = {
  label?: string;
  placeholder?: string;
  icon?: string;
  password?: boolean;
  text?: string;
  onChange?: (val: string) => void;
  showPass?: boolean;
};

export default function MyInput({
  label,
  placeholder,
  icon,
  password = false,
  showPass = false,
  onChange,
  text,
}: InputProps) {
  return (
    <View>
      {label && <MyText text={label} style={{ marginBottom: 6 }} />}
      <View style={styles.inputContainerStyle}>
        {icon && <Ionicons name={icon as any} size={26} color="black" />}
        <TextInput
          secureTextEntry={password ? true : false}
          placeholder={placeholder}
          style={styles.inputStyle}
          value={text!}
          onChangeText={(val): void => onChange?.(val)}
        />
        {password && (
          <Ionicons
            name={showPass ? "md-eye" : "md-eye-off-outline"}
            size={24}
            color="black"
          />
        )}
      </View>
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
    // backgroundColor: "pink",
    padding: 10,
  },
});
