import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {




  return (
    <div className="App">
      <Router>
        <Link to='/cart'> My Cart </Link>
        <Routes>
          <Route path='/' exact element ={<Home />} />
          <Route path='/cart' exact element ={<Cart />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
