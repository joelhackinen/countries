import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import WarningIcon from "@mui/icons-material/Warning";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const style = {
  // eslint-disable-next-line
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Error = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Modal
        open
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Page not found <WarningIcon />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {location.pathname} not found. Redirecting...
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Error;
