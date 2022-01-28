



import React from 'react';
import {useEffect, useState} from 'react'
import {getModels} from '../../Services/cars'
import './Cars.css';

export default function Cars(props) {
const [car, setCar] = useState([])
  useEffect(() => {
    const fetchModels = async () => {
    const allModels = await getModels() 
    console.log('all cars', allModels)//iterate throw all cars and set car to the selected cars from props
    console.log(props)//iterate throw all cars and set car to the selected cars from props
    const singleModel = allModels.filter((car) => car.make === props.selectedCar)
      setCar(...singleModel)
    }
    fetchModels()
  }, [props])
console.log(car)
  return <div>
      {car && (
        <><div>
        <p>{car.make}</p>
        <img className='homepageimage' src={car.image} width='400px' />
      </div>
        <div className='infocontainer'>
          <p className='carinfo'>{car.model }</p>
          <p className='carinfo'>{car.year }</p>
          <p className='carinfo'>{car.category }</p>
          <p className='carinfo'>{car.transmission}</p>
          <p className='carinfo'>{car.engine}</p>
        </div></>
      )}
  </div>
}


