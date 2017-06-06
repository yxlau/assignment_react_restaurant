import React from 'react'
import MapEmbed from './MapEmbed.js'

const Contact = () => {


  return (
      <div className="row text-left" id="contact">
      <h2 className="text-center">Contact</h2>
      <div className="col-sm-6 col-md-4">
      <h3>Restaurant</h3>
      <p>2424 Mirving Street</p>
      <p>San Francisco, CA 94122</p>

      <p>Call us at 415-123-4567 or email us at <a href="mailto:restaurant@restaurant.com">restaurant@restaurant.com</a></p>

      </div>
      <div className="col-sm-6 col-md-8">
        <MapEmbed />
      </div>
      </div>
    )
}


export default Contact