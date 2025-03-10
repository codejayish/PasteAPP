import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      // for a particular path we will load particular element
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },

    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },

    {
      path:"/dashboard",
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      // nested-routing inside the dashboard
      children:[
        {
          path:'courses',
          element: <Courses/>
        },
        {
          path:'mock-tests',
          element: <MockTest/>
        },
        {
          path:'reports',
          element: <Reports/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp />
      </div>

    },
    //if none of the above routes r clicked then we get this error routing 
    {
      path:'*',
      element:<NotFound />
    }
  ]
);


function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
