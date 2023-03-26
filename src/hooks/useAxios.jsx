import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

// const baseURL = "https://13631.fullstack.clarusway.com/";
// export const axiosPublic = axios.create({
//   baseURL: baseURL,
// });

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);
  const axiosWithToken = axios.create({
    baseURL: "https://13631.fullstack.clarusway.com/",

    headers: { Authorization: `Token ${token}` },
  });
  return { axiosWithToken };
};

export default useAxios;
