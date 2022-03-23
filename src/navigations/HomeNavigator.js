import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LOGOUT, SETTINGS, USER_CREATE, USER_DETAILS, USER_LIST } from '../constants/routeNames';
import Users from '../screens/Users';
import UserDetails from '../screens/UserDetails';
import UserCreate from '../screens/UserCreate';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';

const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={USER_LIST}>
          <HomeStack.Screen name={USER_LIST} component={Users} ></HomeStack.Screen>
          <HomeStack.Screen name={USER_DETAILS} component={UserDetails}></HomeStack.Screen>
          <HomeStack.Screen name={USER_CREATE} component={UserCreate}></HomeStack.Screen>
          <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
          <HomeStack.Screen name={LOGOUT} component={Logout}></HomeStack.Screen>
      </HomeStack.Navigator>
    );
}

export default HomeNavigator;