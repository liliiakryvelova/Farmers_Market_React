import React, {useState} from "react";
import '../App.css';
import { availableProduce } from "./availableProduce";



function SeazonsControl() {
  const [isOpen, setIsOpen] = useState({});

  const toggleOpen = (month) => {
    setIsOpen({
      ...isOpen,
      [month]: !isOpen[month],
    });
  };

  return (
    <div className="App">
      <h1>Seasonal Produce</h1>
      <ul>
        {availableProduce.map((season) => {
          return (
            <li key={season.month}>

              <button
                onClick={() => {
                  toggleOpen(season.month);
                  }}>

                  {season.month} {isOpen[season.month] ? '-' : '+'}
              </button>

              {isOpen[season.month] && (<ul>{season.selection.map((item) => {
                    return <li key={item}>{item}</li>;})}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}


export default SeazonsControl;