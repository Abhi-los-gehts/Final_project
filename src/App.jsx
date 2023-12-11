import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import AddNewTopic from "./components/pages/AddNewTopic";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import ExistingTasks from "./components/pages/ExistingTasks";
import Excersies from "./components/pages/Excersies";
import Scheduled from "./components/pages/Scheduled";
import DeletedTopics from "./components/pages/DeletedTopics";
import SurpriseMe from "./components/pages/SurpriseMe";

function App() {
  return (
    <div className="App">
      <Navbar />
    

      <Routes>
        <Route path="/Login" element={  <Login />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/AddNewTopic" element={<AddNewTopic />} />
        <Route path="/ExistingTasks" element={<ExistingTasks />} />

        <Route path="/Excersies" element={<Excersies />} />
        <Route path="/Scheduled" element={<Scheduled />} />
        <Route path="/DeletedTopics" element={<DeletedTopics />} />

        <Route path="/SurpriseMe" element={<SurpriseMe />} />



      </Routes>

      <Footer />
    </div>
  );
}

export default App;
