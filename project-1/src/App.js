import Home from './components/Home';
// import About from './About';
// import Services from './Services';
// import Portfolio from './Portfolio';
// import Testimonial from './Testimonial';
// import Blog from './Blog';
// import Talk from './Talk';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/App.scss'
import AOS  from 'aos';
import '../node_modules/aos/dist/aos.css';
import React , { useEffect } from 'react';

const App = () => {

useEffect(()=>{
  AOS.init();
}, [])

  return (
    <>
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        {/* <Route path='/about' element ={<About/>}/>
        <Route path='/Service' element ={<Services/>}/>
        <Route path='/Portfolio' element ={<Portfolio/>}/>
        <Route path='/Testimonial' element ={<Testimonial/>}/>
        <Route path='/Blog' element ={<Blog/>}/>
        <Route path='/Talk' element ={<Talk/>}/> */}
      </Routes>
      <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
