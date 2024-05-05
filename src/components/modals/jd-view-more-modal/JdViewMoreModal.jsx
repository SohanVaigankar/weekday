import { Box, Modal, Typography } from "@mui/material";
// styles
import "./JdViewMoreModal.css";

const JdViewMoreModal = (props) => {
  const { open, handleClose, data } = props;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          margin: "0 auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outline: "none",
          padding: "1rem",
        }}
      >
        <div className="ModalContent">
          <Typography
            variant="h4"
            sx={{
              position: "sticky",
              top: 0,
              width: "100%",
              backgroundColor: "inherit",
            }}
          >
            About Company
          </Typography>
          <div className="ModalTextContainer">
            <p>{data}</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default JdViewMoreModal;
