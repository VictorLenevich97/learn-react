import axios from "axios";
import { ACCESS_TOKEN } from "../constants/common";

const BASE_URL = "https://studapi.teachmeskills.by/";

export const publicAxios = axios.create({
  baseURL: BASE_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
  },
});
