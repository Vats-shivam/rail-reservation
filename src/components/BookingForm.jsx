import React, { useState } from 'react'
import stations from '../assets/stations'
function BookingForm(props) {
  const [source, setSource] = useState(''); // State for source station
  const [destination, setDestination] = useState(''); // State for destination station
  const [travelClass, setTravelClass] = useState(''); // State for travel class
  const [selectedDate, setSelectedDate] = useState(new Date());



  const travelClasses = ['SLEEPER', '3AC', '2AC', '1AC'];

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleClassChange = (event) => {
    setTravelClass(event.target.value);
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let fare;
  let travelRate;
  if(travelClass==="1AC"){
    travelRate=500;
  }
  else if(travelClass==="2AC"){
    travelRate=400;
  }
  else if(travelClass==="3AC"){
    travelRate=300;
  }
  else{
    travelRate=200;
  }
  fare=travelRate*(stations.indexOf(destination)-stations.indexOf(source))
    // Handle form submission logic here
    console.log('Form submitted:', { source, destination, travelClass ,selectedDate,fare});
    props.setDetails({source,destination,travelClass,selectedDate,fare});
    setDestination("");
    setSelectedDate(new Date());
    setSource("");
    setTravelClass("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='booking-form'>
        <label htmlFor="fromStation">
          From
        </label>
        <select name="fromInput" id="fromStation" value={source} onChange={handleSourceChange} required>
          <option value="" disabled>Select Source Station</option>
          {stations.map((station) => (
            destination === station ? (<option key={station} value={station} disabled>
              {station}
            </option>) : <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>

        <label htmlFor="toStation">
          To
        </label>
        <select name="toInput" id="toStation" value={destination} onChange={handleDestinationChange} required>
          <option value="" disabled>Select To Station</option>
          {stations.map((station) => (
            source === station ? (<option key={station} value={station} disabled>
              {station}
            </option>) : <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>

        <label htmlFor="class">
          Class
        </label>
        <select name="classInput" id="class" value={travelClass} onChange={handleClassChange} required>
          <option value="" disabled>Select Class</option>
          {travelClasses.map((travelClass) => (
            <option key={travelClass} value={travelClass}>
              {travelClass}
            </option>
          ))}
        </select>
        <label htmlFor="travelDate">Travel Date</label>
        <input type="date" name="travelDate" id="travelDate" min={new Date().toISOString().split('T')[0]} value={selectedDate} onChange={handleDateChange} required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BookingForm