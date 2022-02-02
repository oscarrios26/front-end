import React from 'react';
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { createCar } from '../../Services/cars'
import './CreateModel.css'


export default function CreateModel() {
  let navigate = useNavigate()
  const [makeCreate, setMakeCreate] = useState({  
    make: '',
    
    
   
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setMakeCreate({
      ...makeCreate,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createCar(makeCreate)
    navigate('/')
  }
  return <Layout><div>
   
    <h2 className='createmodel-heading'>Create Brand</h2>
    <div className="form"></div>
    <form className='create-form' onSubmit={handleSubmit}>
    <div className="input-containermodels">
          <label>Make </label>
       <input
         className='input-name'
         placeholder='Make'
         value={makeCreate.make}
         name='make'
         required
         autoFocus
          onChange={handleChange} />
      </div>
     
       
       
       
       <button type='submit' className="signinbtncreate">
         Submit
       </button>
     </form>

</div>
</Layout>
}
