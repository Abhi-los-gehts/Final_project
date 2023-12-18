import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Components/Navbar";
import HomePage from "./components/pages/HomePage";
import ExistingTasks from "./components/PagesData/ExistingTasks";
// import SurpriseMe from "./components/pages/SurpriseMe";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./components/PagesData/LoginPage";
import Registration from "./components/PagesData/Registration";

import CompletedTask from "./components/PagesData/CompletedTask";
import Onelist from "./components/PagesData/Onelist";
import { useAppContext } from "./components/context/Appcontext";
import Startpage from "./components/PagesData/Startpage";
import Addnewtask from "./components/PagesData/Addnewtask";
import SurpriseMe from "./components/pages/SurpriseMe";
import Deletetask from "./components/Components/Deletetask";



function App() {

  let{typeList} = useAppContext()

  return (
    <div className="App">
    <Navbar />
    
    <main className='min-h-[88vh]'>
    
      
      <Routes>
      <Route path='/' element={<Startpage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/registration' element={<Registration />} />

        <Route path="/Addnewtask" element={<Addnewtask />} />
        <Route path="/ExistingTasks" element={<ExistingTasks />} />
        
        <Route path={`/${typeList}`} element={<Onelist />} />
       
        <Route path='/CompletedTask' element={<CompletedTask />}/>
        <Route path='/Deletetask' element={<Deletetask />}/>


        <Route path='/SurpriseMe' element={<SurpriseMe />}/>

        <Route path="*" element={<HomePage />} />

        
      </Routes>

      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
