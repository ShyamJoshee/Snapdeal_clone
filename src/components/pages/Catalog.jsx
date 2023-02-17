import * as React from "react";
//import "./product.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import  { useEffect, useState } from 'react';
import Login from '../pages/Login';
import img2 from "../../Images/c2.jpg";
import img8 from "../../Images/ca1.jpg";
import img3 from '../../Images/WF.jpg';
import img7 from '../../Images/mens.jpg';
import img4 from '../../Images/H&K.jpg';
import img5 from '../../Images/kids.jpg';
import img6 from '../../Images/Beauty.jpg';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Footer from "../reuse/Footer";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Input, Stack } from "@mui/material";

import ProductItem from "../reuse/ProductItem";
import Pagination from '@mui/material/Pagination';

 const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


export default function AlignItemsList() {
  const [itemList , setList] =React.useState([]);
  const getProductList= async()=>{
    const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data,"kjuuuuuuuuuuuu");
    setList(data)
    setLength(data.Length);
  }
  

 
 useEffect(()=>{
  getProductList()
 },
    
     [] );


  
  const [page, setPage] = React.useState(0);
  const [itemLength, setLength] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 3 }} className="gridbox">
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={3} sx={{ Maxheight: "50px" }}>
            <Item sx={{ maxWidth: 280, bgcolor: "background.paper" }}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>TOP CATAGORIES</ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src={img3}
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Women's Fashion" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={img7} />
                  </ListItemAvatar>
                  <ListItemText primary="Men's Fashion" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={img4} />
                  </ListItemAvatar>
                  <ListItemText primary="Home & Kitchen" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={img5} />
                  </ListItemAvatar>
                  <ListItemText primary="Toys, Kids' Fashion & more" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={img6} />
                  </ListItemAvatar>
                  <ListItemText primary="Beauty, Health &amp; Daily Needs" />
                </ListItem>
                <ListItem>MORE CATAGORIES</ListItem>
                <ListItem>
                  <ListItemText primary="Automotives" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Mobile & Accessories" />
                </ListItem>{" "}
                <ListItem>
                  <ListItemText primary="Electronics" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sports, Fitness & Outdoor" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Computers & Gaming" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Books, Media & Music" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Hobbies" />
                </ListItem>
                <ListItem>TRENDING SEARCHES</ListItem>
                <ListItem>
                  <ListItemText primary="Kitchen Product" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Shoes For Men" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Kurti Set" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sandal Men" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sport Shoe Men" />
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid item xs={9} sx={{ height: "500px" }}>
            <Grid item xs={12} sx={{ height: "400px" }}>
            <Grid container spacing={2} sx={{}}>

               
              <Grid item xs={9} sx={{ height: "400px" }}>
              
              <Item sx={{ height: "350px" }}><Avatar src={img8} variant="square" sx={{height:350,width:710}}></Avatar></Item>
              </Grid>
              <Grid item xs={3} sx={{ height: "500px" }}>
               {/* // <Item sx={{ height: "400px", width: "100%" }}> */}
                  <Card sx={{ maxWidth: 345,height:"315px" }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={img2}
                     
                    />
                    <CardContent className="cardcontent">
                   
                      <Typography variant="body2" color="text.secondary" margin="13px" marginLeft="32px">
                        Login to your Account
                      </Typography>
                      
                     
                      <Login />
                    </CardContent>
                    <CardActions> <h7> new user?</h7>
                      <Stack direction="row" spacing={5} padding="1rem">
                      <Button > Register</Button>
                        
                      </Stack>
                    </CardActions>
                  </Card>
                {/* </Item> */}
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12} sx={{ height: "200px" }} className="trend">
              <Typography marginLeft={8}>TRENDING PRODUCTS</Typography>
            <Item sx={{ height: "370px", padding:2 }} className=""> 
            <Stack direction={"row"} spacing={2}>

              {/* {[1,2,3].map((item)=>(
                  <ProductItem />
                 
           ) )} */}
           {/* {(itemList.Length)>0?(<>
               </> ):(null)
           
          } */}
<ProductItem  pro={itemList[page]}/>
<ProductItem pro={itemList[page+1]} />
                <ProductItem pro={itemList[page+2]}/>
               
                 
            
            </Stack>
            <Pagination count={15} page={page} onChange={handleChange} />
            </Item>
            
            </Grid>
          </Grid>
          <Footer />
        
        </Grid>
      </Box>
     
    </>
  );
}
