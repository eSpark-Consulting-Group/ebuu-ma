import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MyButton, MyInput, MyText } from "../../components";
import { PrimaryButton, RadioButton } from "../../components/MyButton";

export default function signIn() {
  const [selectedOption, setSelectedOption] = useState(true);
  const handleSelect = (option: boolean) => {
    option == true ? setSelectedOption(false) : setSelectedOption(true);
  };

  return (
    <View>
      <MyText text="Welcome." type={"title"} />
      <MyText text="Create an account" type={"subTitle"} />
      <MyInput label="Email" placeholder="Enter email" icon />

      <View style={styles.wrapperRadionButton}>
        <RadioButton
          selected={selectedOption}
          onPress={() => handleSelect(selectedOption)}
        />
        <MyText style={styles.ms5} text="I agree With Terms & Conditions" />
      </View>
      <PrimaryButton
        title="Sign Up"
        onPress={() => {
          console.log("test");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperRadionButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 15,
  },
  ms5: {
    marginStart: 5,
  },
});

