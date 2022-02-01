import { useEffect } from 'react'
import { logOut } from '../../Services/user'
import { useNavigate } from 'react-router-dom'

const LogOut = (props) => {
  const { setUser } = props
  const navigate = useNavigate()

  useEffect(() => {
    const logOutUser = async () => {
      await logOut()
      setUser(null)
      navigate('/')
    }
    logOutUser()
  }, [navigate, setUser])

  return ''
}

export default LogOut
