import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createCar } from './Services/cars'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Cars from './screens/Cars/Cars'
import CreateCar from './screens/CreateCar/CreateCar'
import UpdateCar from './screens/UpdateCar/UpdateCar'
import Login from './screens/Login/Login'
import LogOut from './screens/LogOut/LogOut'
import { logOut, verifyUser } from './Services/user'
function App() {
  const [user, setUser] = useState(null)
  console.log(user)

  

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  console.log(user)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/cars' element={<Cars user={user} />} />
        <Route path='/cars/create' element={<CreateCar user={user} />} />
        <Route path='/sign-in' element={<Login setUser={setUser} />} />
        <Route path='/sign-out' element={<LogOut setUser={setUser} />} />
        <Route path='cars/update/:id' element={<UpdateCar user={user} />} />
      </Routes>
    </div>
  )
}

export default App
