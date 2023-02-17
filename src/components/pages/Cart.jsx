import * as React from "react";
import "./product.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import Login from "../pages/Login";
import img2 from "../../Images/c2.jpg";
import img8 from "../../Images/ca1.jpg";
import img3 from "../../Images/WF.jpg";
import img7 from "../../Images/mens.jpg";
import img4 from "../../Images/H&K.jpg";
import img5 from "../../Images/kids.jpg";
import img6 from "../../Images/Beauty.jpg";
import Footer from "../reuse/Footer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Checkout from "../reuse/checkout";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Input, Stack } from "@mui/material";
import Carousel from "./Carousel";
import ProductItem from "../reuse/ProductItem";
import Pagination from "@mui/material/Pagination";
// using stepper>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Cart() {
  const [iq, setIq] = React.useState({});

  const handleClick = (id) => {
    var quantity = 0;
    quantity = localStorage.getItem(id) || 0;
    console.log(localStorage.getItem(id));
    quantity = parseInt(quantity, 10) + 1;
    localStorage.setItem(id, quantity);
    iq[id]= quantity;

    var total = 0;
itemList.forEach(item => {
  if(item.id==id){
    total += item.price*quantity
  }
  else
    {
      total += item.price;
    }
});
 
const cart ={"price":total}
setCart(cart)
  };

  const handleCount = (id) => {
    var quantity = 0;
    var ids = localStorage.getItem("ids");
    if (isNaN(ids)) {
      ids = JSON.parse(ids);
    } else {
      ids = [];
    }
    // const items = JSON.parse(ids)

    quantity = localStorage.getItem(id);
    console.log(localStorage.getItem(id));
    quantity = parseInt(quantity, 10) - 1;
    localStorage.setItem(id, quantity);
    if (quantity <= 0) {
      const arrayWithoutD = ids.filter(function (i) {
        return i !== id;
      });
      var wantedData = itemList.filter(function (i) {
        return arrayWithoutD.includes(i.id);
      });
      setList(wantedData);

      localStorage.setItem("ids", JSON.stringify(arrayWithoutD));
      iq[id]= quantity;
    }
    var total = 0;
    itemList.forEach(item => {
      if(item.id==id){
        total += item.price*quantity
      }
      else
        {
          total += item.price;
        }
    });
     const cart ={"price":total}
    setCart(cart)

  };

  const [itemList, setList] = React.useState([]);
  const [cartItem, setCart] = React.useState({});

  const getProductList = async () => {
    var ids = localStorage.getItem("ids");
    ids = JSON.parse(ids);
    const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;
    const response = await fetch(url);
    const data = await response.json();
    var wantedData = data.filter(function (i) {
      return ids.includes(i.id);
    });
    setList(wantedData);
    var total = 0;
wantedData.forEach(item => {

 const quantity=localStorage.getItem(item.id);
 console.log(quantity,item.id)
    total += item.price*quantity;

});
 
const cart ={"price":total}
setCart(cart)
  };

  useEffect(() => {
    getProductList();
  }, []);

  const [open, setOpen] = React.useState("none");

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 7 }} className="gridbox">
        {/* <Alert
          sx={{ display: { open } }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen("none");
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert> */}
        {[...itemList].map((item) => (
          <Grid
            container
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ minHeight: 250, padding: 4 }}
          >
            <Grid Item xs={6}>
              <Stack direction="row">
                <Avatar
                  src={item.image}
                  variant="square"
                  margin="20px"
                  sx={{ height: 200, width: 180 }}
                ></Avatar>
                <Typography padding={2}>{item?.description}</Typography>
               
              </Stack>
              <Button onClick={() => handleClick(item.id)}>
               +
              </Button>
              {iq[item.id]}
              <Button onClick={() => handleCount(item.id)}>-</Button>
            </Grid>
            <Typography>
                  Item Price Rs. {item.price}
                </Typography>
          </Grid>
        ))}
 <Grid Item xs={6}>
              <Stack direction="row">
              
                <Checkout/>
                <Typography>
                  Your total cart price is Rs. {cartItem.price}
                </Typography>
              </Stack>
            </Grid>
        <Footer />
      </Box>
    </>
  );
}
