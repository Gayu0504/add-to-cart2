import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import Address from './components/Address';
import OrderPlaced from './components/OrderPlaced';
import Order from './components/Order';
import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shipped" element={<Address />} />
          <Route path="/orderdetails" element={<Order />} />
          <Route path="/orderplaced" element={<OrderPlaced />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
