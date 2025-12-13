import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import NotFoundPage from "./Pages/NotFoundPage";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";

function App() {
  return (
    <>
      <div className="h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}>
            <Route path="mens" element={<Mens />} />
            <Route path="womens" element={<Womens />} />
            <Route path="kids" element={<Kids />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
