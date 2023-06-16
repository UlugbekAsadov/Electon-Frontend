import axios from "axios";

const DEFAULT_TIMEOUT = 10 * 1000; // 10s

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});
