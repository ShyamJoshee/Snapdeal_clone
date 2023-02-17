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
import pay from "../../Images/pay.png";
import scl from "../../Images/scl.jpg";


import imgr4 from '../../Images/tst.jpg';
import sng from '../../Images/sng.png';
import img6 from '../../Images/hc.png';

import img5 from '../../Images/lock.png.png';

import Divider from "@mui/material/Divider";

import Avatar from "@mui/material/Avatar";


import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Input, Stack } from "@mui/material";

import ProductItem from "../reuse/ProductItem";
import Pagination from '@mui/material/Pagination';
import { FaMobileAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
//import {HiOutlineShoppingCart } from "react-icons/fa";
//import { FaUserCircle } from "react-icons/fa";

const Footer = ()=>{
    return(
<>
<Grid
    container
    divider={<Divider orientation="vertical" flexItem />}
    sx={{ minHeight: 400, padding: "1em" }}
    spacing={2}
  >
    <Grid xs={3} sx={{ backgroundColor: "SmokeWhite" }}>
      <Card sx={{ maxWidth: 345, height: "315px" }}>
        <CardMedia
          sx={{
            height: "5em",
            width: "5em",
            margin: "1em",
            marginLeft: "7em",
          }}
          image={img5}
        />
        <CardContent className="cardcontent">
          <Typography
            variant="body2"
            color="text.secondary"
            margin="1em"
            marginLeft="4em"
          >
            <h2>100% SECURE PAYMENT</h2>
            <p>Moving your card details to a much more secured place.</p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid xs={3} sx={{ backgroundColor: "SmokeWhite" }}>
      <Card sx={{ maxWidth: 345, height: "315px" }}>
        <CardMedia
          sx={{
            height: "5em",
            width: "5em",
            margin: "1em",
            marginLeft: "7em",
          }}
          image={img6}
        />
        <CardContent className="cardcontent">
          <Typography
            variant="body2"
            color="text.secondary"
            margin="1em"
            marginLeft="4em"
          >
            <h2>TRUST PAY</h2>
            <p>100% payment protection easy return policy.</p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid xs={3} sx={{ backgroundColor: "SmokeWhite" }}>
      <Card sx={{ maxWidth: 345, height: "315px" }}>
        <CardMedia
          sx={{
            height: "5em",
            width: "5em",
            margin: "1em",
            marginLeft: "7em",
          }}
          image={imgr4}
        />
        <CardContent className="cardcontent">
          <Typography
            variant="body2"
            color="text.secondary"
            margin="1em"
            marginLeft="4em"
          >
            <h2>HELP CENTER</h2>
            <p>
              Got a question?Look no furthur. Browse our FAQs or submit your
              query here.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid xs={3} sx={{ backgroundColor: "SmokeWhite" }}>
      <Card sx={{ maxWidth: 345, height: "315px" }}>
        <CardMedia
          sx={{
            height: "5em",
            width: "5em",
            margin: "1em",
            marginLeft: "7em",
          }}
          image={sng}
        />
        <CardContent className="cardcontent">
          <Typography variant="body2" color="text.secondary">
            <h2>SHOP ON THE GO</h2>
            <p>
              Download the app and get exciting offers on your fingure tip
            </p>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid container sx={{ fontSize: "14px" }}>
      <Grid item xs="2.5">
        <ul>
          <h4>POLICY INFO</h4>
          <li>Privacy Policy</li>
          <li>Terms of Sale</li>
          <li>Terms of Use</li>
          <li>Report Abuse & Takedown Policy</li>
          <li>FAQ</li>
        </ul>
      </Grid>
      <Grid item xs="2.5">
        <ul>
          <h4>COMPANY</h4>
          <li>Impact@Snapdeal</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Sitemap</li>
          <li>Contact Us</li>
        </ul>
      </Grid>
      <Grid item xs="2.5">
        <ul>
          <h4>SNAPDEAL BUSINESS</h4>
          <li>Shopping App</li>
          <li>Sell on Snapdeal</li>
          <li>Media Enquiries</li>
        </ul>
      </Grid>
      <Grid item xs="2.5">
        <ul>
          <h4>POPULAR LINKS</h4>
          <li>Lehenga</li>
          <li>Kid's Clothing</li>
          <li>Sarees</li>
          <li>Winter Wear</li>
        </ul>
      </Grid>
      <Grid item xs="2">
        <h4>SUBSCRIBE</h4>

        <Button sx={{ backgroundColor: "black", width: "100px" }}>
          Subscribe
        </Button>

        <p>
          Register now to get updates on promotions andcoupons. Or Download
          App
        </p>
      </Grid>
    </Grid>
  </Grid>
  <hr />
   <Box>
    <Grid container>
      <Grid item xs={7}>
        PAYMENT
        <Stack direction="row" spacing={2}>
          <Avatar
            variant="square"
            src={pay}
            sx={{ height: 90, width: "70%" }}
          ></Avatar>
        
        </Stack>
      </Grid>
      <Grid item xs={5}>
        CONNECT
        <Avatar
          sx={{ height: 60, width: "60%" }}
          variant="square"
          src={scl}
        ></Avatar>
      </Grid>
    </Grid>
    <hr />
    <Grid container sx={{ fontSize: "12px" }}>
      <Typography  sx={{ fontSize: "12px"  ,fontFamily:"initial"}}>
      Men: Shirts for Men / Casual Shirts for Men / Formal Shirts for Men / Hoodies for Men / Cotton Shirts for Men / T Shirts for Men / Polo T shirts / Kurta Pajama for Men / White Shirt / Black Shirt / Lower for Men / Trousers for Men / Jacket for Men / Formal Pants for Men / Tracksuit for Men / Jeans for Men / Kurta Payjama Sets / Kurta for Men / Blazer for Men / Sweater for Men
Women: Tops for Women / Kurti / Cotton Sarees / Georgette Sarees / Chiffon Sarees / Net Sarees / Dresses for Women / Jumpsuit for Women / Jeans for Women / Salwar Suit / Bra / Jacket for Women / Night Dress for Women / Sweatshirt for Women / Shorts for Women / Readymade Blouse / Dupatta / T Shirt for Women / Shirts for Women / Skirts for Women / Ethnic wear for Women / Western Dresses for Women / Leggings for Women
Footwear: Men's Footwear / Casual Shoes for Men / Formal Shoes for Men / Loafers for Men / Slippers for Men / Boots for Men / Sandals for Men / Footwear for Women / Heels for Women / Sandals for Women / Shoes for Women / Sandals for Women / Slippers for Women / Boots for Women / Jutti for Women / Sports Shoes for Women
Home & Kitchen: Wall Painting / Wall Stickers / Dream Catcher / Rangoli Designs / Clock / Wall Clock / Alarm Clock / Diya / Bean Bag / Laptop Table / Study Table / Wall Hanging / Ceiling Lights / Table Lamp / Hanging Lights / LED Bulbs / Torch Light / LED Lights / Flower Vase / Keychain / Rudraksha / Screwdriver
Watch: Watch For Men / Womens Watches / Smart Watch / Boys Watch / Girls Watch
Home Furnishing: Bed Sheet / Mosquito Net / Mattress / Curtains / Sofa Cover / Blanket / Pillow / Carpet / Apron / Quilt / Floor Mat / Towel / Pillow Cover
Electronics: Bluetooth Speakers / Headphones / Earphone / Ceiling Fan / Geysers / Trimmer / Hair Straightner / Hair Dryer / Water Purifier / Mixer Grinder / Gas Stove / Electric Kettle / Computer Mouse / Computer Keyboard / USB & HDMI Cables / Computer Antivirus
Mobiles Accessories: Mobile Covers / Leather Mobile Covers / Printed Back Covers / Tempered Glass
Snapdeal is India's leading pure-play value Ecommerce platform. Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform. Snapdeal's vision is to enable the shoppers of Bharat to experience the joy of living their aspirations through reliable, value-for-money shopping. With a personalized, multilingual interface and cutting edge technology, Snapdeal has simplified the shopping experience for its value-conscious buyers by showcasing the most relevant products- products that are a good functional fit with their needs and of a quality that lasts- thereby delivering true value to its customers. With its commitment to high service standards, Snapdeal suppliers operate under a well structured ecosystem that enables them to offer great quality products at affordable prices. With majority of the value-seeking, middle-income, price-conscious buyers coming from the non-metros, Snapdeal’s logistics networks powered by third party logistics cover more than 96% of India’s pin codes enabling order deliveries to more than 2500 towns and cities and expanding. Further, Snapdeal's mission is to become India’s value lifestyle omni-channel leader. We are excited about continuing to build a complete ecosystem around value commerce, where we can serve Bharat consumers wherever they are on their offline to online shopping journey. Snapdeal is part of the AceVector Group and one of India’s best-known e-commerce companies with an exclusive focus on the value segment.

      </Typography>
    </Grid>
    <hr />
    <Grid sx={{ fontSize: "12px" }}>
      <Stack direction="row" spacing={109}>
        <p>Copyright © 2021, Snapdeal Limited. All Rights Reserve</p>
        
      </Stack>
    </Grid>
  </Box> 

</>
    )
}
export default Footer;
