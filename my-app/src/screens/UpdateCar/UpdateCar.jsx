import React from 'react';
import './UpdateCar.css'
import Layout from '../../components/Layout/Layout';
export default function UpdateCar(props) {
  return <Layout user={props.user}>
    <h2 className='updateheading'>Update a car</h2>
    <div className="form-update">
      
      <form >
        <div className="input-container-update">
          <label>Model </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container-update">
          <label>Year </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container-update">
          <label>Transmission </label>
          <input type="text" name="pass" required />
          
        </div>
        <div className="input-container-update">
          <label>Engine</label>
          <input type="text" name="pass" required />
          
        </div>
        <div className="input-container-update">
          <label>Image</label>
          <input type="text" name="pass" required />
          
        </div>
        <div className="input-container-update">
          <label>Category</label>
          <input type="text" name="pass" required />
          
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    </Layout>
}
