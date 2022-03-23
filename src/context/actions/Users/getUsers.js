import {
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USERS_LOADING,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default () => (dispatch) => {
  dispatch({
    type: GET_USERS_LOADING,
  });

  axios
    .get("/users")
    .then((res) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USERS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong in GET USERS" },
      });
    });
};
