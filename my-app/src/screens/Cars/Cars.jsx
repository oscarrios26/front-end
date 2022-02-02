import React from 'react';
import {useEffect, useState} from 'react'
import {getModels, deleteCar, updateModel} from '../../Services/cars'
import './Cars.css';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Cars(props) {
let navigate = useNavigate()
const [car, setCar] = useState([])
  useEffect(() => {
    const fetchModels = async () => {
    const allModels = await getModels() 
    console.log('all cars', allModels)//iterate throw all cars and set car to the selected cars from props
    console.log(props)//iterate throw all cars and set car to the selected cars from props
    const singleModel = allModels.filter((car) => car.make == props.selectedCar)
      setCar(...singleModel)
    }
    fetchModels()
  }, [props])
  console.log(car)
 
  const handleSubmit = async ( ) => {
   
    await deleteCar(props.selectedCar)
    window.location.reload()
  }
   
  return <><div>
    {car && (
      <>
        <div className='imageandname'>
          <p className='carmake'>{car.model}</p>
          <img id='image1' src={car.image} width='600px' />
        </div>
        <div className='infocontainer'>
          
          <p className='carinfo'>{car.year}</p>
          <p className='carinfo'>{car.category}</p>
          <p className='carinfo'>{car.transmission}</p>
          <p className='carinfo'>{car.engine}</p>
          <div className='btns'>
          <Link className='edit-button' to={`/socks/${car.id}`}>
              <button className='innerBtn'>Edit</button>
          </Link>    
            <button className='innerBtn' onClick={ handleSubmit }>Delete</button> 
            
    </div>
        </div></>
    )}
  </div>

  </>
}