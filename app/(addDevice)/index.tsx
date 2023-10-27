import React, { useState, useEffect } from "react";
import { View } from "react-native";

import DLoad from "./dLoad";
import DList from "./dList";
import TScreen from "./tScreen";
import PForm from "./pForm";
import WList from "./wList";

export default function AddDevice() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(1);
  }, []);

  useEffect(() => {
    if (step == 1 || step == 5) {
      handleStep();
    }
  }, [step]);

  const handleStep = () => {
    setTimeout(() => {
      setStep(step + 1);
    }, 3000);
  };

  return (
    <View style={{ flex: 1 }}>
      {step == 1 && <DLoad scan />}
      {step == 2 && (
        <DList
          setStep={(val) => {
            console.log(val);
            setStep(val);
          }}
        />
      )}
      {step == 3 && (
        <WList
          setStep={(val) => {
            console.log(val);
            setStep(val);
          }}
        />
      )}
      {step == 4 && <PForm setStep={(val) => setStep(val)} />}
      {step == 5 && <DLoad scan={false} />}
      {step == 6 && <TScreen success />}
    </View>
  );
}
