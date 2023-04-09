import React from "react";
import "./JourneyDetail.css"
import BusStop from "../BusStop/BusStop";

const JourneyDetail = ({ journey }) => {

    return (
        <div className="journey-detail container">
            <h2>Podrobnosti cesty</h2>
            <div className="stops">
                {journey.map((stop) =>
                    <BusStop key={stop.code}
                        name={stop.name}
                        station={stop.station}
                        time={stop.time} />)}
            </div>
        </div>
    )
}

export default JourneyDetail