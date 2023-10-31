import { StyleSheet, View, TouchableOpacity } from "react-native";
import MyText from "../MyText";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";

import { colors } from "../../theme";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

interface IAccountView {
  iconName: any;
  title: string;
  path: string;
}
enum TitleEnum {
  PODCAST = "My Podcast",
  LOGOUT = "My Podcast",
  HELP_SUPPORT = "Help & Support",
}
function AccountView({ iconName, title, path }: IAccountView) {
  const iconDetector = (iconName: any, title: string) => {
    switch (title) {
      case TitleEnum.PODCAST:
        return (
          <MaterialCommunityIcons name={iconName} size={20} color="white" />
        );
      case TitleEnum.LOGOUT:
        return <SimpleLineIcons name={iconName} size={20} color="white" />;
      case TitleEnum.HELP_SUPPORT:
        return <AntDesign name="question" size={24} color="white" />;
      default:
        return <MaterialIcons name={iconName} size={20} color="white" />;
    }
  };

  const handleNaivgation = (path: string) => {
    router.push(path);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleNaivgation(path);
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.iconTextWrapper}>
          <View style={styles.center}>{iconDetector(iconName, title)}</View>
          <View style={styles.ml14}>
            <MyText text={title} />
          </View>
        </View>
        <View>
          <Fontisto name="angle-right" size={20} color="#898d94" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 25,
  },
  center: {
    backgroundColor: colors.secondary,
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
});

export default AccountView;
