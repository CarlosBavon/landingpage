import logo from './logo.svg';
import './App.css';
import NavBar from './components/navComponent'
import Hero from './components/heroComponent';
import Products from './components/productsComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <div className='bg'>
        <NavBar/>
        <Hero/>
        <Products/>
      </div>
    </div>
  );
}

export default App;
