import React from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { useState } from 'react';
import JourneyDetail from '../JourneyDetail/JourneyDetail';
import SeatPicker from '../SeatPicker/SeatPicker';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate()
  const [journey, setJourney] = useState(null)

  const handleJourneyChange = (journey) => {
    setJourney(journey)
  }

  const handleBuy = () => {
    fetch("https://apps.kodim.cz/daweb/leviexpress/api/reservation", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        navigate(`/reservation/${data.results.reservationId}`)
      })
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null &&
        <>
          <JourneyDetail journey={journey.stops} />
          <SeatPicker seats={journey.seats} journeyId={journey.journeyId} />
          <div className="controls container">
            <button className="btn btn--big"
              type="button"
              onClick={handleBuy}>Rezervovat</button>
          </div>
        </>
      }
    </main>
  )
}
