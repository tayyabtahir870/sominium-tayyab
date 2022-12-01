import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Components/Layouts/Layout'
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import Hero from '../Components/Elements/Hero';
import Partners from '../Components/Elements/Partners';
import Available from '../Components/Elements/Available';
import Mechanics from '../Components/Elements/Mechanics';
import Virtual from '../Components/Elements/Virtual';
import Community from '../Components/Elements/Community';

function index() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Virtual/>
    <Mechanics/>
      <Partners/>
      <Community/>
      <Footer/>
    </div>
  )
}

export default index