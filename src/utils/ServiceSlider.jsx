import React from 'react'

const ServiceSlider = (props) => {
    return (
        <>
            {/* <div className='row g-0 m-0'> */}
            <div className="col-12 col-lg-6 g-0">
                <div className={`d-inline-block explore-services-img1`}>
                    <div className={`explore-web${props.number}`} data-hover = {props.content}>
                        <img src={props.img} alt="" />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default ServiceSlider
