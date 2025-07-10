import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navComponent";
import Hero from "./components/heroComponent";
import Products from "./components/productsComponent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <div className="bg">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/productsx">View Products</Link>
        </nav>

        <Routes>
          <Route path="/productsx" element={<Products />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
