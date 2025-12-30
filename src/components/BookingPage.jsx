import React from "react"
import BookingForm from "./BookingForm"

function BookingPage({availableTimes, dispatch, submitForm}) {
    return (
        <main>
            <h1>Reserve a Table</h1>
            <p>Please fill out the form to book your table.</p>
            <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}/>
        </main>
    )
}

export default BookingPage

