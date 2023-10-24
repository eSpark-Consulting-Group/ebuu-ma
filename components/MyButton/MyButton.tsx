import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors } from "../../theme";

interface IMyButton {
  title: String;
  titleStyle?: TextStyle;
  btnSytle?: ViewStyle;
  disabled?: boolean;
  icon?: React.ReactNode;
  onPress: () => void;
}
const MyButton = ({
  title,
  titleStyle = {},
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
          justifyContent: "space-around",
        }}
      >
        <Text style={[titleStyle, styles.primaryBtnText]}>{title}</Text>
        {icon && icon}
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
    fontSize: 24,
  },
});
