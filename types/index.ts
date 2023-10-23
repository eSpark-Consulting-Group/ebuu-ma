import { TextStyle } from "react-native";

export type MyTextProps = {
  text: string;
  textColor?: string;
  style?: TextStyle;
  type?: TextType;
};

export type TextType = "default" | "title" | "subTitle";
