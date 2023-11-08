import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import AccountView from "./accountList";
import MyText from "../MyText";
import { FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AccountModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const flatListData = [
    {
      id: "bd7acbea-c1b41-46c2-aed5-3ad53abb28ba-1",
      title: "Ebuu (device name)",
      iconName: "mobile-friendly",
      path: "/(account)",
    },
    {
      id: "bd7acbea-c1b1-46c2-4aed5-3ad53abb28ba-2",
      title: "My Devices",
      iconName: "important-devices",
      path: "/(account)",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1-3",
      title: "My Podcast",
      iconName: "podcast",
      path: "/(account)/podcasts",
    },
    {
      id: "bd7acbea-c1b1-46c2-3aed5-3ad53abb28ba1-4",
      title: "History",
      iconName: "change-history",
      path: "/(account)/history",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb282ba-5",
      title: "Payment",
      iconName: "payment",
      path: "/(account)/payment",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12-6",
      title: "Help & Support",
      iconName: "payment",
      path: "/(account)",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1-81",
      title: "Logout",
      iconName: "logout",
      path: "/(auth)/signIn",
    },
  ];

  const listComponent = (item: any) => {
    return (
      <AccountView
        title={item.title}
        iconName={item.iconName}
        path={item.path}
      />
    );
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeaderWrapper}>
            <View style={styles.modalHeaderChild}>
              <MyText
                text="Menu"
                type="subTitle"
                style={{ fontSize: 22, color: "#000000" }}
              />
              <Fontisto
                name="close-a"
                size={20}
                color="#898d94"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
          <MyText style={styles.modalText} text="Account" />
          <FlatList
            data={flatListData}
            renderItem={({ item }) => listComponent(item)}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>

      <MaterialCommunityIcons
        name="devices"
        size={35}
        color="black"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalHeaderWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  modalHeaderChild: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    padding: 28,
    backgroundColor: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginRight: "auto",
  },
});

export default AccountModal;
