import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Card = (props) => {

  return (
    <>
        <div className="card">
          <div className="upper">
            <div className="logo">
              <img src={props.brandLogo} alt="airbnb logo" />
            </div>
            <div className="sv-btn">
              <button>Save</button>
              <i className="ri-bookmark-line"></i>
            </div>
          </div>
          <div className="center">
            <div className="center-top">
              <h3>{props.company}</h3><span>{props.datePosted}</span>
            </div>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <h5>{props.pay}</h5>
              <h6>{props.location}</h6>
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