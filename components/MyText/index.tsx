import React from "react";
import { StyleSheet, Text } from "react-native";
import { MyTextProps, TextType } from "../../types";

export default function MyText({
  text,
  textColor,
  style,
  type = "default",
}: MyTextProps) {
  const stylesUsed = (type: TextType) => {
    switch (type) {
      case "title":
        return styles.titleStyles;
      case "subTitle":
        return styles.subTitleStyles;
      default:
        return styles.textStyles;
    }
  };

  const selectedStyle = stylesUsed(type);
  const textStyle = textColor
    ? { ...selectedStyle, color: textColor }
    : selectedStyle;

  return <Text style={[textStyle, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  textStyles: {
    fontFamily: "Gothic-SemiBold",
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  titleStyles: {
    fontFamily: "Gothic-Bold",
    fontSize: 42,
    fontWeight: "bold",
    color: "black",
  },
  subTitleStyles: {
    fontFamily: "Gothic-SemiBold",
    fontWeight: "800",
    fontSize: 28,
    color: "#999da0",
  },
});
