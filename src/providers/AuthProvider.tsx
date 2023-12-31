import React, { createContext, useContext, useState } from "react"
import { host } from "../constant/host"

interface IAuthContext {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
  register: (username: string, password: string, name: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<IAuthContext | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error("useAuth must be used inside AuthProvider!")

  return context
}

const token = localStorage.getItem("token")
const user = localStorage.getItem("user")

interface IAuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)

  const login = async (username: string, password: string) => {
    const loginInfo = { username, password }

    try {
      const res = await fetch(`${host}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      })
      //better way to check http status code is from HTTP protocol directly as follow,
      // if(res.status > 400)
      //   throw new Error(res.statusText)
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }

      const data = await res.json()

      localStorage.setItem("token", data.token)
      localStorage.setItem("user", username)
      setIsLoggedIn(true)
      setUsername(username)
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  const register = async (username: string, password: string, name: string) => {
    const registerBody = { username, name, password }

    try {
      const res = await fetch(`${host}/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerBody),
      })

      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    setUsername(null)
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, register, username }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
