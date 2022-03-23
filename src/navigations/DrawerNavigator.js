import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { HOME_NAVIGATOR } from "../constants/routeNames";
import { GlobalContext } from "../context/Provider";
import HomeNavigator from "./HomeNavigator";
import SideMenu from "./SideMenu/index";

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const { authDispatch } = useContext(GlobalContext);

  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }
    >
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        //options={{title: }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
