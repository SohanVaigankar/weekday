import { Box, Modal, Typography } from "@mui/material";

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
        }}
      >
        <Box
          bgcolor={"#fff"}
          height={"max-content"}
          width={"100%"}
          maxWidth={"768px"}
          borderRadius={4}
          padding={3}
          paddingTop={4}
          paddingBottom={4}
        >
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
          <Typography mt={2} maxHeight={"75vh"} sx={{ overflow: "auto" }}>
            {data}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default JdViewMoreModal;
