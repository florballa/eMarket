import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
//import * as SecureStore from "expo-secure-store";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (email, password) => (dispatch) => {
  dispatch({
    type: LOGIN_START,
  });
  fetch("http://192.168.1.50:8080/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams({
      email: email,
      password: password,
    }).toString(),
  })
    .then((res) => {
      if (res.ok) {
        AsyncStorage.setItem(
          "access_token",
          res.headers.get("access_token")
        );
        AsyncStorage.setItem(
          "refresh_token",
          res.headers.get("refresh_token")
        );
        AsyncStorage.setItem(
          "username",
          res.headers.get("email")
        );
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: { error: res.error },
        });
      }
    })
    .catch((err) => {
      console.log("Error:: ", err);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
