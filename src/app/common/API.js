import axios from "axios";
import { Cookies } from "./cookie";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export class API {
  static fnSendGetReq(url) {
    return axios.get(BASE_URL + url, {
      headers: {
        Authorization: Cookies.getItem("token"),
      },
    });
  }
  static fnSendPostReq(url, data) {
    return axios.post(BASE_URL + url, data);
  }
  static fnSendPuttReq(url, data) {
    return axios.put(BASE_URL + url, data);
  }
  static fnsendDeleteReq(url) {
    return axios.delete(BASE_URL + url);
  }
}
