// import React from 'react'
import '../styles/App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Catalog from './pages/Catalog';
// import Payment from './pages/Payment';
// import Product from './pages/Product';
// import Account from './pages/Account';
// import Cart from './pages/Cart';
import { useState } from 'react';
// import Header from './Header';
// import ProductItem from './reuse/ProductItem';

const Clck = ()=>{
 




const [show, setShow] = useState(true);
const [cart, setCart] = useState([]);

const handleClick = (item) => {
  if (cart.indexOf(item) !== -1) return;
  setCart([...cart, item]);
};

const handleChange = (item, d) => {
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d;

  if (arr[ind].amount === 0) arr[ind].amount = 1;
  setCart([...arr]);
};
}
export default Clck;
