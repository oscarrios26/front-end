
import './CreateCar.css'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { createModel} from '../../Services/cars'
import { useState} from 'react'

const CarCreate = ({please}) => {
  

  

  let navigate = useNavigate()
  const [modelUpdate, setModelUpdate] = useState({
    model: '',
    year: '',
    transmission: '',
    engine: '',
    image: '',
    category: '',
    make: ''
   
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
  <><>
        <Layout>

        <h2 className='createmodeltitle'>Create a Model </h2>
        <div className='instructionsdiv'>
        <p className='instructions'>Create brand first then go back home and
            look for the brand you created in the dropdown menu and copy the id and paste it below under Make id.</p>
            </div>
          <div className="formcreatemodel">
            <form onSubmit={handleSubmit}>

              <div className="input-containercreatecar">
                <label>Model </label>
                <input
                  className='input-name'
                  placeholder='Model'
                  value={modelUpdate.model}
                  name='model'
                  required
                  autoFocus
                  onChange={handleChange} />
              </div>

              <div className="input-containercreatecar">
                <label>Year</label>
                <input
                  className='input-price'
                  placeholder='Year'
                  value={modelUpdate.year}
                  name='year'
                  required
                  onChange={handleChange} />
              </div>

              <div className="input-containercreatecar">
                <label>Transmission</label>
                <input
                  className='input-price'
                  placeholder='Transmission'
                  value={modelUpdate.transmission}
                  name='transmission'
                  required
                  onChange={handleChange} />
              </div>

              <div className="input-containercreatecar">
                <label>Engine</label>
                <input
                  className='input-price'
                  placeholder='Engine'
                  value={modelUpdate.engine}
                  name='engine'
                  required
                  onChange={handleChange} />
              </div>

              <div className="input-containercreatecar">
                <label>Image</label>
                <input
                  className='input-price'
                  placeholder='Image'
                  value={modelUpdate.image}
                  name='image'
                  required
                  onChange={handleChange} />
              </div>

              <div className="input-containercreatecar">
                <label>Category</label>
                <input
                  className='input-price'
                  placeholder='Category'
                  value={modelUpdate.category}
                  name='category'
                  required
                  onChange={handleChange} />
              </div>

              <div className="input-containercreatecar">
                <label>Make id</label>
                <input
                  className='input-price'
                  placeholder='Make id'
                  value={modelUpdate.make}
                  name='make'
                  required
                  onChange={handleChange} />

              </div>


              <button type='submit' id='buttonforcreatemodel'>
                Submit
              </button>

            </form>

          </div>
        </Layout>
      </></>
   
  )
}

export default CarCreate
