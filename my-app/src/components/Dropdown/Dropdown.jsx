import React from 'react';
import { useState, useEffect } from "react";
import './Dropdown.css'
import { getCars } from '../../Services/cars'



export default function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["React", "Vue", "Angular"];
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      const allCars = await getCars()
      setCars(allCars)
    }
    fetchCars()
  }, [])

  cars.map((sock, index) => (
    <h3>name={sock.name}</h3>
      
      
    
  ) 

  )


  return <div>
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>


  </div>;
}
