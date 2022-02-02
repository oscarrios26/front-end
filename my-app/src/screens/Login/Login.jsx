import { useState } from 'react'
import './Login.css'
import { logIn } from '../../Services/user'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

export default function Login(props) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await logIn(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        password: '',
      })
    }
  }

  const { username, password } = form

  return (
    <Layout>
    <div className='div-sign-in'>
      <h2 className='sign-in-heading'>Welcome back</h2>
      <div className='form'>
        <form onSubmit={handleLogin}>
          <div className='input-container'>
            <label>Username </label>
            <input
              type='text'
              name='username'
              required
              value={username}
              placeholder='Enter Username'
              onChange={handleChange}
            />
          </div>
          <div className='input-container'>
            <label>Password </label>
            <input
              type='password'
              name='password'
              required
              value={password}
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='signinbtn'>
            Submit
          </button>
        </form>
      </div>
      </div>
      </Layout>
  )
}
