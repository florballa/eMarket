import {
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_LOADING,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => (onSuccess) => {
  dispatch({
    type: DELETE_USER_LOADING,
  });

  axios
    .delete(`/users/delete/${id}`)
    .then((res) => {
      console.log(id);
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong in DELETE USERS" },
      });
    });
};
