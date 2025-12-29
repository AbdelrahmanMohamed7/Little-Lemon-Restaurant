import React, { useState, useReducer } from 'react';
import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';

export const updateTimes = (state, action) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const intializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

function App() {
      const [availableTimes,dispatch] = useReducer(updateTimes,[],intializeTimes);
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}/>
        <Route path='About' element={<About/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;