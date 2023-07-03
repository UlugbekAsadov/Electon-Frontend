import axios from "axios";
import Cookies from "js-cookie";

const DEFAULT_TIMEOUT = 10 * 1000; // 10s

const accessToken = Cookies.get("m_at");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${accessToken}`,
};

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  timeout: DEFAULT_TIMEOUT,
  headers,
});
