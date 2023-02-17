import React from "react";
import img1 from "../Images/img2.png";
import { FaMobileAlt } from "react-icons/fa";
import { FaSearch, FaUserCircle, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Account from './pages/Account';
import { Stack } from "@mui/material";
//import Clck from "./reuse/Clickevent";
//import {HiOutlineShoppingCart } from "react-icons/fa";
//import { FaUserCircle } from "react-icons/fa";
const Header = () => {

  const ids1 = localStorage.getItem("ids")|| []
  return (
    <>
      <div className="navbar-header">
        <section className="header-top">
          <div className="header-top-wraper">
            <span className="left-side-header">
              Brand Waali Quality, Bazaar Waali Deal!{" "}
            </span>
            <div className="right-side-header">
              <span className="a1"> Impact@Snapdeal </span>
              <span className="a2"> Gift Cards </span>
              <span className="a3"> Help Center</span>
              <span className="a4"> Sell On Snapdeal</span>
              <span className="a5">
                <span className="dnld">
                  <FaMobileAlt /> Download App
                </span>
              </span>
            </div>
          </div>
        </section>
        <div className="main-navbar">
          <div className="logo">
          
            <a href="">
              <img
                className="image"
                src={img1}
                height="60px"
                width="150px"
              ></img>
            </a>
          </div>
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search products & brands"
            />
          </div>

          <button type="button" className="btn">
            <FaSearch />
            Search
          </button>

          <span className="cart">
            <Link to="/cart"  color="white">
            <Stack  direction="row" spacing={7} color="white" fontWeight="500" font-family= "Roboto" sans-serif marginTop="0.9em" letter-spacing= "0.02857em"
    text-transform= "uppercase" paddingLeft={1}>
               CART 
             
                <FaCartArrowDown  />
             
             {ids1.length}
              </Stack>
            </Link>
          
          </span>
          <span className="signin">
           <Stack  direction="row">
            <Account/>
              <span className="accicon">
                <FaUserCircle />
              </span>
              </Stack>
          </span>
        </div>
      </div>
    </>
  );
};
export default Header;
