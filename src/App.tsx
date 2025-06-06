import './App.css'
import { Login } from './pages/login/Login'
import { CreateEmployee } from './pages/createEmployee/CreateEmployee'
import { EditEmployee } from './pages/editEmployee/EditEmployee'
import { EmployeeDetails } from './pages/employeeDetails/EmployeeDetails'
import { EmployeeList } from './pages/employeeList/EmployeeList'
import { ProtectedLayout } from './components/layout/ProtectedLayout'
import { Profile } from './pages/profile/Profile'
import NotFound from './components/notFound/NotFound'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Navigate to="/login" />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/employees",
    element:<ProtectedLayout />,
    children: [
      {index: true, element:<EmployeeList />},
      {path:"edit/:id", element:<EditEmployee />},
      {path:"details/:id", element:<EmployeeDetails />},
      {path:"create", element:<CreateEmployee />},
      {path:"profile", element: <Profile />}
    ]
  },
  {
    path:"*",
    element:<NotFound />
  }
])

function App() {

  return (
    <Provider store={store}>
        <RouterProvider router = {router} />
    </Provider>
    
  )
}

export default App
