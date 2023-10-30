import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../theme";

interface IRadioButton {
  selected: boolean;
  onPress: () => void;
  rounded?: boolean;
  color?: string;
  disabled?: boolean;
}

const CustomRadioButton = ({
  selected,
  onPress,
  rounded,
  color,
  disabled,
}: IRadioButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        { ...styles.wrapperButton },
        rounded && {
          borderRadius: 50,
          borderColor: color,
        },
      ]}
    >
      <View
        style={[
          selected && { ...styles.selectedButton },
          rounded && {
            backgroundColor: selected ? color : "transparent",
            borderRadius: 50,
            width: 9,
            height: 9,
            opacity: 1,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default CustomRadioButton;

const styles = StyleSheet.create({
  wrapperButton: {
    borderWidth: 1.6,
    borderColor: colors.primary,
    borderRadius: 2.5,
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    height: 18,
  },
  selectedButton: {
    backgroundColor: "black",
    opacity: 0.6,
    width: 8,
    height: 8,
  },
});
