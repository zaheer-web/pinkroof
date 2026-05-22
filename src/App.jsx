import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./header&footer/Navbar";
import Footer from "./header&footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
// import Process from "./pages/Process";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Conatct from "./pages/Conatct";
import ScrollToTop from "./pages/ScrollToTop";
import Dashboard from "./adminDeshboard/Dashboard";

function Layout() {
  const location = useLocation();

  // Dashboard page check
  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      {/* SCROLL TO TOP */}
      <ScrollToTop />

      {/* TOAST ALERT */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />

      {/* Navbar hide on dashboard */}
      {!isDashboard && <Navbar />}

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

        <Route
          path="/dashboard"
          element={<Dashboard />}
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

      {/* Footer hide on dashboard */}
      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;