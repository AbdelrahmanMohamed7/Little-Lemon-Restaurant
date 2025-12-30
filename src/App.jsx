import React, { useState, useReducer } from 'react';
import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './tempApi';
import About from './components/About';
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking';

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.date));
    }
  return state;
};

export const intializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

function App() {
      const [availableTimes,dispatch] = useReducer(updateTimes,[],intializeTimes);
      const navigate = useNavigate();

      const submitForm = (formData) => {
        const isSubmitted = submitAPI(formData);

        if (isSubmitted) {
            navigate("/confirmation");
        }
    };

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking' element={<BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}/>}/>
        <Route path='About' element={<About/>}/>
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;