import React from 'react'
import ReservationForm from './ReservationForm.js'

const Reservations = ({}) => {
 

  return (
    <div className="row text-left" id="reservations">
    <h2 className="text-center">Reservations</h2>
    <div className="col-md-8 col-sm-6">
      <p>Call us at 123-4567 or use our booking form to make a reservation.</p>
      <h3>Hours</h3>
      <p>Mon to Sun, 11:00AM - 11:30PM</p>
    </div>
    <div className="col-md-4 col-sm-6">
        <ReservationForm />
    </div>
    </div>
    )

}

export default Reservations