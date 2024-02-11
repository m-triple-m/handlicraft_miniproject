import React from 'react'
import { CSS } from './home.css'

const home = () => {
  return (
    <div className="heroSection"> 
    <div className="heroSection_box">
      <div className="heroSection_box_1_left">
        <h1>REDISCOVER SOME OF YOUR OUTDOOR FAVORITES</h1>
        <p>We love to see how designers style our products! Submit an image for consideration by tagging @madegoods and #madegoods on Instagram.</p>
        <button className="btn btn-primary">Explore</button>
      </div>
      <div className="heroSection_box_right">
        <img src="/background2.jpg" alt="Hero Section" width={700} height={500}/>
      </div>
    </div>
    </div>    
  )
}

export default home

