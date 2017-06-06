import React from 'react'

const ReservationForm = () => {

  return (
    <form action="">
    <div className="form-group">
    <label htmlFor="date">Date</label>
    <input type="date" name="date" className="form-control" />
    </div>
      <div className="form-group">
    <label htmlFor="time">Time</label>
    <input type="time" name="time" className="form-control" />
    </div>
      <div className="form-group">
    <label htmlFor="headcount">No. of People</label>
    <input type="number" name="headcount" className="form-control" min="1" max="20" />
    </div>
    <input type="submit" className="btn btn-primary" />
    </form>
    )

}

export default ReservationForm