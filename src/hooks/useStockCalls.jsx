import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { toastSuccessNotify } from "../helper/ToastNotify";
// import { axiosWithToken } from "../service/axiosInstance";
import useAxios from "./useAxios";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //! ******* Get Funcs. *********************

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");
  const getBrands = () => getStockData("brands");

  //! ********* Delete Funcs. *******************************

  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successful deleted`);
      getStockData(url);
    } catch (error) {}
  };
  const deleteFirm = (id) => deleteStockData("firms", id);
  const deleteBrand = (id) => deleteStockData("brands", id);

  //! ******** Post Funcs. ***********************************

  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`/stock/${url}/`, info);
      toastSuccessNotify(`${url} Created Firm`);
      getStockData(url);
    } catch (error) {}
  };

  const postFirm = (info) => postStockData(info, "firms");
  const postBrand = (info) => postStockData(info, "brands");

  //! ********* Put Funcs. ************************************

  const putStockData = async (info, url) => {
    try {
      await axiosWithToken.put(`/stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successful update`);
      getStockData(url);
    } catch (error) {}
  };
  const putFirm = (info) => putStockData(info, "firms");
  const putBrand = (info) => putStockData(info, "brands");

  //? ********** Return ******************************************
  return {
    getFirms,
    deleteFirm,
    postFirm,
    putFirm,
    getBrands,
    postBrand,
    putBrand,
    deleteBrand,
    getSales,
  };
};

export default useStockCalls;
