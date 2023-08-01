import { Link } from "react-router-dom"
import { useAuth } from "../providers/AuthProvider"
import { Map } from "lucide-react"
import { motion } from "framer-motion"

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className='sticky bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg'>
      <div className='flex justify-between h-16 items-center pr-12 pl-5'>
        <motion.button whileHover={{ scale: 1.3, color: "#303234" }}>
          <Link to={"/"}>
            <img src='public/img/logo.svg' alt='wonglao' className='h-32' />
          </Link>
        </motion.button>

        <div className='flex gap-8'>
          {isLoggedIn ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <>
              <Link to={"/user/login"}>
                <motion.button
                  whileHover={{
                    scale: 1.3,
                    color: "#303234",
                  }}
                >
                  <p>Login</p>
                </motion.button>
              </Link>

              <motion.button whileHover={{ scale: 1.3, color: "#303234" }}>
                <Link to={"/user/register"}>
                  <p>Register</p>
                </Link>
              </motion.button>
            </>
          )}

          <motion.button whileHover={{ scale: 1.3, color: "#303234" }}>
            <Link to={"/map"}>
              <Map />
            </Link>
          </motion.button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
