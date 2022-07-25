import { loginUrl, baseUrl, signUpUrl, authHeader, header } from "./sharedApi";
import { requestHelper } from "../utils/helpers";

export const loginUser = async credentials => {
	console.log("2");

	const res = await requestHelper(
		`${loginUrl}`,
		"POST",
		authHeader,
		credentials
	);
	console.log("4");

	const data = res.json();
	console.log(data);
	return data;
};
export const SignUpUser = async credentials => {
	console.log("2");

	const res = await requestHelper(
		`${signUpUrl}`,
		"POST",
		authHeader,
		credentials
	);
	console.log("4");

	const data = res.json();
	console.log(data);
	return data;
};

export const fetchDevice = async () => {
	let url = `${baseUrl}/devices`;
	const res = await requestHelper(url, "GET", authHeader);
	const data = await res.json();
	return data;
};

export const getInventoryList = async () => {
	let url = `${baseUrl}/inventory/list`;
	const res = await requestHelper(url, 'GET', await header());
	const data = await res.json();
	return data;
}
