// import axios from "axios";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import { flexColumn } from "../globalStyles/Style";
import useStockCalls from "../hooks/useStockCalls";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";

const Firms = () => {
  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  // const dispatch = useDispatch()
  // const { token } = useSelector((state) => state.auth);
  // const getFirms = async () => {
  //   dispatch(fetchStart())
  //   const BASE_URL = "will write base url";
  //   try {
  //     const url = "firms"
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //    dispatch(getSuccess({data, url}))
  //   } catch (error) {
  //     dispatch(fetchFail())
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getFirms();
  }, []);
  const handleNewFirm = () => {
    setInfo({ adress: "", phone: "", address: "", image: "" });
    setOpen(true);
  };
  return (
    <Box>
      <Typography variant="h4" color="red">
        Firms
      </Typography>
      <Button
        variant="contained"
        onClick={handleNewFirm}
        sx={{ margin: "1rem" }}
      >
        New Firm
      </Button>
      <FirmModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />
      {firms?.length > 0 && (
        <Grid container sx={flexColumn}>
          {firms?.map((firm) => (
            <Grid item key={firm.id}>
              <FirmCard firm={firm} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
