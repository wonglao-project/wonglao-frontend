import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { Map, LogIn, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="fixed bg-opacity-60 bg-white shadow-lg w-full top-0 z-40">
      <div className="flex justify-between h-16 items-center pr-8">
        <motion.button whileHover={{ scale: 1.3, color: "#303234" }}>
          <Link to={"/"}>
            <img src="/img/logo.svg" alt="wonglao" className="h-32" />
          </Link>
        </motion.button>

        <div className="flex gap-3">
          {isLoggedIn ? (
            <motion.button
              whileHover={{ scale: 1.3, color: "#303234" }}
              onClick={logout}
            >
              <LogOut size="26" />
            </motion.button>
          ) : (
            <>
              <motion.button whileHover={{ scale: 1.3, color: "#303234" }}>
                <div className="pt-1">
                  <Link to={"/map"}>
                    <Map size="26" />
                  </Link>
                </div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.3,
                  color: "#303234",
                }}
              >
                <div className="pt-1 px-3">
                  <Link to={"/user/login"}>
                    <LogIn size="26" />
                  </Link>
                </div>
              </motion.button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
