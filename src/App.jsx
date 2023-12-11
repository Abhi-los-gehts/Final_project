import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import AddNewTopic from "./components/pages/AddNewTopic";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/AddNewTopic" element={<AddNewTopic />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
