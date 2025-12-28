import './App.css';
import Nav from './Nav';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
      </Routes>
    </>
  );
}

export default App;