import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import Address from './components/Address';
import OrderPlaced from './components/OrderPlaced';
import Order from './components/Order';
import Header from './components/Header';

function App() {
  return (
    <div className="">

      

      <Routes>
        <Route path="/" element={<Header />} >
          <Route path="/" element={<Home />} />
          <Route path="/shipped" element={<Address />} />
          <Route path="/orderdetails" element={<Order />} />
          <Route path="/orderplaced" element={<OrderPlaced />} />
        </Route>
      </Routes>
      
    </div >
  );
}

export default App;
