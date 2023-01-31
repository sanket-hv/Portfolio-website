import React, { useEffect } from 'react'
import Slider from "react-slick";
import service_img_1 from '../assests/images/services/services-image1.png'
import service_img_2 from '../assests/images/services/services-image2.png'
import rocket from '../assests/images/services/services-image.png'
import ServiceSlider from '../utils/ServiceSlider'

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: 'unslick',
            },
        ],
    };
 
    const togglerocket = () => {
        let scrolled = document.documentElement.scrollTop;
        // console.log(scrolled)
        
        if (scrolled > 500){
            document.querySelector('.rocket').classList.add('active')
            document.querySelector('.explore-services-section').style.overflowX = 'visible'
        } 
        else if (scrolled <= 300 ){
            document.querySelector('.rocket').classList.remove('active')
            document.querySelector('.explore-services-section').style.overflowX = 'hidden'
        }
        if (scrolled > 900){
            document.querySelector('.explore-services-section').style.overflowX = 'hidden'
            console.log(scrolled);
        }
      }; 

    window.addEventListener('scroll', togglerocket);
    return (
        <>
            <section className="explore-services-section">
                <div className="container">
                    <h1>Explore Our Services</h1>
                    <Slider autoplay = {true} {...settings} className='services'>
                        <div className="row">
                        <ServiceSlider number={1} img={service_img_1} content = {'Web development'} />
                        </div>
                        <div className="row">
                        <ServiceSlider number={1} img={service_img_2} content = {'Dashboard Development'} />
                        </div>
                        <div className="row">
                        <ServiceSlider number={1} img={service_img_1} content = {'Web development'}  />
                        </div>
                        <div className="row">
                        <ServiceSlider number={1} img={service_img_2}  content = {'Dashboard Development'} />
                        </div>
                    </Slider>
                </div>
                <div className='rocket'>
                    <img src={rocket} alt="" />
                </div>
            </section>

        </>
    )
}

export default Services
