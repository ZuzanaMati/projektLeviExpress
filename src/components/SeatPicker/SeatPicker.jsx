import React from "react";
import "./SeatPicker.css"
import SeatRow from "../SeatRow/SeatRow";


const SeatPicker = ({ seats, journeyId }) => {
    console.log(seats[0])

    return (
        <div className="seat-picker container">
            <h2>Vyberte sedadlo</h2>
            <div className="seats">
                {seats.map((seat, index) => <SeatRow key={index} row={seat} />
                )}
            </div>
        </div>
    )
}

export default SeatPicker