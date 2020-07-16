import { baseUrl } from "../Constants/Urls";

export const signIn = (data) => {
  const urlAddress = `${baseUrl}/api/v1/auth/login`;

  return fetch(urlAddress, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  }).then((data) => data.json());
};
