import React from 'react'

const TestimonialSlider = (props) => {
    return (
        <>
            <div className="col-12 col-lg-4 d-inline">
                <div className='client-say-box'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum
                        Lorem Ipsum dummy Lorem Ipsum is simply dummy.</p>
                    <img className="client-img" src={props.rating} alt="" />
                    <div className="client-name">
                        <img src={props.img1} alt="" />
                        {/* <h5>James G. Calhoun <br /> <span>CEO of HRC Company</span></h5> */}
                        <h5>{props.name} <br />{props.position}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider
