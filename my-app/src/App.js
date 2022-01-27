import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createCar } from './Services/cars';
import Home from './screens/Home/Home'
import About from './screens/About/About'
import CarDetail from './screens/CarDetail/CarDetail'
import Cars from './screens/Cars/Cars'
import CreateCar from './screens/CreateCar/CreateCar'
import Update from './screens/Update/Update'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/car:id' element={<CarDetail/>} />
      <Route path='/cars' element={<Cars/>} />
      <Route path='/cars/:id/create' element={<CreateCar/>}/>
      <Route path='/cars/:id/update' element={<Update/>} />
    </Routes>
  </div>
  );
}

export default App;
