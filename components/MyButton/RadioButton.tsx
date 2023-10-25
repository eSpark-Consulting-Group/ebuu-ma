import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    width: 23,
    height: 23,
  },
  selectedButton: {
    backgroundColor: colors.primary,
    width: 12,
    height: 12,
  },
});
