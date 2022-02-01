import React from 'react'
import Layout from '../../components/Layout/Layout'
import './Home.css'
import Dropdown from '../../components/Dropdown/Dropdown'

import Cars from '../Cars/Cars'

import { useState, useEffect } from 'react'
import { getCars } from '../../Services/cars'

export default function Home(props) {
  const [selectedCar, setSelectedCar] = useState()
  const [cars, setCars] = useState()

  useEffect(() => {
    
    const fetchCars = async () => {
      const allCars = await getCars()
      setCars(allCars)
      // setSelectedCar(allCars)
    
      
    
  }
  fetchCars()
  }, [])
  
  const handleSelection = (e) => {
    //get the users choice from the options
    console.log(e.target.value)
    //update the selected car on home
    setSelectedCar(e.target.value)
  }

  console.log('im selected car', selectedCar)
  return (
    <Layout user={props.user}>
      <div className='App'>
      <>
      
      <div className='drop-down'>
      <form>
        {cars && (
          <select className='drop-down-box'
            defaultValue={cars[0]}
            onChange={(e) => handleSelection(e)}
          >
            {cars.map((car) => (
              <option value={car.id}>{car.id}-{car.make}</option>
            ))}
          </select>
        )}
      </form>
    </div></>
        <Cars selectedCar={selectedCar} />
      </div>
    </Layout>
  )
}

// <img className='homebackground' src='https://cruzeauto.com/wp-content/uploads/2018/11/Porsche-logo-2008-1920x1080.png' alt='cars logos' width='400px' height='200px'
// />

// <img className='homebackground' src='https://www.car-brand-names.com/wp-content/uploads/2015/08/Chevrolet-logo.png' alt='cars logos' width='400px' height='200px'
// />
// <img className='homebackground' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Eh1Uue2JNwD202Ny-EzI1edzCKhMsiFlhA&usqp=CAU' alt='cars logos' width='300px' height='200px'
// />
// <img className='homebackground' src='https://pictures.dealer.com/j/jimellisaudiatlantaaoa/1047/70e485452c868b71f14cd5e1286ed574x.jpg' alt='cars logos' width='300px' height='200px'
// />
// <img className='homebackground' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1RlOwQwI4OlX3TfcKG3Tp6JYS0Ifg7vigA-ZWf_xEi7XI-Ssaqa9wA55Snwan83Dx2c&usqp=CAU' alt='cars logos' width='300px' height='200px'
// />
// <img className='homebackground' src='https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png' alt='cars logos' width='300px' height='200px'
// />
// <img className='homebackground' src='https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo-1976.jpg' alt='cars logos' width='450px' height='300px'   //
// />
// <img className='homebackground' src='https://www.carlogos.org/car-logos/scuderia-ferrari-logo-800x1050.png' alt='cars logos' width='300px' height='200px'
// />
// <img className='homebackground' src='http://assets.stickpng.com/images/580b585b2edbce24c47b2c2c.png' alt='cars logos' width='400px' height='300px'
// />
// <img className='homebackground' src='https://1000logos.net/wp-content/uploads/2021/04/Jaguar-logo.png' alt='cars logos' width='400px' height='300px'
// />
// <img className='homebackground' src='https://www.carlogos.org/car-logos/bmw-logo-2020-grey.png' alt='cars logos' width='300px' height='300px'
//   />
// <img className='homebackground' src='https://i2.wp.com/www.premiereurocars.com/wp-content/uploads/2015/01/mercedes-benz-cars-logo-emblem.jpg?ssl=1' alt='cars logos' width='320px' height='300px'
//   />
