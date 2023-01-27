import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from "./Components/Navbar"
import Cart from "./Pages/Cart/Cart";
import Shop from './Pages/Shop/Shop';
import ShopContextProvider from './context/ShopContextProvider'


function App() {

  return (
   
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          </Routes>
      </Router>
      </ShopContextProvider>
  );
}

export default App;
