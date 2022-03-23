import {
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_USER_LOADING,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export default (form) => (dispatch) => (onSuccess) => {
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
    type: CREATE_USER_LOADING,
  });

  axios
    .post("/users/add", requestPayload)
    .then((res) => {
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: CREATE_USER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong in GET USERS" },
      });
    });
};
