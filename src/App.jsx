import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./header&footer/Navbar";
import Footer from "./header&footer/Footer";



import Home from "./pages/Home";
import About from "./pages/About";
// import Process from "./pages/Process";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Conatct from "./pages/Conatct";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      {/* SCROLL TO TOP */}
      <ScrollToTop/>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        {/* <Route
          path="/process"
          element={<Process />}
        /> */}

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/contact"
          element={<Conatct />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;