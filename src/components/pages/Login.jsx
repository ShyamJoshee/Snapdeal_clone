import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { red } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px  #000",
  boxShadow: 24,
  borderRadius: "12px",
  
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <input type="number" className="input1" />
      <br />
      <Button onClick={handleOpen} className="login_btn">
        continue
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <span id="child-modal-title">Enter otp</span>
          <div Class="Container">
            <div Class="UserInput">
              <input
                Type="number"
                Id="Ist"
                Maxlength="4"
                Onkeyup="ClickEvent(This,'Sec')"
              />
              <input
                Type="number"
                Id="Sec"
                Maxlength="1"
                Onkeyup="ClickEvent(This,'Third')"
              />
              <input
                Type="number"
                Id="Third"
                Maxlength="1"
                Onkeyup="ClickEvent(This,'Fourth')"
              />
              <input Type="number" Id="Fourth" Maxlength="1" />
            </div>
          </div>
          <span>
            <Button>reset</Button>
          </span>
          <Button onClick={handleClose}>Submit</Button>
        </Box>
      </Modal>
    </>
  );
}

{
  /* <Card sx={{ maxWidth: 345 }}>
<CardMedia
  sx={{ height: 140 }}
  image="/static/images/cards/contemplative-reptile.jpg"
  title="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Lizard
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>
<Card /> */
}

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleOpen} sx={{color:"white",backgroundColor:"black",width:"100%"}}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography gutterBottom variant="h5" component="div">
            Login/Sign Up On Snapdeal
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            Please provide your Mobile Number or Email to Login/ Sign Up on
            Snapdeal
          </Typography>

          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
