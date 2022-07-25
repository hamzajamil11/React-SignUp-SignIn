import moment from "moment";
import Cookies from "js-cookie";

// require("moment-timezone");

export const action = (actionName, load) => ({
  type: actionName,
  payLoad: load
});

export const requestHelper = (url, method, headers, data) => {
  console.log("3");

  const requestLoad = {
    method,
    headers: {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  const getLoad = {
    method,
    headers: { ...headers, "Content-Type": "application/json" }
  };
  return fetch(`${url}`, method === "GET" ? getLoad : requestLoad);
};

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isValidEmail = email => {
  return EMAIL_REGEX.test(email);
};

export const getDeviceId = async () => {

  return await Cookies.get("deviceId");
};
//notificationStatus
export const getNotificationStatus = async () => {

  return await Cookies.get("notificationStatus");
};
export const setNotificationStatus = async (status) => {

  return await Cookies.set("notificationStatus", status, { expires: 1 });

};


export const getToken = async () => {
  return await Cookies.get("userToken");
}
export const clearToken = async () => {
  return await Cookies.remove("userToken");
}
export const add = (accumulator, a) => {
  return accumulator + a;
};

export const timeConverter = (milliseconds) => {
  let time = moment(milliseconds).format("DD MMM YYYY hh:mm a");
  return moment.tz(time, "America/Los_Angeles").format('LT');
}

//
// export const socks = () => {
//   let socket = socketIOClient(socketUrl, {
//     transports: ['websocket', 'polling'],
//     timeout: 5000,
//     reconnectionDelayMax: 2000
//   });
//   return socket;
// }