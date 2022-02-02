import './App.css'
import { Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './screens/Home/Home'
import CreateMake from './screens/CreateMake/CreateMake'
import Cars from './screens/Cars/Cars'
import CreateCar from './screens/CreateCar/CreateCar'
import UpdateCar from './screens/UpdateCar/UpdateCar'
import Login from './screens/Login/Login'
import LogOut from './screens/LogOut/LogOut'
import { verifyUser, } from './Services/user'
import { getCars } from './Services/cars'

import Edit from './components/Edit/Edit'
function App() {
  const [user, setUser] = useState(null)
  const [please, setPlease] = useState()
  console.log(user)

  useEffect(() => {
    
    const fetchCarrr = async () => {
      const allCar = await getCars()
      setPlease(allCar)
      }
    fetchCarrr()
  }, [])

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
        <Route path='/cars/create_model' element={<CreateCar please={please} />} />
        <Route path='/cars/create_make' element={<CreateMake user={user} />} />
        <Route path='/sign-in' element={<Login setUser={setUser} />} />
        <Route path='/sign-out' element={<LogOut setUser={setUser} />} />
        <Route path='cars/update/:id' element={<UpdateCar user={user} />} />
        <Route path='/socks/:id' element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App
