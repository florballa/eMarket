import React, { useEffect, useState } from "react";
import SettingsComponent from "../../components/SettingsComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const settingsOptions = [
    { title: "My Info", subTitle: "Setup your Profile", onPress: () => {} },
    { title: "Accounts", subTitle: null, onPress: () => {} },
    {
      title: "Default account for new contacts",
      subTitle: email,
      onPress: () => {},
    },
    { title: "Users to Display", subTitle: "All users", onPress: () => {} },
    {
      title: "Sort By",
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    { title: "Name format", subTitle: null, onPress: () => {} },
    { title: "Import", subTitle: null, onPress: () => {} },
    { title: "Export", subTitle: null, onPress: () => {} },
    { title: "About eMarket", subTitle: null, onPress: () => {} },
  ];

  const prefArray = [
    {
      name: "First Name",
      selected: sortBy ==="First Name",
      onPress: () => {
        saveSettings("sortBy", "First Name");
        setSortBy("First Name");
        setModalVisible(false);
      },
    },
    {
      name: "Last Name",
      selected: sortBy ==="Last Name",
      onPress: () => {
        saveSettings("sortBy", "Last Name");
        setSortBy("Last Name");
        setModalVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    await AsyncStorage.getItem("username").then((res) => setEmail(res));
    await AsyncStorage.getItem("sortBy").then((res) => setSortBy(res));
  };

  const saveSettings = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <SettingsComponent
      settingsOptions={settingsOptions}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      prefArray={prefArray}
    />
  );
};

export default Settings;
