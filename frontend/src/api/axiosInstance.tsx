import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.bookbear.shop",
  headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` },
});
