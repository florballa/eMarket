import React from "react";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "../../components/common/Container";
import { SETTINGS } from "../../constants/routeNames";
import logoutUser from "../../context/actions/auth/logoutUser";
import styles from "./styles";
import CustomIcon from '../../components/common/Icon/index';

const SideMenu = ({ navigation, authDispatch }) => {

  const handleLogout = () =>{
    navigation.toggleDrawer();
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {}
      },
      {
        text: "OK",
        onPress: () => {
          logoutUser()(authDispatch);
        }
      }
    ])
  }

  const menuItems = [
    {
      icon: <CustomIcon type="feather" size={15} name="settings"/>,
      name: "Settings",
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <CustomIcon type="material" size={15} name="logout"/>,
      name: "Logout",
      onPress: handleLogout,
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require("../../assets/images/logo.png")}
          style={styles.logoImage}
        />
        <View style={styles.view}>
          {menuItems.map(({ icon, name, onPress }) => (
            <TouchableOpacity
              onPress={onPress}
              key={name}
              style={styles.menuItem}
            >
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
