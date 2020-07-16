import { getToken } from "../Utils/Common";
import { baseUrl } from "../Constants/Urls";

export const getUsers = () => {
  const urlAddress = `${baseUrl}/api/v1/user`;
  const token = getToken();

  return fetch(urlAddress, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
};

export const getUserById = (id) => {
  const urlAddress = `${baseUrl}/api/v1/user/${id}`;
  const token = getToken();

  return fetch(urlAddress, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
};

export const getUserUpdate = (id, data) => {
  const urlAddress = `${baseUrl}/api/v1/user/${id}`;
  const token = getToken();

  return fetch(urlAddress, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
};
