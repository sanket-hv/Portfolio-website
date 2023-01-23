import React from 'react'
import full_potential from '../assests/images/modern-fearures/full-potential-img.png'
import nodejs from '../assests/images/modern-fearures/nodeJS.png'
import reactJS from '../assests/images/modern-fearures/reactJS.png'
import angular from '../assests/images/modern-fearures/angular.png'
import flutter from '../assests/images/modern-fearures/flutter.png'
import aws from '../assests/images/modern-fearures/aws.png'
import mongoDB from '../assests/images/modern-fearures/mongoDB.png'
import SQL from '../assests/images/modern-fearures/SQL.png'
import nest from '../assests/images/modern-fearures/nest.png'
import android from '../assests/images/modern-fearures/android.png'
import cloud from '../assests/images/modern-fearures/cloud.png'

const Features = () => {
    return (
        <>
            <section className="full-potential-section" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='features'> 
                    <div className="container">
                        <div className="full-potential-main">
                            <div className="full-potential-main-img">
                                <img src={full_potential} alt="" />
                            </div>
                            <div className="full-potential-features">
                                <h1>Full Potential Modern Features</h1>
                                <div className='all-card'>
                                    <div className='card-img'>
                                        <img src={nodejs} alt="" />
                                    </div>
                                    <div className='card-img'>
                                        <img src={reactJS} alt="" />
                                    </div>
                                    <div className='card-img'>
                                        <img src={angular} alt="" />
                                    </div>
                                    <div className='card-img'>
                                        <img src={flutter} alt="" />
                                    </div>
                                    <div className='card-img'>
                                        <img src={aws} alt="" />
                                    </div>
                                    <div className='card-img'>
                                        <img src={mongoDB} alt="" />
                                    </div>
                                    <div className='card-img'>
                                        <img src={SQL} alt="" />
                                    </div>
                                    <div className='card-img m-0'>
                                        <img src={nest} alt="" />
                                    </div>
                                    <div className='card-img'>
                                        <img src={android} alt="" />
                                    </div>
                                    <div className='card-img'>
                                        <img src={cloud} alt="" />
                                    </div>
                                    {/* <img src={reactJS} alt=""/>
                        <img src={angular} alt=""/>
                        <img src={flutter} alt=""/>
                        <img src={aws} alt=""/>
                        <img src={mongoDB} alt=""/>
                        <img src={SQL} alt=""/>
                        <img src={nest} alt=""/>
                        <img src={android} alt=""/>
                        <img src={cloud} alt=""/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
