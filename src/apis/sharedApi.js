import { getToken } from '../utils/helpers'

export const baseUrl = "https://stage.pawtai.com/api/auth/login";
export const loginUrl = "https://stage.pawtai.com/api/auth/login";
export const signUpUrl = "https://stage.pawtai.com/api/auth/signup";
// export const baseUrl = "https://myDomain";
//export const baseUrl = "http://localhost:9000/api";

export const header = async () => ({
	"Content-Type": "application/json",
	"x-access-token": await getToken(),
	"Access-Control-Allow-Origin": "*"
});

export const authHeader = {
	"Content-Type": "application/json",
	"Access-Control-Allow-Origin": "*"
};
