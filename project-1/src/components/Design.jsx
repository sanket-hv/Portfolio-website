import React from 'react'
import creative_design_img from '../assests/images/create-design/creative-design-img.png'

const Design = () => {
    return (
        <>
            <section className="creative-design-section" data-aos="fade-up">
                <div className="creative-design-main">
                    <div className="container">
                        <h1>We deploy world-class Creative Design team on demand. that can design, build, ship and scale your vision in the most efficient way</h1>
                        <p>Do you have next cool idea and want to develop web or mobile apps for your startups or organisations? Feel free to connect we can have consultation call and I will analyze where I can help you with my skills so you will get maximum results.</p>
                        <a href="#">Contact us</a>
                        <div className="creative-design-img">
                            <img src={creative_design_img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Design
