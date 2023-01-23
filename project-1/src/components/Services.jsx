import React from 'react'
import Slider from "react-slick";
import service_img_1 from '../assests/images/services/services-image1.png'
import service_img_2 from '../assests/images/services/services-image2.png'
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
            </section>

        </>
    )
}

export default Services
