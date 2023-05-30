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
import MeshwarLayout from "./pages/meshwarLayout";
import { useState } from "react";
function App() {

  return (
    
    <BrowserRouter>
      <div className="App">
        
        
        <Routes>
          <Route  element={<MeshwarLayout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/activity" element={<Activity />}/>
          <Route path="/places" element={<PlaceSelect />}/>
          <Route path="/placebyactivity" element={<PlacebyActivity />}/>
          <Route path="/location" element={<PlacebyLocation />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/placeInfo" element={<PlaceInfo />}/>
          </Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
