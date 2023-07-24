import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="sticky bg-opacity-30 backdrop-blur-lg backdrop-filter">
          <div className="flex justify-between h-16 items-center px-12">
            <Link to={'/'}>
            <p className="font-sans">
              WONGLAO
            </p>
            </Link>
            <div className="flex gap-8">
                  <p>Login</p>
                  <p>Register</p>
                  <Link to={'/map'}>
                    <p>Map</p>
                  </Link>
            </div>
          </div>
        </nav>
      )
}

export default Navbar