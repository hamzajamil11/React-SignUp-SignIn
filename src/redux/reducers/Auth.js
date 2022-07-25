import * as types from "../types";
const initialState = {
  email: "",
  password: "",
  userName: '',
  modalShow: false,
  logindata: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_USER_NAME:
      return {
        ...state,
        userName: action.payLoad
      };
    case types.SET_AUTH_EMAIL:
      return {
        ...state,
        email: action.payLoad
      };
    case types.SET_AUTH_PASSWORD:
      return {
        ...state,
        password: action.payLoad
      };
    case types.SET_AUTH_MODAL:
      return {
        ...state,
        modalShow: !state.modalShow
      }
    default:
      return state;
  }
};
