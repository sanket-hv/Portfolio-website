import buisness__img from '../assests/images/buisness/buisness-img.png'
import subtract from '../assests/images/buisness/Subtract.png'
import project_icon from '../assests/images/buisness/project-icon.png'
import support_icon from '../assests/images/buisness/support-icon.png'

const About = () => {
    return (
        <>
            <section className='bg-about'>
                <div className="header-it-business-section">
                    <div className="header-it">
                        <div className="container">
                            <div className="row mobile-view">
                                <div className="col-12 col-lg-6 col-md-12">
                                    <div className="content">
                                        <h2>Providing Unparalleled IT Business Solution To Maximum Satisfaction</h2>
                                        <p>We Specialize In Designing, Building, Shipping and Scaling Beautiful, Usable
                                            Products
                                            With Blazing-Fast Efficiency</p>
                                        <div className='content-services'>
                                            <a className='hover-effect' href="#">View All Services</a>
                                        </div>
                                        <div className="content-experience">
                                            <div className="content-icon">
                                                <div className="img1-bg">
                                                    <div className="img-1">
                                                        <img src={subtract} alt="" />
                                                    </div>
                                                </div>
                                                <h6><span> 3 Years</span> Experience</h6>
                                            </div>
                                            <div className="content-icon">
                                                <div className="img2-bg">
                                                    <img src={project_icon} alt="" />
                                                </div>
                                                <h6><span> 200+ Projects</span> Completed</h6>
                                            </div>
                                            <div className="content-icon">
                                                <div className="img2-bg">
                                                    <img src={support_icon} alt="" />
                                                </div>
                                                <h6><span className='support'>Support</span><br/>Online 24/7</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-12 g-0">
                                    <div className="content-image">
                                        <img className='img_animation' src={buisness__img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
