import { StyleSheet, Text, View } from "react-native";
import MyText from "../MyText";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../theme";
interface IDeviceNameList {
  iconName: any;
  title: string;
  action?: string;
  subtitle: string;
}
enum TitleEnum {
  QUESTIONS = "Remaining Questions",
  LANGUAGE = "Language",
  KID = "Kid's name",
  AGE = "Age",
}
function DeviceNameList({
  iconName,
  title,
  action,
  subtitle,
}: IDeviceNameList) {
  const iconDetector = (iconName: any, title: string) => {
    switch (title) {
      case TitleEnum.QUESTIONS:
        return (
          <MaterialCommunityIcons name={iconName} size={30} color="black" />
        );
      case TitleEnum.LANGUAGE:
        return <Ionicons name={iconName} size={30} color="black" />;
      case TitleEnum.KID:
        return <Feather name={iconName} size={30} color="black" />;
      case TitleEnum.AGE:
        return <FontAwesome name={iconName} size={30} color="black" />;
      default:
        return <MaterialIcons name={iconName} size={30} color="black" />;
    }
  };

  const actionIcon = (action: string | undefined) => {
    switch (action) {
      case "edit":
        return <AntDesign name="edit" size={30} color="black" />;
      default:
        return;
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.iconTextWrapper}>
        <View style={styles.center}>{iconDetector(iconName, title)}</View>
        <View style={styles.ml14}>
          <MyText style={styles.titleTxtStyle} text={title} />
          <MyText text={subtitle} />
        </View>
      </View>
      <View style={styles.mr8}>{actionIcon(action)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  center: {
    width: 45,
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ml14: {
    marginLeft: 14,
  },
  mr8: {
    marginRight: 10,
  },
  titleTxtStyle: {
    fontSize: 20,
    fontWeight: "800",
    opacity: 0.8,
  },
});

export default DeviceNameList;
