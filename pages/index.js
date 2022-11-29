import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Components/Layouts/Layout'
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import Hero from '../Components/Elements/Hero';
import Partners from '../Components/Elements/Partners';

function index() {
  return (
    <div>
      <Header/>
      {/* <Hero/> */}
      <Partners/>
      <Footer/>
    </div>
  )
}

export default index