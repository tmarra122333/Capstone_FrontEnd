import "./App.css";

// IMPORT COMPONENTS

import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import  Gear  from "./pages/Gear";
import  Book  from "./pages/Book";
import  Artists from "./pages/Artists";
import NavBar from "./components/NavBar";
import ShowBook from "./pages/ShowBook";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://capstonecosmic.herokuapp.com/";

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gear" element={<Gear URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/artists" element={<Artists URL={URL} />} />
        <Route path="/book" element={<Book URL={URL} />} />
        <Route path="/book/:id" element={<ShowBook URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
