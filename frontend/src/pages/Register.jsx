import { useState } from 'react'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    setError('')
    setSuccess('')

    if (name === '') {
      setError('Please enter your name')
      return
    }

    if (email === '') {
      setError('Please enter your email')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    if (password === '') {
      setError('Please enter a password')
      return
    }

    if (confirmPassword === '') {
      setError('Please confirm your password')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setSuccess('Registration form is valid!')

    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className="register-page">
      <div className="register-form">

      <h1>Create Account</h1>

      <h2>Join Tender AI</h2>

      {error && <p>{error}</p>}

      {success && <p>{success}</p>}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>

      </form>
         </div>
    </div>
  )
}

export default Register