import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PizzaCreate from './pages/PizzaCreate';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/pizzaCreate' exact element={<PizzaCreate />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
