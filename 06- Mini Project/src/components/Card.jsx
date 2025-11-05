import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Card = () => {
  return (
    <>
    <div className="card">
    <div className="upper">
        <div className="logo">
          <img src="https://cdn.freebiesupply.com/images/large/2x/airbnb-logo.png" alt="airbnb logo" />
        </div>
        <div className="sv-btn">
          <button>Save</button>
          <i className="ri-bookmark-line"></i>
        </div>
    </div>
    <div className="center">
      <div className="center-top">
      <h3>Airbnb</h3><span>5 days ago</span>
      </div>
      <h2>Junior UI/UX Designer</h2>
      <div className="tag">
        <h4>Contract</h4>
        <h4>Remote</h4>
      </div>
    </div>
    <div className="bottom">
      <div className="bottom-left">
        <h5>$100/hr</h5>
        <h6>Delhi, India</h6>
      </div>
      <div className="bottom-right">
        <button>Apply Now</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Card