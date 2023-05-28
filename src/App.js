import "./App.css";
import { Navbar } from "./components/headnav/navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";
import Activity from "./pages/activities/activities.jsx";
import PlacebyLocation from "./pages/Place/PlacebyLocation";
import PlaceSelect from "./pages/Place/PlaceSelect";
import Contact from "./pages/contact/contact";
import PlacebyActivity from "./pages/Place/placebyActivity";
import PlaceInfo from "./pages/Place/place";
import LoginForm from "./pages/login/login";
import Footer from "./components/footer/footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/activity" element={<Activity />}></Route>
          <Route path="/places" element={<PlaceSelect />}></Route>
          <Route path="/placebyactivity" element={<PlacebyActivity />}></Route>
          <Route path="/location" element={<PlacebyLocation />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/placeInfo" element={<PlaceInfo />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
