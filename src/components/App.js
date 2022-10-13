import React from "react";
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import '../App.css';
import ViewControl from './ViewControl';
import Header from "./Header";
// import DaysControl from "./DaysControl";
import Footer from './Footer';


function App() {
  return (
    <React.Fragment>
      <Header />
      <ViewControl />
      {/* <DaysControl /> */}
      {/* <CropsControl /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
