import { useState } from 'react'

import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { createModel, createCar } from '../../Services/cars'

const CarCreate = (props) => {
  let navigate = useNavigate()
  const [modelUpdate, setModelUpdate] = useState({  
    model: '',
    year: '',
    transmission: '',
    engine: '',
    image: '',
    category: '',
   
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setModelUpdate({
      ...modelUpdate,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createModel(modelUpdate)
    navigate('/')
  }

  return (
    <><div>
   
    </div><form className='create-form' onSubmit={handleSubmit}>
        <input
          className='input-name'
          placeholder='Model'
          value={modelUpdate.model}
          name='model'
          required
          autoFocus
          onChange={handleChange} />
        <input
          className='input-price'
          placeholder='Year'
          value={modelUpdate.year}
          name='year'
          required
          onChange={handleChange} />
        <input
          className='input-price'
          placeholder='Transmission'
          value={modelUpdate.transmission}
          name='transmission'
          required
          onChange={handleChange} />
        <input
          className='input-price'
          placeholder='Engine'
          value={modelUpdate.engine}
          name='engine'
          required
          onChange={handleChange} />
        <input
          className='input-price'
          placeholder='Image'
          value={modelUpdate.image}
          name='image'
          required
          onChange={handleChange} />
        <input
          className='input-price'
          placeholder='Category'
          value={modelUpdate.category}
          name='category'
          required
          onChange={handleChange} />
        
        
        
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form></>
   
  )
}

export default CarCreate
