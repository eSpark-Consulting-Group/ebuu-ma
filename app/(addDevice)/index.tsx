import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {
  ESPProvisionManager,
  ESPDevice,
  ESPTransport,
  ESPSecurity,
  ESPWifiList,
} from "@orbital-systems/react-native-esp-idf-provisioning";

import DLoad from "./dLoad";
import DList from "./dList";
import TScreen from "./tScreen";
import PForm from "./pForm";
import WList from "./wList";

export default function AddDevice() {
  const [step, setStep] = useState(0);
  const [espDevices, setEspDevices] = useState<ESPDevice[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<ESPDevice>();
  const [selectedWifi, setSelectedWifi] = useState<ESPWifiList>();

  useEffect(() => {
    setStep(1);
    searchESPDevices();
  }, []);

  useEffect(() => {
    if (step == 5) {
      handleStep();
    }
  }, [step]);

  const searchESPDevices = async () => {
    const devices = await ESPProvisionManager.searchESPDevices(
      "PROV",
      ESPTransport.softap,
      ESPSecurity.secure
    );
    console.log("step devices", step, devices);
    setEspDevices(devices);
    setStep(2);
  };

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
          devices={espDevices}
          setSelectedDev={(dev) => setSelectedDevice(dev)}
        />
      )}
      {step == 3 && (
        <WList
          setStep={(val) => {
            console.log(val);
            setStep(val);
          }}
          selectedDev={selectedDevice}
          setSelectedWiFi={(wifi) => setSelectedWifi(wifi)}
        />
      )}
      {step == 4 && (
        <PForm
          setStep={(val) => setStep(val)}
          selectedWifi={selectedWifi}
          selectedDev={selectedDevice}
        />
      )}
      {step == 5 && <DLoad scan={false} />}
      {step == 6 && <TScreen success />}
    </View>
  );
}
