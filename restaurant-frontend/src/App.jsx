import React from "react";

import Accueil from './Pages/Accueil/Accueil';
import Menu from './Pages/Menu/Menu';
import Contacts from "./Pages/Contacts/Contacts";
import Reserves from "./Pages/Reserves/Reserves";

import Navbar from './components/Navbar/Navbar'; 
// import Comments from "./components/Comments/Comments";
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    
    <div>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Contacts" element={<Contacts/>} />
        <Route path="/Reserves" element={<Reserves/>} />
      </Routes>
      <modelviewer/>
      
      <Footer/>

    </div>
    );

};

export default App;
