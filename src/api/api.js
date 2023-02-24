import axios from "axios";

// const apiURLs = {
//   development: "http://localhost:4000",
//   production: "https://tsw-api.cyclic.app",
// };

const apiURLs = "https://tsw-api.cyclic.app";

const api = axios.create({ baseURL: apiURLs });

api.interceptors.request.use((config) => {
  const loggedInUserJSON = localStorage.getItem("loggedInUser");

  const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');

  if (parseLoggedInUser.token) {
    config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` };
  }

  return config;
});

export { api };
