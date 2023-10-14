import axios from "axios";

export const instance = axios.create({
  baseURL: "http://ec2-35-78-241-42.ap-northeast-1.compute.amazonaws.com",
  headers: { Authorization: `Bearer ${sessionStorage.getItem("userToken")}` },
});
