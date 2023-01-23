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
                        <h5>Shannon J <br /> <span>Manager</span></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider
