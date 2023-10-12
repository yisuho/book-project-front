import axios from "axios";

export const instance = axios.create({
  baseURL: "ec2-18-179-25-179.ap-northeast-1.compute.amazonaws.com",
  headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` },
});
