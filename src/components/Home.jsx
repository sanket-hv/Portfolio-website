import React from 'react'
import About from './About'
import Services from './Services'
import Design from './Design'
import Features from './Features'
import Complete_project from './Complete_project'
import Testimonial from './Testimonial'
// import Articles_blog from './Articles_blog'
import Meeting from './Meeting'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'mdbreact/dist/css/mdb.css'



const Home = () => {

  return (
    <>
      <About/>
        <Services/>
      <Design/>
      <Features/>
      <Complete_project/>
        <Testimonial/>
      {/* <Articles_blog/> */}
      <Meeting/>
      
    </>
  )
}

export default Home
