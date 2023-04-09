import React from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { useState } from 'react';
import JourneyDetail from '../JourneyDetail/JourneyDetail';

export const Home = () => {

  const [journey, setJourney] = useState(null)

  const handleJourneyChange = (journey) => {
    setJourney(journey)
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null && <JourneyDetail journey={journey.stops} />}
    </main>
  )
}
