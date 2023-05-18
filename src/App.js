import './App.css';
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/headnav/navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx"
import About from "./pages/about/about.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );  
}

export default App;
