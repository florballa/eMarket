import {
  GET_USERS_FAIL,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  CREATE_USER_LOADING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  DELETE_USER_FAIL,
  DELETE_USER_LOADING,
  DELETE_USER_SUCCESS,
  EDIT_USER_LOADING,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
} from "../../constants/actionTypes";

const user = (state, { type, payload }) => {
  switch (type) {
    case CREATE_USER_LOADING:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: true,
          error: null,
        },
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          data: payload,
          error: null,
        },

        getUsers: {
          ...state.getUsers,
          data: [...state.getUsers.data, payload],
          loading: false,
          error: null,
        },
      };

    case CREATE_USER_FAIL:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: payload,
        },
      };

    case EDIT_USER_LOADING:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: true,
          error: null,
        },
      };

    case EDIT_USER_FAIL:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          loading: false,
          error: payload,
        },
      };

    case EDIT_USER_SUCCESS:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          data: payload,
          loading: false,
          error: null,
        },

        getUsers: {
          ...state.getUsers,
          loading: false,
          data: state.getUsers.data.map((item) =>{
            if(item.id === payload.id){
              return payload;
            }
            else {
              return item;
            }
          }),
          error: null,
        },
      };

    case GET_USERS_LOADING:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          loading: true,
          error: null,
        },
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        getUsers: {
          ...state.getUsers,
          loading: false,
          error: payload,
        },
      };

    case DELETE_USER_LOADING:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: true,
          error: null,
        },
      };

    case DELETE_USER_FAIL:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: false,
          error: payload,
        },
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: false,
          data: payload,
          error: null,
        },
        getUsers: {
          ...state.getUsers,
          loading: false,
          data: state.getUsers.data.filter((item) => item.id !== payload),
          error: null,
        },
      };

    default:
      return state;
  }
};

export default user;
