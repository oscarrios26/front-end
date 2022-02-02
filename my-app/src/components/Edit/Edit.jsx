import React from 'react';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getModel, updateModel } from '../../Services/cars'
import Layout from '../Layout/Layout';
import './Edit.css'
export default function Edit() {
  let navigate = useNavigate()

  const [product, setProduct] = useState({
    model: '',
    year: '',
    transmission: '',
    engine: '',
    image: '',
    category: '',
    make: ''
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getModel(id)
      setProduct(product)
    }
    fetchProduct()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateModel(id, product)
    navigate('/')
  }
  return <div>
    <Layout>
    <h2 className='editmodeltitle'>Edit this Model</h2>
    <div className="formeditmodel">
<form onSubmit={handleSubmit}>
          <div className='input-section-edit'>
            <label className='label'> Model</label>
            <input
              className='input-edit'
              value={product.model}
              name='model'
              required
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className='input-section-edit'>
            <label className='label'> Year</label>
            <input
              className='input-edit'
              value={product.year}
              name='year'
              required
              onChange={handleChange}
            />
          </div>

          <div className='input-section-edit'>
            <label className='label'> Transmission</label>
            <input
              className='input-edit'
              rows={10}
              value={product.transmission}
              name='transmission'
              required
              onChange={handleChange}
            />
          </div>
          
          <div className='input-section-edit'>
            <label className='label'> Engine:</label>
            <input
              className='input-edit'
              value={product.engine}
              name='engine'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section-edit'>
            <label className='label'> Image</label>
            <input
              className='input-edit'
              value={product.image}
              name='image'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section-edit'>
            <label className='label'> Category</label>
            <input
              className='input-edit'
              value={product.category}
              name='category'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section-edit'>
            <label className='label'> Make</label>
            <input
              className='input-edit'
              value={product.make}
              name='make'
              required
              onChange={handleChange}
            />
          </div>
          <button className='submit-btn-edit' type='submit'>Submit</button>
        </form>

</div>
        </Layout>
  </div>;
}
