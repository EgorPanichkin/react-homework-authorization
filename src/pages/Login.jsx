import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../store/authSlice";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(loginThunk({ userName, password }))
    navigate('/todos')
  }

  const userToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    location.reload();
  }

  if (userToken) {
    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="User Name"/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
        <button className="button">Login</button>
        {error && <p style={{color: "red"}}>Incorrect user name or password</p>}
      </form>
    </>
      
  )
}