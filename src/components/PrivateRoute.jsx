import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const userToken = localStorage.getItem('token')

  if (!userToken) {
    return <Navigate to="/login"/>
  }

  return (
    <Outlet />
  )
}
