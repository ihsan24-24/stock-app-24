import axios from "axios";

//! persist sayesinde token ı bu şekilde alabiliriz.
const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken);

export const axiosWithToken = axios.create({
  baseURL: "base url will write",

  headers: { Authorization: `Token ${token}` },
});
