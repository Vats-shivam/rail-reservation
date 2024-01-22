import React from 'react'
import stations from '../assets/stations';

function Ticket(props) {
  const {source,destination,travelClass,selectedDate,fare}=props.details;
  
  return (
    <div className="ticket-container">
      <button className='back-btn' onClick={()=>props.setDetails(null)}>back</button>
      <div className="ticket-header">
        <h2>Ticket Details</h2>
      </div>
      <table className="ticket-details">
  <tbody>
    <tr>
      <td><strong>From:</strong></td>
      <td>{source}</td>
    </tr>
    <tr>
      <td><strong>To:</strong></td>
      <td>{destination}</td>
    </tr>
    <tr>
      <td><strong>Class:</strong></td>
      <td>{travelClass}</td>
    </tr>
    <tr>
      <td><strong>Travel Date:</strong></td>
      <td>{selectedDate}</td>
    </tr>
    <tr>
      <td><strong>Fare:</strong></td>
      <td>{fare}</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}

export default Ticket