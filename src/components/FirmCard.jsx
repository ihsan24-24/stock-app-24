import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { btnHoverStyle, flexRow } from "../globalStyles/Style";
import useStockCalls from "../hooks/useStockCalls";

const FirmCard = ({ firm, setInfo, setOpen }) => {
  const { deleteFirm } = useStockCalls();
  const handleEdit = () => {
    setOpen(true);
    setInfo(firm);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={firm.image} alt="image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm.phone}
        </Typography>
      </CardContent>
      <CardActions sx={flexRow}>
        <EditIcon sx={btnHoverStyle} onClick={handleEdit} />
        <DeleteIcon sx={btnHoverStyle} onClick={() => deleteFirm(firm.id)} />
      </CardActions>
    </Card>
  );
};

export default FirmCard;
