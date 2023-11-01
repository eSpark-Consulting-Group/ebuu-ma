import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from "react-native";

import { colors } from "../../theme";
import MyText from "../MyText";

interface IMyButton {
  title: string;
  textStyle?: TextStyle;
  btnSytle?: ViewStyle;
  disabled?: boolean;
  icon?: React.ReactNode;
  onPress: () => void;
}
const MyButton = ({
  title,
  textStyle = {},
  btnSytle = {},
  disabled = false,
  icon = null,
  onPress,
}: IMyButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[styles.primaryBtnContainer, btnSytle]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon && icon}
        <MyText
          style={{ ...textStyle, ...styles.primaryBtnText }}
          text={title!}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  primaryBtnContainer: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  primaryBtnText: {
    color: colors.text,
    fontSize: 16,
    paddingVertical: 2,
  },
});
