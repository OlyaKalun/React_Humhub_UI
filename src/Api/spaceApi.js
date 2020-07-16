import { baseUrl } from "../Constants/Urls";
import { getToken } from "../Utils/Common";

export const createNewSpace = (data) => {
  const urlAddress = `${baseUrl}/api/v1/space`;
  const token = getToken();

  return fetch(urlAddress, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "same-origin",
  }).then((data) => data.json());
};

export const getAllSpace = (data) => {
  const urlAddress = `${baseUrl}/api/v1/space`;
  const token = getToken();

  return fetch(urlAddress, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
};
