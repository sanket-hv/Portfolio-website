import React from 'react'
import call from '../assests/images/footer/call.png'
import facebook from '../assests/images/footer/facebook.png'
import profile from '../assests/images/footer/profile.png'
import linked_in from '../assests/images/footer/linked-in.png'
import logo from '../assests/images/footer/logo.png'
import mail from '../assests/images/footer/mail.png'
import twitter from '../assests/images/footer/twitter.png'

const Footer = () => {
  return (
    <>
     <footer className="footer-bg">
        <div className="container">
            <div className="footer-main">
                <div className="row g-0 ">
                    <div className="col-12 col-lg-5 col-md-6">
                        <div className="footer-logo">
                            <div className="footer-logo-image">
                                <img src={logo} alt=""/>
                            </div>
                            <p>Providing unparalleled IT business solution to maximum satisfaction.</p>
                            <div className="footer-icon">
                                <div className="d-flex">
                                    <span>Follow us on</span>
                                    <a href="#">
                                        <img src={facebook} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img src={linked_in} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img src={twitter} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 tablet-footer">
                        <div className='profile-footer'>
                            <img src={profile} alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-12">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <p></p>
                            <div className="footer-call">
                                <a href="#" className="footer-contact-logo">
                                    <img src={mail} alt=""/>
                                </a>
                                <a href="#">Sankethv8509@gmail.com</a>
                            </div>
                            <div className="footer-call">
                                <a href="#" className="footer-contact-logo">
                                    <img src={call} alt=""/>
                                </a>
                                <a href="#">+12-2356 8956</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-12 tablet-footer1">
                        <div className='profile-footer'>
                            <img src={profile} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>All rights reserved &#169; 2022 Sanket Vanani</p>
        </div>
      </footer>
    </>
  )
}

export default Footer