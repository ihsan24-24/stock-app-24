export const Modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const flexColumn = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export const flexRow = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
};

export const btnHoverStyle = {
  cursor: "pointer",
  "&:hover": { color: "red" },
};
