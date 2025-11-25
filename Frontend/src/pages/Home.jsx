import React from 'react'
import Nevbar from '../components/commen_components/Nevbar'
import Carousel from '../components/Home_components/carousel'
import Homeproduct from '../components/Home_components/Homeproduct'
import MySwiper from '../components/Home_components/Swiper'
import Mynewarraivels from '../components/Home_components/newarraivels'
import MyFooter from '../components/commen_components/Footer'
import { Popular_brand } from '../components/Home_components/Popular_brand'
// import Swiper from '../components/Home_components/Swiper'




const Home = () => {
  return (
    <>
     <Nevbar />
    <Carousel />
    <Homeproduct/>
    {/* <Swiper /> */}
    <MySwiper/>
    <Mynewarraivels />
    <Popular_brand />
    <MyFooter />
    </>
  )
}

export default Home