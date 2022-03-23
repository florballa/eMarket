import { LOGOUT_USER } from "../../../constants/actionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => (dispatch) => {
  AsyncStorage.removeItem("access_token");
  AsyncStorage.removeItem("refresh_token");
  AsyncStorage.removeItem("username");
  dispatch({
    type: LOGOUT_USER,
  });
};
