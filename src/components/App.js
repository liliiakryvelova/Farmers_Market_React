import React from "react";
import '../App.css';
import Header from "./Header";
import DaysControl from "./DaysControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <DaysControl />
      {/* <CropsControl /> */}
    </React.Fragment>
  );
}

export default App;
