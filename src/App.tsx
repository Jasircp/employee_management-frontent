import './App.css'
import { Login } from './pages/login/Login'
import { CreateEmployee } from './pages/createEmployee/CreateEmployee'
import { Layout } from './components/layout/Layout'
import NotFound from './components/notFound/NotFound'
import UncontrolledLogin from './pages/login/UncontrolledLogin'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const isLoggedIn = ()=>{
  const token = localStorage.getItem("isLoggedIn");
  return token === "true";
}


const router = createBrowserRouter([
  {
    path:"/",
    element: isLoggedIn()? <Navigate to="/employees" /> : <Login />,
  },
  {
  },
  {
    path:"/login",
    element: isLoggedIn()? <Navigate to="/employees" /> : <Login />
  },
  {
    path:"/employees",
    element:isLoggedIn()?<Layout />:<Login />,
    children: [
      {
        index: true, element:<CreateEmployee />
        //element 2
      }
    ]
  },
  {
    path:"*",
    element:<NotFound />
  }
])

function App() {

  return (
    <RouterProvider router = {router} />
  )
}

export default App
