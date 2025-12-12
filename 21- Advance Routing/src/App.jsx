import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="h-screen bg-black text-white">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
