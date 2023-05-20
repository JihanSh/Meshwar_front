import "./App.css";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/headnav/navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";
import Activity from "./pages/activities/activities.jsx";
import Place from "./pages/Place/Place";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/activity" element={<Activity />}></Route>
          <Route path="/place/:id" element={<Place />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
