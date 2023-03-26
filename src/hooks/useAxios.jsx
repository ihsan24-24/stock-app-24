import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "will write base url";

//* base url buraya yazılacak end point işleme gore sonuna eklenecektir.
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const useAxios = () => {
  //* kullanıcının reduxtaki bilgisinde token bilgisini çektik
  const { token } = useSelector((state) => state.auth);

  //* axiosun serileştirilebilir özelliklerini kullanarak base axios dosyasını oluşturduk.
  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken };
};

export default useAxios;
