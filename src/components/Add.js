import React, {useState} from 'react'

import {
  Tooltip,
  Fab,
  Modal,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import {Box} from "@mui/system"
import AddIcon from "@mui/icons-material/Add";
import Avatar3 from "./images/avatar3.jpg";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";


const StyleModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap :"10px",
  marginBottom:"20px"


});

const Add = () => {
    const [open , setOpen] =useState(false)
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add comment"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25)", md: 30 },
        }}
      >
        <Fab color="dark" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="#888" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src={Avatar3}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="What is on your mind"
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
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
      </StyleModal>
    </>
  );
}

export default Add