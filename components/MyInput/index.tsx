import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import MyText from "../MyText";

export type InputProps = {
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  password?: boolean;
  text?: string;
  onChange?: (val: string) => void;
};

export default function MyInput({
  label,
  placeholder,
  icon,
  password,
  onChange,
  text,
}: InputProps) {
  return (
    <View>
      {label && <MyText text={label} />}
      <TextInput
        secureTextEntry={password ? true : false}
        placeholder={placeholder}
        style={styles.inputStyle}
        value={text!}
        onChangeText={(val) => onChange?.(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#f3f4f6",
  },
});
