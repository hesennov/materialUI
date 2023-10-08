import AddCircleIcon from "@mui/icons-material/AddCircle";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModeal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% -25)", md: 30 },
        }}
      >
        <IconButton color="primary" aria-label="add">
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      {/* <Button>Open modal</Button>  */}
      <StyledModeal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={250}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Typography fontWeight={500} variant="span">
              hesennov_
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotionsIcon />
            <ImageIcon />
            <VideoCameraBackIcon />
            <PersonAddIcon />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModeal>
    </>
  );
};
export default Add;
