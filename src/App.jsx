import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Todos from './pages/Todos'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route element={<PrivateRoute />}>
          <Route path='/todos' element={<Todos />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
