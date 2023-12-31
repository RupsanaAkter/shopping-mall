
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import AddToCart from './components/AddToCart/AddToCart';

function App() {
  return (
    <div >

      <Header></Header>

      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addtocart' element={<AddToCart></AddToCart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
