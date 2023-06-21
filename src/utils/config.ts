import axios from "axios";
import { VITE_AXIOS_BASE_URL } from "../config";

export const client = axios.create({
  baseURL: VITE_AXIOS_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
