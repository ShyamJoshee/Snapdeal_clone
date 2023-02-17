import * as React from "react";
import Rating from '@mui/material/Rating';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Input, Stack } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
// using stepper>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductItem(props) {
  // using stepper>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const handleClick=(id) =>{
    var quantity =0;
 quantity= localStorage.getItem(id)||0;
console.log(localStorage.getItem(id));
    quantity= parseInt(quantity,10)+1;
    localStorage.setItem(id,quantity);
  
    var ids = localStorage.getItem("ids")
    if(isNaN(ids)){
      ids = JSON.parse(ids)
   
    }
    else{
      ids=[];
    }
          console.log(ids)
   
    if(!ids.includes(id)){
      ids.push(id);
    }
    console.log(ids);
    localStorage.setItem("ids",JSON.stringify(ids))
  }
 
 return (
    <>
      <Box sx={{ flexGrow: 1, }} className="">
      
                  <Card sx={{ maxWidth: 300, minHeight: 350,maxHeight:350 }}>
                  <Link to ={`/product/${props.pro?.id}`}>
                    <Stack justifyContent="center" alignItems= "center">

                   
                  <Typography variant="button" color="text.primary">
                     {props.pro?.title.slice(0,10)}
                      </Typography>
                     
                      <Avatar src={props.pro?.image} variant="square" sx={{height:200,width:200}}></Avatar>
                      </Stack>
                    <Stack className="" alignItems= "center">
                      <Typography variant="caption" color="text.secondary">
                     {props.pro?.description.slice(0 ,50)}
                      </Typography>
                      <Rating name="read-only" value= {parseFloat(props.pro?.rating.rate)} readOnly precision={0.5}  />
                    </Stack>
                    </Link>
                      <Stack direction="row" spacing={0} justifyContent="space-between"marginRight={1}>
                       <Button size="small">  {props.pro?.price}$</Button>
                        <Button size="small" variant="contained" onClick={() => handleClick(props.pro?.id)}>
                         Add
                        </Button>
                      </Stack>
                   
                  </Card>
                 
      </Box>
      
    </>
  );
}
