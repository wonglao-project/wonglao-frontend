import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { FormEvent, useState } from 'react'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(usernameInput, passwordInput)

      navigate('/')
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <div className="py-12 flex flex-col items-center">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-left w-2/6 mt-10"
    >
      <div>
        <label className='text-[#797979] text-md mb-2 mt-10'>Username</label>
        <input className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]" type="text" onChange={(e) => setUsernameInput(e.target.value)} required />
      </div>
      <div>
        <label className='text-[#797979] text-md mb-2 mt-10'>Password</label>
        <input className="mt-0 mb-10 block w-full px-0.5 border-0 border-b-2 border-gray-200 bg-[#F6F6FC] focus:ring-0 focus:border-[#797979]" type="password" onChange={(e) => setPasswordInput(e.target.value)} required />
      </div>
      <button className="bg-gray-200 p-3 rounded-lg text-white hover:bg-[#797979]">Login</button>
    </form>
    </div>
  )
}

export default Login