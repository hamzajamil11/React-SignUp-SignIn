import Cookies from "js-cookie";
import * as types from "../types";
import { action } from "../../utils/helper";
import { loginUser } from "../../apis/authApi";

export const setCurrentUser = user => action(types.SET_AUTH_USER_NAME, user);
export const authName = name => action(types.SET_AUTH_USER_NAME, name);
export const authPassword = password =>
	action(types.SET_AUTH_PASSWORD, password);
export const setModal = () => action(types.SET_AUTH_MODAL, {});


export const login = (credentials, history) => {
	return async dispatch => {

		const response = await loginUser(credentials);
		if (!response.error) {
			//
			disptch(setCurrentUser(response.data.user));
			await Cookies.set("notificationStatus", response.notificationPermission, { expires: 1 });
			await Cookies.set("userToken", response.token, { expires: 1 });
			await Cookies.set("deviceId", response.deviceId, { expires: 1 });
			history.push("/dashboard");
		} else {
			dispatch(setModal());
		}
	};
};
