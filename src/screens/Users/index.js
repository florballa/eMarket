import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import UserComponent from "../../components/UserComponent";
import getUsers from "../../context/actions/Users/getUsers";
import {GlobalContext} from "../../context/Provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Users = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const {
    userDispatch,
    userState: {
      getUsers: { data, loading },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getUsers()(userDispatch);
  }, []);

  const getSettings = async () => {
    await AsyncStorage.getItem("sortBy").then((res) => setSortBy(res));
  };

  useFocusEffect(useCallback(()=>{
    getSettings();
    return ()=>{};
  }, []));

  return (
    <UserComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  );
};

export default Users;
