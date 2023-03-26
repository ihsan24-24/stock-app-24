import React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { flexColumn, Modalstyle } from "../../globalStyles/Style";
import { Button, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

const FirmModal = ({ open, setOpen, info, setInfo }) => {
  const { postFirm, putFirm } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      // id varsa kayıt olmuş demek o zaman edit olacak
      putFirm(info);
    } else {
      postFirm(info);
    }
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    // setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
          <Box sx={flexColumn} component="form" onSubmit={handleSubmit}>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              onChange={handleChange}
              value={info?.name}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              onChange={handleChange}
              value={info?.phone}
            />
            <TextField
              label="Adress"
              name="address"
              id="address"
              type="text"
              onChange={handleChange}
              value={info?.address}
            />
            <TextField
              label="Image URL"
              name="image"
              id="image"
              type="url"
              onChange={handleChange}
              value={info?.image}
            />
            <Button type="submit" variant="contained" size="large">
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default FirmModal;
