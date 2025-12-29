import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='About' element={<About/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;