import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // Replace with real registration logic later
    navigate('/admin/dashboard')
  }

  return (
    <div className='flex items-center justify-center h-screen bg-slate-50'>
      <div className='w-full max-w-md p-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg bg-white'>
        <div className='text-center mb-6'>
          <h1 className='text-3xl font-bold'>Create Account</h1>
          <p className='text-gray-500 mt-2'>Register and continue to the admin panel.</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5'>
          {error && <p className='text-sm text-red-600'>{error}</p>}

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-medium text-gray-700'>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder='Your name'
              className='border-b-2 border-gray-300 p-2 outline-none focus:border-primary'
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='your email id'
              className='border-b-2 border-gray-300 p-2 outline-none focus:border-primary'
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-medium text-gray-700'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='your password'
              className='border-b-2 border-gray-300 p-2 outline-none focus:border-primary'
            />
          </div>

          <div className='flex flex-col'>
            <label className='mb-2 text-sm font-medium text-gray-700'>Confirm Password</label>
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder='confirm password'
              className='border-b-2 border-gray-300 p-2 outline-none focus:border-primary'
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90'
          >
            Register
          </button>
        </form>

        <p className='text-sm text-center text-gray-500 mt-6'>
          Already have an account?{' '}
          <Link to='/admin' className='text-primary font-medium'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register;
