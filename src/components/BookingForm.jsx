import React, { useState } from "react";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = useState("");
    const [time,setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const newDate = e.target.value
        setDate(newDate);
        dispatch({type: 'UPDATE_TIMES', date: newDate})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({
            date, time, guests, occasion
        })
        console.log("Form submitted:", {date, time, guests, occasion});
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date:</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required/>

            <label htmlFor="res-time">Choose time:</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime}>{availableTime}</option>
                    ) )}
            </select>

            <label htmlFor="guests">Number of guests:</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}/>

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation"/>
        </form>
    )

}

export default BookingForm;

