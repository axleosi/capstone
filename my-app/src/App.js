import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import { Homepage } from './Pages/Homepage';
import Menu  from './Pages/Menu';
import Reserve from './Pages/Reserve';
import Order  from './Pages/Order';
import About from './Pages/About';
import { Login } from './Pages/Login';
import ConfirmBooking from './Pages/ConfirmBooking';


function App() {
  return (
    <>
      <Nav/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/about" element={<About/>}/>
    <Route path="/order" element={<Order/>}/>
    <Route path="/reservation" element={<Reserve/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/comfirmbooking' element={<ConfirmBooking/>}/>
  </Routes>
    </>
   
  );
}

export default App;
