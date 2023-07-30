import { Link } from "react-router-dom"
import { useAuth } from "../providers/AuthProvider"
import { Map } from "lucide-react"

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className='sticky bg-opacity-30 backdrop-blur-lg backdrop-filter'>
      <div className='flex justify-between h-16 items-center px-12'>
        <Link to={"/"}>
          <p className='font-sans'>WONGLAO</p>
        </Link>
        <div className='flex gap-8'>
          {isLoggedIn ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <>
              <Link to={"/user/login"}>
                <p>Login</p>
              </Link>
              <Link to={"/user/register"}>
                <p>Register</p>
              </Link>
            </>
          )}
          <Link to={"/map"}>
            <Map />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
