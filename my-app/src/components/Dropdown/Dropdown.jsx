import React from 'react'
import { useState, useEffect } from 'react'
import './Dropdown.css'
import { getCars } from '../../Services/cars'

export default function Dropdown(props) {
  const [cars, setCars] = useState()

  useEffect(() => {
    const fetchCars = async () => {
      const allCars = await getCars()
      setCars(allCars)
      if (props) props.setSelectedCar(allCars[0].make)
    }
    fetchCars()
  }, [])

  const handleSelection = (e) => {
    //get the users choice from the options
    console.log(e.target.value)
    //update the selected car on home
    props.setSelectedCar(e.target.value)
  }

  return (
    <div className='drop-down'>
      <form>
        {cars && (
          <select className='drop-down-box'
            defaultValue={cars[0].make}
            onChange={(e) => handleSelection(e)}
          >
            {cars.map((car) => (
              <option value={car.make}>{car.make}</option>
            ))}
          </select>
        )}
      </form>
    </div>
  )
}
