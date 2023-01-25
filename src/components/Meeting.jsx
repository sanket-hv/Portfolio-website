import React from 'react'
import calender from '../assests/images/meeting/calander.png'
import meeting_icon from '../assests/images/meeting/meeting-icon.png'
import { PopupButton } from 'react-calendly';

const Meeting = () => {
  return (
    <>
      <section className="meeting-section" id='meeting'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-md-12">
              <div className="meeting-contain">
                <h1>Book A Meeting In Calendly</h1>
                <div>
                  <PopupButton
                   className='book-meeting-button'
                    url="https://calendly.com/abhi-jiyawebsolutions/30min"
                    rootElement={document.getElementById('root')}
                    text="Book a meeting"
                    textColor="#ffffff"
                    color="#319795"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className='calender-img'>
                <img src={calender} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Meeting
