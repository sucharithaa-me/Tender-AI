import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    setError('')
    setSuccess('')

    if (email === '') {
      setError('Please enter your email')
      return
    }

    if (password === '') {
      setError('Please enter your password')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    setSuccess('Login details are valid!')

    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className="login-page">
      <h1>Welcome Back</h1>

      <p>Login to Tender AI</p>

      {error && <p>{error}</p>}

      {success && <p>{success}</p>}

      <form className="login-form" onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button className="login-button" type="submit">
  Login
</button>

      </form>


      <p>
  Don't have an account? <Link to="/register">Register</Link>
</p>

    </div>
  )
}

export default Login