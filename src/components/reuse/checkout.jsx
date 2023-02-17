import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
//import input from "@mui/material/TextField";
import "./pay.css";
import MenuItem from '@mui/material/MenuItem';
// import { Label } from "@mui/icons-material";
// import { Stack } from "@mui/material";
import TextField from '@mui/material/TextField';
import  { useEffect, useState } from 'react';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 550,
  bgcolor: "antiquewhite",
  border: "2px  #000",
  boxShadow: 24,
  p: 4,
};


const state = [{name:"Delhi"},{name:"Kolkata"},{name:"Kolkata"},{name:"Kolkata"},{name:"Kolkata"},{name:"Kolkata"}];
const PayMethod = [{method:"COD"},{method:"Debit Card"},{method:"Credit Card"},{method:"Kolkata"},{method:"Kolkata"},{method:"Kolkata"}]
export default function Checkout() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [name, setName] = React.useState("");
    const [HNO, setHNO] = React.useState("");
    const [Street, setStreet] = React.useState("");
    const [City, setCity] = React.useState("");
    const [State, setState] = React.useState("");
    const [Zip, setZip] = React.useState("");

   const handleSubmit = ()=>{
localStorage.setItem("name",name);
localStorage.setItem("HNO",HNO);
localStorage.setItem("Street",Street);
localStorage.setItem("City",City);
localStorage.setItem("State",State);
localStorage.setItem("Zip",Zip);
handleClose();
alert("Your paymet submitted succsessfully");
    }

    const handleGet = ()=>{
        console.log("anju");

      setName(  localStorage.getItem("name"));
       setHNO( localStorage.getItem("HNO"));
        setStreet(localStorage.getItem("Street"));
        setCity(localStorage.getItem("City"));
       setState( localStorage.getItem("State"));
       setZip( localStorage.getItem("Zip"));
            }
            useEffect(() => {
             handleGet()
              
            },[])

   



   
  return (
    <>
      <Button onClick={handleOpen}>Checkout</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>

   


<TextField
          id="outlined-multiline-flexible"
          label="Full-Name"
         fullWidth
         margin="normal"
         default={name}
         onChange={(newValue) => setName(newValue.target.value)}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="House No/Building No."
          multiline
          maxRows={1}
          fullWidth
          margin="normal"
          default={HNO}
          onChange={(newValue) => setHNO(newValue.target.value)}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="Street/Colony"
          multiline
          maxRows={2}
          fullWidth
          margin="normal"
          default={Street}
          onChange={(newValue) => setStreet(newValue.target.value)}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="City"
          fullWidth
          margin="normal"
          default={City}
          onChange={(newValue) => setCity(newValue.target.value)}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="Pin Code"
          fullWidth
          margin="normal"
          default={Zip}
          onChange={(newValue) => setZip(newValue.target.value)}
        />
          <TextField
          id="outlined-select-currency"
          select
          label="State"
          defaultValue="Delhi"
          helperText="Please select your state"
          margin="normal"
          default={State}
          onChange={(newValue) => setState(newValue.target.value)}
        >
          {state.map((option) => (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
  
        <TextField
          id="outlined-select-currency"
          select
          label="Payment Method"
          defaultValue="cod"
          helperText="Please select your state"
          margin="normal"
         
        >
          {PayMethod.map((option) => (
            <MenuItem key={option.method} value={option.method}>
              {option.method}
            </MenuItem>
          ))}
        </TextField>
  

  <Button  size="small" sx={{paddingTop:"2em"}}  onClick={() => handleSubmit()}>Proceed</Button>

  
        </Box>

    
      </Modal>
    </>
  );
}


