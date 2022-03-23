import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import navigatonRef from './SideMenu/RootNavigator';
import SplashScreen from "react-native-splash-screen";

const AppNavContainer = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = () => {
    try {
       AsyncStorage.getItem("username").then((res) => {

        console.log("Get user username:: ", res);

        if (res) {
          setAuthLoaded(true);
          setIsAuthenticated(true);
        } else {
          setAuthLoaded(true);
          setIsAuthenticated(false);
        }
      });
    } catch (error) {
      console.log("Error in user:: ", error);
    }
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  useEffect(()=> {
    if(authLoaded){
      SplashScreen?.hide();
    }
  }, [authLoaded]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigatonRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
