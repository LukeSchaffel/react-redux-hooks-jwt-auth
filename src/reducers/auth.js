import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_USERS_Fail,
  GET_USERS_SUCCESS
} from "../actions/types";
import { getUserFromToken } from "../services/tokenService";

const user = getUserFromToken()


const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload.users
      };
    default:
      return state;
  }
}