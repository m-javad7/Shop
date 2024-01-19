import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { Navbar } from './components/nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
