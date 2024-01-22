import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookingForm from './components/BookingForm'
import Ticket from './components/Ticket'

function App() {
  const [reservDetails, setReservDetails] = useState(null)
  return (
    <>
    <h1>Railway reservation System</h1>
      {reservDetails?<Ticket details={reservDetails} setDetails={setReservDetails}/>:<BookingForm setDetails={setReservDetails}/>}
    </>
  )
}

export default App
