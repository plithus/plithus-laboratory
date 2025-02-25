import axios from "axios";

axios.defaults.withCredentials = true;

const token = sessionStorage.getItem("token");

const instance = axios.create({
  baseURL: process.env.REACT_APP_TESTAPI,
  headers: {
    authorization: token,
  },
});

export default instance;
