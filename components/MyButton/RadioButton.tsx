import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../theme";

interface IRadioButton {
  selected: boolean;
  onPress: () => void;
}

const CustomRadioButton = ({ selected, onPress }: IRadioButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapperButton}>
      <View style={selected && styles.selectedButton}></View>
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
