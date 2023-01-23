import React from 'react'
import Slider from "react-slick";
import project_1 from '../assests/images/complete-project/project-1.png'
import project_2 from '../assests/images/complete-project/project-2.png'
import project_3 from '../assests/images/complete-project/project-3.png'
import project_4 from '../assests/images/complete-project/project-4.png'
import project_5 from '../assests/images/complete-project/project-5.png'
import project_6 from '../assests/images/complete-project/project-6.png'

const Project_slider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={project_1} alt="" />
                </div>
                <div>
                    <img src={project_2} alt="" />
                </div>
                <div>
                    <img src={project_3} alt="" />
                </div>
                <div>
                    <img src={project_4} alt="" />
                </div>
                <div>
                    <img src={project_5} alt="" />
                </div>
                <div>
                    <img src={project_6} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Project_slider
