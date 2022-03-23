import {
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
  EDIT_USER_LOADING,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form, id) => (dispatch) => (onSuccess) => {
  const requestPayload = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email, 
    password: form.password,
    phoneNumber: form.phoneNumber,
    countryCode: form.countryCode,
    enabled: form.enabled,
    userImage: form.userImage
  };
  dispatch({
    type: EDIT_USER_LOADING,
  });

  axios
    .put(`/users/update/${id}`, requestPayload)
    .then((res) => {
      dispatch({
        type: EDIT_USER_SUCCESS,
        payload: res.data,
      });
      console.log("RES DATA EDIT USER::: ", res.data)
      onSuccess(res.data);
    })
    .catch((err) => {
      dispatch({
        type: EDIT_USER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong in GET USERS" },
      });
    });
};
