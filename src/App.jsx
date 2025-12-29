import './App.css';
import Nav from './Nav';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='About' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;