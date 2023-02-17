import * as React from "react";
import "./product.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import  { useEffect, useState } from 'react';
// import img2 from "../../Images/img1.png";
// import img3 from '../../Images/mens.jpg';
// import img4 from '../../Images/H&K.jpg';
// import img5 from '../../Images/kids.jpg';
// import img6 from '../../Images/Beauty.jpg';
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";

// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Input, Rating, Stack } from "@mui/material";
import { Form, useParams } from "react-router-dom";
// import { Margin } from "@mui/icons-material";
// import ProductItem from "../reuse/ProductItem";
// import Pagination from '@mui/material/Pagination';
import Divider from '@mui/material/Divider';
// import { Route,Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "start",
    color: theme.palette.text.secondary,
  }));

function Product(props) {
    
    const params = useParams();
    const id = params.id;
    const [productItem , setItem] =React.useState({});
    const getProductList= async()=>{
      const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`;
      console.log(url,id);
      const response = await fetch(url);
      const data = await response.json();
       console.log(data,"Reset data");

      setItem(data)
      
    }
    
  
   
   useEffect(()=>{
    getProductList()
   },
      
       [] );
 

 

 
 
 return (
   <div className="">
     <Box sx={{ flexGrow: 1, padding: 3 }} className="gridbox">
        <Grid container sx={{minHeight:500 , padding:2}}>
        <Grid item xs={4}  sx={{minHeight:"450px",width:"100%" }}>
        <Item sx={{ height: "450px",width:"100%" }}>
            <CardMedia component="img" image={productItem?.image} sx={{maxHeight:"450px",width:"100%" }}>
            
            </CardMedia>
           </Item>
        </Grid>
        <Grid item xs={8}  sx={{ height: "450px" }}>
        <Item sx={{ height: "450px",width:"100%" }}>
            <Grid container sx={{minHeight:450 , padding:2}}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                       {productItem?.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
                        
               
                <Rating name="read-only" value= {parseFloat(productItem?.rating?.rate)} readOnly precision={0.5}  />
                   
              
                <Button>{productItem?.rating?.count}</Button>
                </Stack>
                </Grid>
                <Grid item xs={12}>
               <Button size="large">{productItem?.price}$</Button>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="caption">
                       {productItem?.description}
                        </Typography>
                </Grid>
                <Grid item xs={12}>
               
                        <Stack direction="row" spacing={2}>
                        <Button size="large" variant="contained">Add</Button>
                        <Button size="large" variant="contained">Buy Now</Button>
                        </Stack>
                       
                </Grid>
            </Grid>
        
           </Item>
        </Grid>
        </Grid>
     </Box>
   </div>
 );
 }
 
 export default Product;
 

