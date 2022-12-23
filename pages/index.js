import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import Hero from '../Components/Elements/Hero';
import Partners from '../Components/Elements/Partners';
import Available from '../Components/Elements/Available';
import Mechanics from '../Components/Elements/Mechanics';
import Virtual from '../Components/Elements/Virtual';
import Community from '../Components/Elements/Community';
import Calender from '../Components/Elements/Calender';
import Solana from '../Components/Elements/Solana';
import Mountain from '../Components/Elements/Mountain';

function index() {
  return (
    <div>
      <Header/>
      <Hero/>
      {/* <Solana/> */}
      {/* <Mountain/> */}
      <Virtual/>
    <Mechanics/>
      <Partners/>
      <Calender/>
      <Community/>
      <Footer/>
    </div>
  )
}

export default index