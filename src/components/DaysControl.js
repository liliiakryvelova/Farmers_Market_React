import React, {useState} from "react";
import '../App.css';

const menuItems = [
{  
  day: 'Sunday',
  items: ['location: "Lents International"', 'hours: "9:00am - 2:00pm"', 'booth: "4A"'],
  
},
{  
  day: "Monday",
  items: ['location: "Pioneer Courthouse Square"', 'hours: "10:00am - 2:00pm"', 'booth: "7C"'],
  
},
{  
  day: "Tuesday",
  items: ['location: "Hillsboro"', 'hours: "5:00pm - 8:30pm"', 'booth: "1F"'],
},
{  
  day: "Wednesday",
  items: ['location: "Shemanski Park"', 'hours: "10:00am - 2:00pm"', 'booth: "3E"'],
},
{  
  day: "Thursday",
  items: ['location: "Northwest Portland"', 'hours: "2:00pm - 6:00pm"', 'booth: "6D"'],
},
{  
  day: "Saturday",
  items: ['location: "Beaverton"', 'hours: "10:00am - 1:30pm"', 'booth: "9G"']
},
];

function DaysControl() {
  const [isOpen, setIsOpen] = useState({});

  const toggleOpen = (day) => {
    setIsOpen({
      ...isOpen,
      [day]: !isOpen[day],
    });
  };

  return (
    <div className="App">
      <h1>Farmer's market</h1>
      <ul>
        {menuItems.map((menu) => {
          return (
            <li key={menu.day}>

              <button
                onClick={() => {
                  toggleOpen(menu.day);
                  }}>

                  {menu.day} {isOpen[menu.day] ? '-' : '+'}
              </button>

              {isOpen[menu.day] && (<ul>{menu.items.map((item) => {
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


export default DaysControl;

