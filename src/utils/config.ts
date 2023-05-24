import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
