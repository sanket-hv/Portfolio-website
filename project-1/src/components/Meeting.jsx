import React from 'react'
import calender from '../assests/images/meeting/calander.png'
import meeting_icon from '../assests/images/meeting/meeting-icon.png'

const Meeting = () => {
  return (
    <>
      <section class="meeting-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6 col-md-12">
              <div class="meeting-contain">
                <h1>Book A Meeting In Calendly</h1>
                <div class="book-meeting-button">
                  <img src={meeting_icon} alt="" />
                  <h5>Book A Meeting</h5>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-md-12">
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
